export const heroHtml = (page) => `
  <section class="hero">
    <div class="wrap hero-grid${page.showSummaryPanel === false ? ' hero-grid--single' : ''}">
      <div class="hero-card">
        <div class="eyebrow">${page.eyebrow}</div>
        <h1>${page.headline}</h1>

        <div class="hero-intro${page.showPortrait === false ? ' hero-intro--copy-only' : ''}">
          ${page.showPortrait === false ? '' : `
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
            <div class="portrait-copy">
              <strong>Minh Hieu Tran</strong>
              <span>AI and embedded systems engineer</span>
            </div>
          </div>
          `}

          <div class="hero-copy">
            <p class="lead">${page.lead}</p>
            ${page.primaryHref && page.primaryLabel ? `
            <div class="cta-row">
              <a class="hero-link" href="${page.primaryHref}">${page.primaryLabel}</a>
              ${page.secondaryHref && page.secondaryLabel ? `<a class="hero-link" href="${page.secondaryHref}"${page.secondaryTargetBlank ? ' target="_blank" rel="noreferrer"' : ''}>${page.secondaryLabel}</a>` : ''}
            </div>
            ` : ''}
          </div>
        </div>
      </div>

      ${page.showSummaryPanel === false ? '' : `
      <aside class="glass">
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
      </aside>
      `}
    </div>
  </section>
`;