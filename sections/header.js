const navItems = [
  { key: 'about', href: 'index.html', label: 'Home' },
  { key: 'work', href: 'work.html', label: 'Resume' },
  { key: 'projects', href: 'projects.html', label: 'Projects' },
  { key: 'contact', href: 'contact.html', label: 'Contact' }
];

const socialItems = [
  {
    href: 'https://www.linkedin.com/in/hieu-tran1998',
    label: 'LinkedIn',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.94 8.5H3.56V20h3.38zM5.25 3A1.96 1.96 0 103 4.96 1.96 1.96 0 005.25 3zm14.69 9.37c0-3.43-1.83-5.02-4.27-5.02a3.73 3.73 0 00-3.38 1.86V8.5H8.92V20h3.37v-6.04c0-1.59.3-3.13 2.28-3.13s2 1.85 2 3.23V20H20z"/>
      </svg>
    `
  },
  {
    href: 'https://github.com/UncleCam98',
    label: 'GitHub',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42A3.18 3.18 0 003.66 18c-1.09-.74.08-.73.08-.73a2.53 2.53 0 011.84 1.24 2.6 2.6 0 003.55 1 2.6 2.6 0 01.77-1.63c-2.67-.3-5.47-1.33-5.47-5.93a4.65 4.65 0 011.24-3.23 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.35 11.35 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.23 3.23c0 4.61-2.8 5.63-5.48 5.92a2.9 2.9 0 01.82 2.25v3.34c0 .32.21.7.83.58A12 12 0 0012 .5z"/>
      </svg>
    `
  },
  {
    href: 'contact.html',
    label: 'Gmail',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 6.75A2.75 2.75 0 015.75 4h12.5A2.75 2.75 0 0121 6.75v10.5A2.75 2.75 0 0118.25 20H5.75A2.75 2.75 0 013 17.25zm2.2-.95l6.8 5.1 6.8-5.1a.95.95 0 00-.55-.2H5.75a.95.95 0 00-.55.2zm14 2.05l-6.63 4.97a1 1 0 01-1.14 0L4.8 7.85v9.4c0 .52.43.95.95.95h12.5c.52 0 .95-.43.95-.95z"/>
      </svg>
    `
  }
];

export const headerHtml = (currentPage) => `
  <header class="topbar">
    <div class="topbar-wrap nav">
      <nav class="nav-links">
        ${navItems
          .map(
            (item) =>
              `<a href="${item.href}"${item.key === currentPage ? ' class="is-current" aria-current="page"' : ''}>${item.label}</a>`
          )
          .join('')}
      </nav>
      <div class="brand" aria-label="Minh Hieu Tran Embedded AI Engineer">Minh Hieu Tran <span>Embedded AI Engineer</span></div>
      <nav class="social-links" aria-label="Social links">
        ${socialItems
          .map(
            (item) => `<a href="${item.href}"${/^https?:\/\//i.test(item.href) ? ' target="_blank" rel="noreferrer"' : ''} aria-label="${item.label}" title="${item.label}">${item.icon}</a>`
          )
          .join('')}
      </nav>
    </div>
  </header>
`;