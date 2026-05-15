import { headerHtml } from './sections/header.js';
import { heroHtml } from './sections/hero.js';
import { aboutHtml } from './sections/about.js';
import { skillsHtml } from './sections/skills.js';
import { projectsHtml } from './sections/projects.js';
import { workHtml } from './sections/work.js';
import { contactHtml } from './sections/contact.js';
import { footerHtml } from './sections/footer.js';
import { projects } from './data/projects.js';
import { workProjects } from './data/work-projects.js';
import { skillGroups } from './data/skills.js';

const app = document.getElementById('app');
const currentPage = document.body.dataset.page || 'about';
const isProjectsPage = currentPage === 'projects';
const transitionDuration = 320;

const pageConfigs = {
  about: {
    title: 'Home',
    eyebrow: 'Portfolio · Introduction · Profile',
    headline: 'A portfolio built to present your profile clearly.',
    lead:
      'This page introduces who you are and gives visitors a clear entry point into your resume, projects, and contact details.',
    primaryHref: 'projects.html',
    primaryLabel: 'View Projects',
    secondaryHref: 'contact.html',
    secondaryLabel: 'Get in Touch',
    statTone: 'Clear, focused, technical',
    showPortrait: true,
    showSummaryPanel: true,
    sections: [aboutHtml]
  },
  skills: {
    title: 'Skills',
    eyebrow: 'Portfolio · Skills · Tools',
    headline: 'Show your technical range on a dedicated page.',
    lead:
      'This page can present your tools, technical areas, and engineering strengths in a more structured way.',
    primaryHref: 'projects.html',
    primaryLabel: 'View All Projects',
    secondaryHref: 'contact.html',
    secondaryLabel: 'Contact Me',
    statTone: 'Structured, direct, technical',
    showPortrait: true,
    showSummaryPanel: true,
    sections: [skillsHtml, projectsHtml]
  },
  projects: {
    title: 'Projects',
    eyebrow: 'Portfolio · Case Studies · Built Work',
    headline: 'Projects make your experience concrete.',
    lead:
      'Use this page to show case studies, technical projects, demos, and implementation details in one focused view.',
    statTone: 'Practical, concrete, delivery-focused',
    showPortrait: false,
    showSummaryPanel: false,
    sections: [projectsHtml]
  },
  work: {
    title: 'Work Experience',
    eyebrow: 'Portfolio · Work Experience · Background',
    headline: 'A strong place for your CV, experience, and skills.',
    lead:
      'This page is designed for work history, internships, education, and the technical skills you want recruiters to notice quickly.',
    primaryHref: 'projects.html',
    primaryLabel: 'View Projects',
    secondaryHref: 'assets/cv.pdf',
    secondaryLabel: 'Download CV',
    secondaryTargetBlank: true,
    statTone: 'Professional, clear, trustworthy',
    showPortrait: false,
    showSummaryPanel: false,
    sections: [workHtml, skillsHtml]
  },
  contact: {
    title: 'Contact',
    eyebrow: 'Portfolio · Contact · Availability',
    headline: 'Make the next step easy and obvious.',
    lead:
      'Keep this page simple and direct so visitors instantly understand how to reach you.',
    showHero: false,
    primaryHref: 'projects.html',
    primaryLabel: 'View Projects',
    secondaryHref: 'index.html',
    secondaryLabel: 'Back to Home',
    statTone: 'Direct, open, approachable',
    showPortrait: false,
    showSummaryPanel: false,
    sections: [contactHtml]
  }
};

const pageConfig = pageConfigs[currentPage] || pageConfigs.about;

document.title = `${pageConfig.title} | Portfolio`;

if (app) {
  app.innerHTML = `
    ${headerHtml(currentPage)}
    <main id="top">
      ${pageConfig.showHero === false ? '' : heroHtml(pageConfig)}
      ${pageConfig.sections.join('')}
    </main>
    ${footerHtml(currentPage)}
  `;
}

if (currentPage === 'contact') {
  const nextField = document.getElementById('contactNext');
  const successMessage = document.getElementById('contactSuccess');
  const params = new URLSearchParams(window.location.search);

  if (nextField) {
    nextField.value = `${window.location.origin}${window.location.pathname}?contact=success#contact`;
  }

  if (successMessage && params.get('contact') === 'success') {
    successMessage.hidden = false;
  }
}

const grid = document.getElementById('projectGrid');
const workGrid = document.getElementById('workProjectGrid');
const skillsGrid = document.getElementById('skillsGrid');

const normalizeSkill = (value) =>
  value
    .toLowerCase()
    .replace(/c\+\+/g, 'cpp')
    .replace(/c#/g, 'csharp')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const skillMatchMap = new Map(
  skillGroups.flatMap((group) =>
    group.skills
      .filter((skill) => Array.isArray(skill.representedProjects) && skill.representedProjects.length)
      .map((skill) => [
        normalizeSkill(skill.label),
        Array.from(new Set(skill.representedProjects.map((project) => normalizeSkill(project))))
      ])
  )
);

const projectCards = [];

const buildLink = (label, href) => {
  const isExternal = /^https?:\/\//i.test(href);

  return `<a href="${href}"${isExternal ? ' target="_blank" rel="noreferrer"' : ''}>${label}</a>`;
};

const renderLinks = (project) => {
  const links = [];

  if (project.repo) {
    links.push(buildLink('Code', project.repo));
  }

  if (project.demo) {
    links.push(buildLink('Demo', project.demo));
  }

  return links.length ? `<div class="project-links">${links.join('')}</div>` : '';
};

