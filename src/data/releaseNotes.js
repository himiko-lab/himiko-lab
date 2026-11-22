/*
 * Membaca teks "Yang baru" dari Google Play (src/data/releases.json) menjadi
 * bagian-bagian yang dipakai tulisan Kabar otomatis.
 *
 * Teks Play tidak punya format tetap. Yang ditemui sejauh ini:
 * - baris pembuka yang diakhiri titik dua ("Yang baru di Morvyn 1.7.0:"),
 *   dibuang karena judul tulisan sudah menyebut versinya;
 * - baris pembuka berupa kalimat ("Morvyn kini nyaman di tablet dan ponsel
 *   lipat."), dipakai sebagai kalimat utama tulisan;
 * - butir yang diawali `•` atau `-`;
 * - butir yang diawali nama bagian aplikasi ("Agenda: urutkan ..."), yang
 *   nama bagiannya dipisah menjadi label.
 */

const BULLET = /^[•\-*·]\s*/;

// "Agenda: urutkan ..." atau "Utang & Piutang: ringkasan ...". Nama bagian
// dibatasi pendek dan tanpa tanda baca kalimat, supaya kalimat biasa yang
// kebetulan memuat titik dua tidak ikut terpotong.
const AREA = /^([^:.!?]{2,32}):\s+(.+)$/;

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function splitArea(text) {
  const match = text.match(AREA);
  if (!match) return { area: null, text: capitalize(text) };
  return { area: match[1].trim(), text: capitalize(match[2].trim()) };
}

/** `{ headline, changes: [{ area, text }] }` dari satu teks "Yang baru". */
export function parseReleaseNotes(text) {
  let headline = null;
  const items = [];

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (BULLET.test(line)) {
      items.push(line.replace(BULLET, ''));
    } else if (line.endsWith(':')) {
      // Baris pembuka seperti "Yang baru di Morvyn 1.7.0:".
    } else if (headline === null && items.length === 0) {
      headline = line;
    } else {
      items.push(line);
    }
  }

  return { headline, changes: items.map(splitArea) };
}
