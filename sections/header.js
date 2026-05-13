const navItems = [
  { key: 'about', href: 'index.html', label: 'About Me' },
  { key: 'work', href: 'work.html', label: 'Resume' },
  { key: 'projects', href: 'projects.html', label: 'Projects' },
  { key: 'contact', href: 'contact.html', label: 'Contact' }
];

export const headerHtml = (currentPage) => `
  <header class="topbar">
    <div class="topbar-wrap nav">
      <div class="brand" aria-label="Minh Hieu Tran AI Embedded Engineer">Minh Hieu Tran <span>AI/Embedded Engineer</span></div>
      <nav class="nav-links">
        ${navItems
          .map(
            (item) =>
              `<a href="${item.href}"${item.key === currentPage ? ' class="is-current" aria-current="page"' : ''}>${item.label}</a>`
          )
          .join('')}
      </nav>
    </div>
  </header>
`;