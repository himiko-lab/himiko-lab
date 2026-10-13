import React from 'react';
import { useT } from '../i18n';

/**
 * Tautan ke situs lain. Dibuka di tab baru, dan pembaca layar diberi tahu
 * lebih dulu supaya perpindahan tab tidak mengejutkan.
 */
export default function ExternalLink({ href, className, children }) {
  const { t } = useT();

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {t.common.newTab}</span>
    </a>
  );
}