const renderProjectCopy = (project) => {
  if (Array.isArray(project.bullets) && project.bullets.length) {
    return `
      ${project.text ? `<p class="project-copy-summary">${project.text}</p>` : ''}
      <ul class="project-copy-list">
        ${project.bullets.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  return `<p>${project.text}</p>`;
};

const renderProjectMedia = (project) => {
  if (project.image) {
    return `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
    `;
  }

  return `
    <div class="project-media project-media--placeholder" aria-hidden="true">
      <strong>${project.title}</strong>
      <span>Add GIF or project image</span>
    </div>
  `;
};

const renderProjectCodeLink = (project) => {
  if (!project.repo) {
    return '';
  }

  return `<div class="project-links project-links--primary">${buildLink('View Code', project.repo)}</div>`;
};

if (grid) {
  if (isProjectsPage) {
    grid.classList.add('projects--linear');
  }

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = isProjectsPage ? 'project-card project-card--feature' : 'project-card';
    card.dataset.project = normalizeSkill(project.title);
    card.innerHTML = isProjectsPage
      ? `
        <div class="project-feature-layout">
          <div class="project-feature-copy">
            <div class="project-top">
              <div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-kind">${project.kind}</div>
              </div>
              <div class="project-active">${project.active}</div>
            </div>
            ${renderProjectCopy(project)}
            <div class="meta">
              ${project.stack.map((item) => `<span>${item}</span>`).join('')}
            </div>
            ${renderProjectCodeLink(project)}
          </div>
          ${renderProjectMedia(project)}
        </div>
      `
      : `
        <div class="project-top">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-kind">${project.kind}</div>
          </div>
          <div class="project-active">${project.active}</div>
        </div>
        ${renderProjectCopy(project)}
        <div class="meta">
          ${project.stack.map((item) => `<span>${item}</span>`).join('')}
        </div>
        ${renderLinks(project)}
      `;
    grid.appendChild(card);
    projectCards.push(card);
  });
}

if (workGrid) {
  workProjects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.project = normalizeSkill(project.title);
    card.innerHTML = `
      <div class="project-top">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-kind">${project.kind}</div>
          ${project.location ? `<div class="project-location">${project.location}</div>` : ''}
        </div>
        <div class="project-active">${project.active}</div>
      </div>
      ${renderProjectCopy(project)}
      <div class="meta">
        ${project.stack.map((item) => `<span>${item}</span>`).join('')}
      </div>
      ${renderLinks(project)}
    `;
    workGrid.appendChild(card);
    projectCards.push(card);
  });
}

if (skillsGrid) {
  const groupedSkillBlocks = [
    {
      groups: skillGroups.filter((group) => group.interactive),
      classes: 'timeline-card skill-card skill-card--full'
    },
    {
      groups: skillGroups.filter((group) => !group.interactive),
      classes: 'timeline-card skill-card skill-card--full skill-card--static-block'
    }
  ].filter((block) => block.groups.length);

  groupedSkillBlocks.forEach((block) => {
    const card = document.createElement('article');
    card.className = block.classes;
    card.innerHTML = block.groups
      .map(
        (group) => `
          <section class="skill-group">
            <h3>${group.title}</h3>
            <div class="skill-list">
              ${group.skills
                .map((skill) => {
                  const hasProjectMatch = skillMatchMap.has(normalizeSkill(skill.label));

                  if (group.interactive && hasProjectMatch) {
                    return `<button class="skill-chip" type="button" data-skill="${normalizeSkill(skill.label)}">${skill.label}</button>`;
                  }

                  return `<span class="skill-chip skill-chip--static">${skill.label}</span>`;
                })
                .join('')}
            </div>
          </section>
        `
      )
      .join('');
    skillsGrid.appendChild(card);
  });

  const chips = Array.from(skillsGrid.querySelectorAll('button.skill-chip'));
  let activeSkill = '';

  const applySkillFilter = () => {
    chips.forEach((chip) => {
      chip.classList.toggle('is-active', chip.dataset.skill === activeSkill);
    });

    projectCards.forEach((cardElement) => {
      const requiredProjects = skillMatchMap.get(activeSkill) || [];
      const matches = !activeSkill || requiredProjects.includes(cardElement.dataset.project);
      cardElement.classList.toggle('is-muted', Boolean(activeSkill) && !matches);
      cardElement.classList.toggle('is-highlighted', Boolean(activeSkill) && matches);
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      activeSkill = activeSkill === chip.dataset.skill ? '' : chip.dataset.skill;
      applySkillFilter();
    });
  });
}

const isInternalPageLink = (link) => {
  const href = link.getAttribute('href');

  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }

  if (/^https?:\/\//i.test(href)) {
    return false;
  }

  return href.endsWith('.html');
};

requestAnimationFrame(() => {
  document.body.classList.add('page-ready');
});

document.querySelectorAll('a[href]').forEach((link) => {
  if (!isInternalPageLink(link)) {
    return;
  }

  link.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const nextHref = link.getAttribute('href');

    if (!nextHref || nextHref === window.location.pathname.split('/').pop()) {
      return;
    }

    event.preventDefault();
    document.body.classList.add('page-leaving');

    window.setTimeout(() => {
      window.location.href = nextHref;
    }, transitionDuration);
  });
});
