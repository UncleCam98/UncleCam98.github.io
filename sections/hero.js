export const heroHtml = (page) => `
  <section class="hero">
    <div class="wrap hero-grid${page.showSummaryPanel === false ? ' hero-grid--single' : ''}">
      <div class="hero-card">
        ${page.eyebrow ? `<div class="eyebrow">${page.eyebrow}</div>` : ''}
        ${page.portraitRight ? '' : `<h1>${page.headline}</h1>`}

        <div class="hero-intro${page.showPortrait === false || page.portraitAside ? ' hero-intro--copy-only' : ''}${page.portraitRight ? ' hero-intro--portrait-right' : ''}">
          <div class="hero-copy">
            ${page.portraitRight ? `<h1>${page.headline}</h1>` : ''}
            <p class="lead">${page.lead}</p>
            ${(page.primaryHref && page.primaryLabel) || (Array.isArray(page.ctaLinks) && page.ctaLinks.length) ? `
            <div class="cta-row">
              ${page.primaryHref && page.primaryLabel ? `<a class="hero-link" href="${page.primaryHref}">${page.primaryLabel}</a>` : ''}
              ${page.secondaryHref && page.secondaryLabel ? `<a class="hero-link" href="${page.secondaryHref}"${page.secondaryTargetBlank ? ' target="_blank" rel="noreferrer"' : ''}>${page.secondaryLabel}</a>` : ''}
              ${Array.isArray(page.ctaLinks)
                ? page.ctaLinks
                    .map(
                      (link) =>
                        `<a class="hero-link" href="${link.href}"${link.targetBlank ? ' target="_blank" rel="noreferrer"' : ''}>${link.label}</a>`
                    )
                    .join('')
                : ''}
            </div>
            ` : ''}
          </div>

          ${page.showPortrait === false || page.portraitAside ? '' : `
          <div class="hero-portrait">
            <div class="portrait-frame">
              <img
                class="portrait-image"
                src="assets/profile.png"
                alt="Portrait"
                onload="this.parentElement.querySelector('.portrait-fallback').style.display='none';"
                onerror="this.style.display='none'; this.parentElement.querySelector('.portrait-fallback').style.display='flex';"
              />
              <div class="portrait-fallback">DP</div>
            </div>
          </div>
          `}
        </div>
      </div>

      ${page.showSummaryPanel === false ? '' : `
      <aside class="glass${page.portraitAside ? ' glass--portrait' : ''}">
        ${page.portraitAside ? `
        <div class="hero-portrait hero-portrait--aside">
          <div class="portrait-frame">
            <img
              class="portrait-image"
              src="assets/profile.png"
              alt="Portrait"
              onload="this.parentElement.querySelector('.portrait-fallback').style.display='none';"
              onerror="this.style.display='none'; this.parentElement.querySelector('.portrait-fallback').style.display='flex';"
            />
            <div class="portrait-fallback">DP</div>
          </div>
        </div>
        ` : `
        <div class="stat-grid">
          <div class="stat">
            <small>Focus</small>
            <strong>AI and embedded systems</strong>
          </div>
          <div class="stat">
            <small>Format</small>
            <strong>Portfolio and technical profile</strong>
          </div>
          <div class="stat">
            <small>Tone</small>
            <strong>${page.statTone}</strong>
          </div>
          <div class="stat">
            <small>Next step</small>
            <strong>Replace placeholders with real content</strong>
          </div>
        </div>

        <p class="muted-copy">
          This layout works well for an engineer, developer, student, or freelancer who
          wants to present projects, experience, and contact details in a clear way.
        </p>
        `}
      </aside>
      `}
    </div>
  </section>
`;