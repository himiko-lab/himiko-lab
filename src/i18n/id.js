export default {
  common: {
    skip: 'Lewati ke konten',
    newTab: '(buka di tab baru)',
    // Logo sebagai tanda merek memakai nama mereknya saja sebagai teks alt.
    himikoLogoAlt: 'Himiko Lab',
    morvynLogoAlt: 'Morvyn',
    himikoLogoTitle: 'Logo Himiko Lab',
  },

  nav: {
    label: 'Navigasi utama',
    home: 'Beranda',
    morvyn: 'Morvyn',
    about: 'Tentang',
    news: 'Kabar',
    contact: 'Kontak',
    morvynSite: 'Situs Morvyn',
    download: 'Unduh',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    breadcrumb: 'Jejak halaman',
  },

  lang: {
    current: 'ID',
    other: 'EN',
    switchLabel: 'Baca dalam bahasa Inggris',
  },

  // Judul dan deskripsi untuk <head>. Dipakai src/seo.js.
  meta: {
    home: {
      title: 'Himiko Lab - Studio Aplikasi Digital, Pembuat Morvyn',
      description:
        'Himiko Lab adalah studio aplikasi digital pembuat Morvyn, aplikasi Android yang menyatukan catatan, keuangan, agenda, dan kebutuhan harian lain dalam satu tempat.',
    },
    morvyn: {
      title: 'Morvyn - Aplikasi Harian dari Himiko Lab',
      description:
        'Ringkasan Morvyn, aplikasi Android buatan Himiko Lab: delapan menu harian, cara data Anda ditangani, dan tautan ke situs resminya.',
    },
    about: {
      title: 'Tentang Himiko Lab - Studio di Balik Morvyn',
      description:
        'Kenali Himiko Lab: studio aplikasi digital yang membangun perangkat lunak untuk keseharian, cara pandangnya, dan arti di balik logonya.',
    },
    news: {
      title: 'Kabar Himiko Lab - Catatan Rilis dan Pembaruan Morvyn',
      description:
        'Kabar dari Himiko Lab: catatan rilis Morvyn dan pembaruan lain dari studio, diurutkan dari yang terbaru.',
    },
    contact: {
      title: 'Kontak Himiko Lab - Masukan, Laporan Masalah, dan Kerja Sama',
      description:
        'Cara menghubungi Himiko Lab untuk masukan, laporan masalah, dan kerja sama: email, akun media sosial, dan tautan Morvyn di Google Play.',
    },
    notFound: {
      title: 'Halaman tidak ditemukan - Himiko Lab',
      description: 'Alamat yang Anda buka tidak ada di situs Himiko Lab.',
    },
    organization:
      'Studio aplikasi digital yang membangun aplikasi harian, pengembang aplikasi Morvyn.',
    app: 'Aplikasi Android dari Himiko Lab yang menyatukan catatan, keuangan, agenda, kebiasaan, cuaca, kalender, berita, dan info gempa.',
    ogImageAlt: 'Logo dan nama Himiko Lab',
  },

  hero: {
    eyebrow: 'Studio Aplikasi Digital',
    // Nama merek sengaja berada di judul utama (H1) beranda.
    title: 'Himiko Lab, studio aplikasi harian',
    tagline: 'Aplikasi harian yang membuat hidup terasa lebih ringan',
    subtitle:
      'Himiko Lab adalah studio aplikasi digital pembuat Morvyn, aplikasi Android yang menyatukan catatan, keuangan, agenda, dan kebutuhan harian lain dalam satu tempat.',
    ctaPrimary: 'Lihat Morvyn',
    ctaSecondary: 'Tentang Himiko Lab',
  },

  // Data produk, dipakai bersama oleh beranda dan halaman /morvyn/.
  // Sumber: morvyn.himikolab.my.id dan kebijakan privasinya (dicek 2026-11-22,
  // Morvyn 1.7.0).
  morvyn: {
    name: 'Morvyn',
    eyebrow: 'Produk Kami',
    tagline: 'Aplikasi harian dari Himiko Lab',
    description:
      'Morvyn menyatukan delapan kebutuhan harian yang biasanya tersebar di banyak aplikasi ke dalam satu tempat yang tenang. Satu catatan bisa ditautkan langsung ke agenda, keuangan, dan kebiasaan.',
    tags: ['Android', 'Indonesia dan Inggris', 'Tanpa iklan'],
    featuresLabel: 'Delapan menu di dalamnya',
    features: [
      {
        title: 'Catatan',
        short: 'Teks, daftar centang, gambar, coretan tangan, dan lampiran PDF dalam satu catatan.',
        long: 'Tulis catatan biasa, daftar poin, atau daftar centang. Catatan bisa memuat gambar, coretan tangan, rumus matematika, dan lampiran PDF, dan dokumen bisa dipindai menjadi PDF. Catatan juga bisa dikunci dengan kunci layar ponsel.',
      },
      {
        title: 'Keuangan',
        short: 'Catat pemasukan dan pengeluaran di beberapa dompet, lalu lihat polanya lewat grafik.',
        long: 'Catat pemasukan dan pengeluaran di beberapa dompet, pindahkan saldo di antaranya, lihat polanya lewat grafik, dan periksa nilai tukar mata uang. Utang & Piutang mencatat cicilan beserta pengingat jatuh temponya.',
      },
      {
        title: 'Agenda',
        short: 'Alarm, jadwal acara, dan daftar tugas dalam satu daftar.',
        long: 'Alarm dengan pola pengulangan dan nada dari lagu milik Anda sendiri, jadwal acara beserta pengingatnya, dan tugas dengan sub-tugas, prioritas, dan tenggat, semuanya diatur dari satu tempat.',
      },
      {
        title: 'Berita',
        short: 'Kabar dari 29 portal nasional dan internasional, dikelompokkan per kategori.',
        long: 'Dua puluh sembilan portal nasional dan internasional dikumpulkan jadi satu dan dikelompokkan per kategori, seperti bisnis, olahraga, dan teknologi.',
      },
      {
        title: 'Kebiasaan',
        short: 'Tentukan target, lalu pantau rentetan harinya lewat pengingat.',
        long: 'Tentukan target harian atau hanya di hari tertentu. Morvyn mengingatkan dan menghitung rentetan harinya.',
      },
      {
        title: 'Cuaca',
        short: 'Prakiraan 24 jam dan beberapa hari ke depan berdasarkan lokasi perangkat.',
        long: 'Prakiraan 24 jam yang bisa digeser dan beberapa hari ke depan berdasarkan lokasi perangkat Anda, tampil berdampingan dengan agenda hari itu.',
      },
      {
        title: 'Kalender',
        short: 'Satu bulan penuh, lengkap dengan tugas dan acara di tanggalnya.',
        long: 'Tampilan bulanan yang sudah memuat tugas dan acara di tanggalnya masing-masing, tersambung langsung ke Agenda.',
      },
      {
        title: 'Gempa',
        short: 'Info gempa terbaru dari BMKG atau USGS. Bukan peringatan dini.',
        long: 'Info gempa terbaru dari BMKG bila Anda di Indonesia dan dari U.S. Geological Survey bila di luar Indonesia. Ini info gempa, bukan peringatan dini.',
      },
    ],
    ctaDetails: 'Selengkapnya tentang Morvyn',
    ctaWebsite: 'Situs resmi Morvyn',
    ctaPrivacy: 'Baca Kebijakan Privasi Morvyn',
    // Hanya salah satu yang tampil, sesuai PLAY_STORE_LIVE di src/data/links.js.
    status: {
      soon: 'Segera hadir di Google Play',
      live: 'Unduh di Google Play',
    },
  },

  principles: {
    eyebrow: 'Prinsip',
    title: 'Yang kami pegang saat membangun',
    items: [
      {
        title: 'Sederhana lebih dulu',
        body: 'Setiap fitur harus sepadan dengan ruang yang ditempatinya. Kalau tidak, kami tinggalkan.',
      },
      {
        title: 'Ringan dan cepat',
        body: 'Aplikasi yang lambat tidak akan dipakai. Kecepatan kami perlakukan sebagai fitur utama, bukan pelengkap.',
      },
      {
        title: 'Isi aplikasi tetap di perangkat Anda',
        body: 'Catatan, keuangan, agenda, dan kebiasaan di Morvyn disimpan di perangkat Anda, bukan di server kami. Statistik penggunaan dan laporan crash kami jelaskan terbuka.',
        linkLabel: 'Lihat rinciannya',
      },
      {
        title: 'Rapi sampai detail',
        body: 'Jarak, gerak, dan pilihan kata kami tata agar aplikasi tetap terasa tenang saat dipakai berjam-jam.',
      },
    ],
  },

  // Ringkasan di beranda. Versi lengkapnya ada di aboutPage.
  about: {
    eyebrow: 'Tentang Kami',
    title: 'Kami membangun aplikasi untuk keseharian',
    paragraphs: [
      'Himiko Lab adalah studio aplikasi digital. Kami membuat perangkat lunak untuk urusan sehari-hari: mencatat, mengatur waktu, mengelola keuangan, dan menjaga kebiasaan baik.',
      'Kami percaya teknologi seharusnya memberi ketenangan, bukan kerumitan. Morvyn adalah aplikasi yang kami bangun dengan keyakinan itu.',
    ],
    logoNote:
      'Logo kami terinspirasi dari </>, simbol yang akrab bagi siapa pun yang menulis kode: dua bentuk yang sama membentuk kurung siku, dan celah di antaranya menjadi garis miring.',
    cta: 'Selengkapnya tentang kami',
  },

  aboutPage: {
    eyebrow: 'Tentang',
    title: 'Tentang Himiko Lab',
    lead: 'Himiko Lab adalah studio aplikasi digital dan pengembang Morvyn. Kami membuat perangkat lunak untuk urusan sehari-hari.',
    story: {
      eyebrow: 'Cara Pandang',
      title: 'Teknologi seharusnya memberi ketenangan',
      sloganLabel: 'Slogan Kami',
      paragraphs: [
        'Kami membuat perangkat lunak yang membantu urusan sehari-hari: mencatat, mengatur waktu, mengelola keuangan, dan menjaga kebiasaan baik.',
        'Kami percaya teknologi seharusnya memberi ketenangan, bukan kerumitan. Karena itu setiap produk kami mulai dari pertanyaan sederhana: apa yang sebenarnya dibutuhkan orang, dan apa yang justru bisa dihilangkan?',
        'Hasilnya adalah aplikasi yang ringkas, tampak jernih, dan bekerja diam-diam di latar belakang, supaya Anda punya lebih banyak waktu untuk hal yang benar-benar berarti.',
      ],
    },
    product: {
      eyebrow: 'Yang Kami Buat',
      title: 'Morvyn',
      body: 'Morvyn adalah aplikasi Android dari Himiko Lab. Ia menyatukan catatan, keuangan, agenda, kebiasaan, cuaca, kalender, berita, dan info gempa dalam satu tempat.',
    },
  },

  logoMeaning: {
    eyebrow: 'Identitas',
    title: 'Arti di balik logo',
    intro:
      'Logo Himiko Lab terinspirasi dari </>, simbol yang dikenal setiap orang yang menulis kode.',
    steps: [
      {
        symbol: '<',
        title: 'Belahan kiri',
        body: 'Bentuk pertama membuka tanda kurung siku, awal dari sebuah baris kode.',
      },
      {
        symbol: '/',
        title: 'Celah tengah',
        body: 'Ruang kosong diagonal di antara kedua bentuk membentuk garis miring.',
      },
      {
        symbol: '>',
        title: 'Belahan kanan',
        body: 'Bentuk yang sama, dicerminkan, menutup kurung dan melengkapi simbolnya.',
      },
    ],
    conclusion:
      'Ketiganya menyatu menjadi </>, penanda bahwa semua yang kami buat lahir dari baris-baris kode.',
  },

  morvynPage: {
    eyebrow: 'Produk Himiko Lab',
    title: 'Morvyn, satu aplikasi untuk kebutuhan harian Anda',
    lead: 'Morvyn adalah aplikasi Android buatan Himiko Lab yang menyatukan catatan, keuangan, agenda, kebiasaan, cuaca, kalender, berita, dan info gempa.',
    factsLabel: 'Sekilas',
    facts: [
      { value: '8', label: 'menu dalam satu aplikasi' },
      { value: '29', label: 'portal berita nasional dan internasional' },
      { value: '2', label: 'bahasa: Indonesia dan Inggris' },
      { value: 'Android', label: 'belum tersedia untuk iPhone' },
    ],
    features: {
      eyebrow: 'Isi Aplikasi',
      title: 'Delapan menu yang saling terhubung',
      subtitle:
        'Setiap menu bisa dipakai sendiri. Anda tidak harus memakai semuanya.',
    },
    connected: {
      eyebrow: 'Yang Membedakan',
      title: 'Catatan yang tahu isi hari Anda',
      body: 'Satu catatan bisa menautkan tugas di Agenda, pengeluaran di Keuangan, dan target di Kebiasaan. Saat catatan dibuka, konteksnya ikut terbuka.',
      widgets:
        'Lima widget layar utama tersedia untuk Catatan, Keuangan, Agenda, Kebiasaan, dan Cuaca.',
    },
    privacy: {
      eyebrow: 'Data dan Privasi',
      title: 'Apa yang disimpan, dan apa yang dikirim',
      subtitle:
        'Ringkasan dari Kebijakan Privasi Morvyn. Kami memisahkannya menjadi empat hal agar jelas mana yang tinggal di perangkat dan mana yang tidak.',
      items: [
        {
          title: 'Isi aplikasi',
          body: 'Catatan, keuangan, agenda, dan kebiasaan disimpan di perangkat Anda. Morvyn tidak punya server sendiri, sehingga Himiko Lab tidak dapat melihat isinya.',
        },
        {
          title: 'Akun dan pencadangan, opsional',
          body: 'Masuk dengan Google, pencadangan ke Google Drive, dan sinkronisasi Google Calendar semuanya opsional. Bila Anda masuk, catatan masuk yang antara lain berisi alamat email, nama tampilan, dan URL foto profil tersimpan di Firebase Authentication, dan bisa Anda hapus sendiri dari dalam aplikasi.',
        },
        {
          title: 'Statistik penggunaan',
          body: 'Morvyn memakai Firebase Analytics untuk mengetahui menu mana yang dibuka. Statistik ini selalu aktif dan tidak bisa dimatikan dari dalam aplikasi. Yang sengaja dikirim hanya nama menu, tanpa isi catatan, keuangan, agenda, kebiasaan, maupun lokasi Anda. SDK Google juga mengumpulkan data teknis secara otomatis.',
        },
        {
          title: 'Laporan crash',
          body: 'Firebase Crashlytics mengirim laporan saat aplikasi gagal, berisi jejak galat dan data teknis perangkat. Laporan ini juga selalu aktif.',
        },
      ],
      note: 'Morvyn tidak memuat iklan, dan tidak ada data yang dijual. Ringkasan ini tidak menggantikan kebijakan privasi lengkapnya.',
    },
    availability: {
      eyebrow: 'Ketersediaan',
      title: 'Untuk Android, lewat Google Play',
      soon: 'Morvyn sedang disiapkan untuk rilis di Google Play dan belum bisa diunduh. Aplikasi ini khusus Android dan belum tersedia untuk iPhone.',
      live: 'Morvyn tersedia gratis di Google Play. Aplikasi ini khusus Android, bisa dipakai di ponsel, tablet, dan ponsel lipat, dan belum tersedia untuk iPhone.',
      websiteNote: 'Penjelasan tiap menu, tanya jawab, dan ketentuan layanan ada di situs resmi Morvyn.',
    },
  },

  tech: {
    eyebrow: 'Cara Kerja',
    title: 'Cara kami membangun',
    subtitle: 'Tiga tahap yang kami ulang terus-menerus.',
    steps: [
      {
        title: 'Rancang',
        body: 'Kami mulai dari masalah nyata, bukan dari daftar fitur. Setiap layar diuji di atas kertas sebelum ditulis jadi kode.',
      },
      {
        title: 'Bangun',
        body: 'Versi pertama dibuat kecil dan cepat, supaya bisa benar-benar dicoba sesegera mungkin.',
      },
      {
        title: 'Rapikan',
        body: 'Kami pakai sendiri setiap hari, mendengarkan masukan, lalu memangkas apa yang ternyata tidak terpakai.',
      },
    ],
  },

  // Halaman /kabar/. Catatan rilis Morvyn dibuat otomatis dari
  // src/data/releases.json memakai templat `auto`. Tulisan tangan di `posts`,
  // dengan slug dari src/data/posts.js sebagai kuncinya, menimpa isi otomatis.
  news: {
    eyebrow: 'Kabar',
    title: 'Kabar dari Himiko Lab',
    lead: 'Catatan rilis Morvyn dan pembaruan lain dari Himiko Lab, dari yang terbaru.',
    listLabel: 'Daftar tulisan',
    readMore: 'Baca tulisan',
    back: 'Semua kabar',
    months: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    // Halaman daftar Kabar kedua dan seterusnya. {page} diisi nomor halaman,
    // {total} jumlah halaman.
    pageMeta: {
      title: 'Kabar Himiko Lab - Halaman {page}',
      description:
        'Kabar dari Himiko Lab, halaman {page}: catatan rilis Morvyn dan pembaruan lain dari studio, diurutkan dari yang terbaru.',
    },
    pagination: {
      label: 'Halaman daftar Kabar',
      previous: 'Sebelumnya',
      next: 'Berikutnya',
      page: 'Halaman {page}',
      pageOf: 'Halaman {page} dari {total}',
    },
    // Templat catatan rilis otomatis. {version} dan {count} diisi dari data
    // rilis, {areas} dari nama bagian aplikasi di teks Play.
    auto: {
      eyebrow: 'Catatan Rilis',
      title: 'Morvyn {version}: catatan rilis',
      summaryLead: 'Catatan rilis Morvyn {version}.',
      overview: 'Catatan rilis Morvyn {version}, berisi {count} perubahan.',
      overviewAreas: 'Catatan rilis Morvyn {version}, berisi {count} perubahan, antara lain di {areas}.',
      and: 'dan',
      introLead: 'Morvyn {version} mulai tersedia di Google Play.',
      introSource: 'Daftar di bawah ini disalin dari catatan rilis Morvyn di Google Play.',
      changesTitle: 'Yang berubah di versi {version}',
      closingTitle: 'Selengkapnya tentang Morvyn',
      closing:
        'Penjelasan tiap menu Morvyn ada di situs resminya, dan aplikasinya tersedia di Google Play.',
    },
    posts: {
      // Isi tulisan ini hanya perubahan yang memang ada di versi 1.3.1.
      // Tanggal rilis di Google Play tidak dicantumkan karena tidak diketahui.
      'morvyn-1-3-1': {
        eyebrow: 'Catatan Rilis',
        title: 'Morvyn 1.3.1: perbaikan editor Catatan, tugas terlambat, dan widget Keuangan',
        summary:
          'Morvyn 1.3.1 memuat empat perbaikan: dua di editor Catatan, satu untuk tugas terlambat di Agenda, dan satu di widget Keuangan.',
        intro:
          'Morvyn 1.3.1 adalah pembaruan perbaikan. Ada empat perubahan di versi ini, di Catatan, Agenda, dan widget Keuangan.',
        changesTitle: 'Yang berubah di versi 1.3.1',
        changes: [
          {
            area: 'Catatan',
            text: 'Tampilan tak lagi melompat ke bagian bawah saat mengetuk baris lain sesudah mengetik.',
          },
          {
            area: 'Catatan',
            text: 'Tombol format kembali mengenai baris yang sedang ditulis sesudah lampiran dihapus.',
          },
          {
            area: 'Agenda',
            text: 'Tugas langsung ditandai Terlambat begitu jam tenggatnya lewat, juga di widget Agenda.',
          },
          {
            area: 'Widget Keuangan',
            text: 'Ikon mata berganti seketika saat diketuk.',
          },
        ],
        closingTitle: 'Selengkapnya tentang Morvyn',
        closing:
          'Penjelasan tiap menu Morvyn ada di situs resminya, dan aplikasinya tersedia di Google Play.',
      },
    },
  },

  // Halaman /kontak/.
  contactPage: {
    eyebrow: 'Kontak',
    title: 'Hubungi Himiko Lab',
    lead: 'Himiko Lab bisa dihubungi lewat email dan media sosial, untuk masukan, laporan masalah, maupun kerja sama.',
    topics: {
      eyebrow: 'Keperluan',
      title: 'Apa yang ingin Anda sampaikan?',
      subtitle: 'Ketiganya bisa dikirim ke alamat email yang sama.',
      items: [
        {
          title: 'Masukan',
          body: 'Saran, ide, atau kesan Anda tentang Morvyn dan situs ini.',
        },
        {
          title: 'Laporan masalah',
          body: 'Ada yang tidak berjalan semestinya di Morvyn? Ceritakan apa yang terjadi. Versi aplikasi dan tipe perangkat Anda akan membantu kami menelusurinya.',
        },
        {
          title: 'Kerja sama',
          body: 'Tawaran kolaborasi atau keperluan lain yang berkaitan dengan Himiko Lab.',
        },
      ],
      emailCta: 'Kirim email',
    },
    channels: {
      eyebrow: 'Email dan Media Sosial',
      title: 'Akun resmi Himiko Lab',
      subtitle: 'Ikuti atau hubungi Himiko Lab lewat email dan akun berikut.',
    },
    morvyn: {
      eyebrow: 'Morvyn',
      title: 'Morvyn di Google Play',
      body: 'Morvyn, aplikasi Android buatan Himiko Lab, bisa diunduh di Google Play. Penjelasan lengkapnya ada di situs resmi Morvyn.',
    },
  },

  footer: {
    title: 'Mari terhubung',
    subtitle: 'Punya pertanyaan, masukan, atau sekadar ingin menyapa? Kami senang mendengarnya.',
    socialLabel: 'Email dan media sosial',
    linksLabel: 'Tautan situs',
    groups: {
      studio: 'Himiko Lab',
      product: 'Morvyn',
    },
    morvynSummary: 'Ringkasan Morvyn',
    morvynPrivacy: 'Kebijakan Privasi Morvyn',
    analyticsNote: 'Situs ini memakai Google Analytics untuk statistik kunjungan.',
    copyright: '© 2026 Himiko Lab. Hak cipta dilindungi undang-undang.',
  },

  notFound: {
    eyebrow: 'Galat 404',
    title: 'Halaman tidak ditemukan',
    body: 'Alamat yang Anda buka tidak ada atau sudah dipindahkan.',
    cta: 'Kembali ke beranda',
    // Halaman 404 hanya punya satu berkas, jadi baris ini melayani pembaca Inggris.
    otherLang: 'This page could not be found.',
    otherLangCta: 'Go to the English home page',
  },
};
