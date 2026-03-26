/* ============================================================
   TOOLSBOX — Shared JavaScript (common.js)
   Inject header & footer, handle nav, mobile menu,
   breadcrumbs, copy buttons, and utility helpers.

   Usage: <script src="../assets/common.js"></script>
   (or "assets/common.js" from index.html)

   Each page sets window.TB before the script runs:
   <script>
     window.TB = {
       category: 'calculators',       // 'calculators' | 'text-tools' | 'home'
       tool:     'Age Calculator',     // Current tool name (omit on homepage)
       toolSlug: 'age-calculator',     // Current tool slug (omit on homepage)
       accent:   'yellow',            // 'yellow' (calc) | 'blue' (text) | omit for auto
     };
   </script>
   ============================================================ */

(function () {
  'use strict';

  /* ── Site Config ── */
  const SITE = {
    name:    'ToolsBox',
    tagline: 'Free online tools',
    root:    getRootPath(),
  };

  /* ── Tool Directories ── */
  const CALC_TOOLS = [
    { slug: 'age-calculator',       name: 'Age Calculator',       icon: '🎂' },
    { slug: 'bmi-calculator',       name: 'BMI Calculator',        icon: '⚖️' },
    { slug: 'emi-calculator',       name: 'EMI / Loan Calc',       icon: '🏦' },
    { slug: 'percentage-calc',      name: '% Calculator',          icon: '💯' },
    { slug: 'date-diff',            name: 'Date Difference',       icon: '📅' },
    { slug: 'calorie-calc',         name: 'Calorie Calc',          icon: '🥗' },
    { slug: 'compound-interest',    name: 'Compound Interest',     icon: '📈' },
    { slug: 'sip-calculator',       name: 'SIP Calculator',        icon: '💹' },
    { slug: 'gst-calculator',       name: 'GST Calculator',        icon: '🧾' },
    { slug: 'time-calculator',      name: 'Time Calculator',       icon: '⏱️' },
    { slug: 'tip-calculator',       name: 'Tip Calculator',        icon: '🍽️' },
    { slug: 'fuel-cost',            name: 'Fuel Cost Calc',        icon: '⛽' },
    { slug: 'due-date-calc',        name: 'Due Date Calc',         icon: '🤰' },
    { slug: 'gpa-calculator',       name: 'GPA Calculator',        icon: '🎓' },
    { slug: 'discount-calc',        name: 'Discount Calc',         icon: '🏷️' },
  ];

  const TEXT_TOOLS = [
    { slug: 'word-counter',         name: 'Word Counter',          icon: '📝' },
    { slug: 'character-counter',    name: 'Char Counter',          icon: '🔢' },
    { slug: 'case-converter',       name: 'Case Converter',        icon: '🔠' },
    { slug: 'lorem-ipsum',          name: 'Lorem Ipsum Gen',       icon: '📄' },
    { slug: 'text-reverser',        name: 'Text Reverser',         icon: '🔄' },
    { slug: 'remove-duplicates',    name: 'Remove Duplicates',     icon: '🧹' },
    { slug: 'slug-generator',       name: 'Slug Generator',        icon: '🔗' },
    { slug: 'password-generator',   name: 'Password Gen',          icon: '🔐' },
    { slug: 'find-replace',         name: 'Find & Replace',        icon: '🔍' },
    { slug: 'text-to-binary',       name: 'Text → Binary',         icon: '01' },
    { slug: 'whitespace-cleaner',   name: 'Whitespace Cleaner',    icon: '✂️' },
    { slug: 'reading-time',         name: 'Reading Time Calc',     icon: '⏰' },
    { slug: 'line-sorter',          name: 'Line Sorter',           icon: '🔀' },
    { slug: 'morse-converter',      name: 'Morse Code Conv',       icon: '📡' },
    { slug: 'hashtag-generator',    name: 'Hashtag Generator',     icon: '#️⃣' },
  ];

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const cfg = window.TB || {};
    injectNav(cfg);
    injectFooter(cfg);
    setActiveNav(cfg);
    initMobileMenu();
    initCopyButtons();
  }

  /* ── Determine root path ── */
  function getRootPath() {
    const path = window.location.pathname;
    if (path.includes('/calculators/') || path.includes('/text-tools/')) {
      return '../';
    }
    return './';
  }

  function href(path) {
    return SITE.root + path;
  }

  /* ── Inject Navigation ── */
  function injectNav(cfg) {
    const existing = document.getElementById('tb-nav');
    if (existing) { populateNav(existing, cfg); return; }

    const nav = document.createElement('nav');
    nav.id = 'tb-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');
    document.body.insertBefore(nav, document.body.firstChild);
    populateNav(nav, cfg);
  }

  function populateNav(nav, cfg) {
    const isCalc = cfg.category === 'calculators';
    const isText = cfg.category === 'text-tools';

    nav.innerHTML = `
      <div class="tb-nav-inner">
        <a href="${href('index.html')}" class="tb-logo" aria-label="${SITE.name} home">
          <div class="tb-logo-icon">T</div>
          <span class="tb-logo-text">Tools<em>Box</em></span>
        </a>
        <div class="tb-nav-links" id="tb-nav-links">
          <a href="${href('index.html')}" class="tb-nav-link" data-page="home">
            <span class="nav-icon">🏠</span> Home
          </a>
          <a href="${href('calculators/index.html')}" class="tb-nav-link" data-page="calculators">
            <span class="nav-icon">🧮</span> Calculators
          </a>
          <a href="${href('text-tools/index.html')}" class="tb-nav-link" data-page="text-tools">
            <span class="nav-icon">✍️</span> Text Tools
          </a>
        </div>
        <div class="tb-nav-right">
          <button class="tb-hamburger" id="tb-hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;

    /* Mobile menu (injected after nav) */
    if (!document.getElementById('tb-mobile-menu')) {
      const mob = document.createElement('div');
      mob.id = 'tb-mobile-menu';
      mob.className = 'tb-mobile-menu';
      mob.innerHTML = `
        <a href="${href('index.html')}" class="tb-nav-link" data-page="home">
          <span class="nav-icon">🏠</span> Home
        </a>
        <a href="${href('calculators/index.html')}" class="tb-nav-link" data-page="calculators">
          <span class="nav-icon">🧮</span> Calculator Tools
        </a>
        <a href="${href('text-tools/index.html')}" class="tb-nav-link" data-page="text-tools">
          <span class="nav-icon">✍️</span> Text Tools
        </a>
      `;
      nav.insertAdjacentElement('afterend', mob);
    }
  }

  /* ── Set Active Nav Link ── */
  function setActiveNav(cfg) {
    const page = cfg.category || 'home';
    document.querySelectorAll('[data-page]').forEach(function (el) {
      el.classList.toggle('active', el.dataset.page === page);
    });
  }

  /* ── Mobile Menu Toggle ── */
  function initMobileMenu() {
    const btn = document.getElementById('tb-hamburger');
    const menu = document.getElementById('tb-mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.querySelectorAll('span').forEach(function (s, i) {
        if (open) {
          if (i === 0) s.style.transform = 'rotate(45deg) translate(4px, 4px)';
          if (i === 1) s.style.opacity = '0';
          if (i === 2) s.style.transform = 'rotate(-45deg) translate(4px, -4px)';
        } else {
          s.style.transform = '';
          s.style.opacity = '';
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity = '';
        });
      }
    });
  }

  /* ── Inject Footer ── */
  function injectFooter(cfg) {
    const existing = document.getElementById('tb-footer');
    if (existing) { populateFooter(existing, cfg); return; }

    const footer = document.createElement('footer');
    footer.id = 'tb-footer';
    document.body.appendChild(footer);
    populateFooter(footer, cfg);
  }

  function populateFooter(footer, cfg) {
    const calcLinks = CALC_TOOLS.slice(0, 7).map(function (t) {
      return `<li><a href="${href('calculators/' + t.slug + '.html')}">${t.icon} ${t.name}</a></li>`;
    }).join('');

    const textLinks = TEXT_TOOLS.slice(0, 7).map(function (t) {
      return `<li><a href="${href('text-tools/' + t.slug + '.html')}">${t.icon} ${t.name}</a></li>`;
    }).join('');

    const year = new Date().getFullYear();

    footer.innerHTML = `
      <div class="tb-footer-inner">
        <div class="tb-footer-brand">
          <a href="${href('index.html')}" class="tb-logo">
            <div class="tb-logo-icon">T</div>
            <span class="tb-logo-text">Tools<em>Box</em></span>
          </a>
          <p class="tb-footer-desc">
            Free online calculator and text tools. No sign-up, no downloads — works instantly in your browser.
          </p>
        </div>
        <div>
          <div class="tb-footer-col-title">🧮 Calculators</div>
          <ul class="tb-footer-links">${calcLinks}</ul>
        </div>
        <div>
          <div class="tb-footer-col-title">✍️ Text Tools</div>
          <ul class="tb-footer-links">${textLinks}</ul>
        </div>
        <div>
          <div class="tb-footer-col-title">📌 More</div>
          <ul class="tb-footer-links">
            <li><a href="${href('index.html')}">🏠 All Tools</a></li>
            <li><a href="${href('calculators/index.html')}">🧮 All Calculators</a></li>
            <li><a href="${href('text-tools/index.html')}">✍️ All Text Tools</a></li>
          </ul>
        </div>
      </div>
      <div class="tb-footer-bottom">
        <span class="tb-footer-copy">© ${year} ToolsBox — Free forever · No sign-up · 30+ tools</span>
        <span class="tb-footer-copy">Made with ❤️</span>
      </div>
    `;
  }

  /* ── Copy to Clipboard Buttons ── */
  function initCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.dataset.copy;
        const target = targetId ? document.getElementById(targetId) : null;
        const text = target
          ? (target.value || target.textContent).trim()
          : (btn.dataset.copyText || '');

        if (!text) return;

        navigator.clipboard.writeText(text).then(function () {
          const orig = btn.textContent;
          btn.textContent = '✓ Copied!';
          btn.style.background = 'rgba(93,202,165,0.15)';
          btn.style.color = '#5dcaa5';
          setTimeout(function () {
            btn.textContent = orig;
            btn.style.background = '';
            btn.style.color = '';
          }, 2000);
        }).catch(function () {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        });
      });
    });
  }

  /* ── Public Helpers (window.TB_UTILS) ── */
  window.TB_UTILS = {

    /* Format large numbers: 1234567 → "1.2M" */
    fmtNum: function (n) {
      n = Math.round(n);
      if (n >= 1e9)  return (n / 1e9).toFixed(2) + 'B';
      if (n >= 1e6)  return (n / 1e6).toFixed(1) + 'M';
      if (n >= 1e4)  return n.toLocaleString();
      return n.toString();
    },

    /* Format with commas: 1234567 → "1,234,567" */
    fmtComma: function (n) {
      return Number(n).toLocaleString('en-IN');
    },

    /* Show a result section */
    showResult: function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('show');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },

    /* Hide a result section */
    hideResult: function (id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('show');
    },

    /* Show an error */
    showError: function (id, msg) {
      const el = document.getElementById(id);
      if (!el) return;
      if (msg) el.textContent = msg;
      el.classList.add('show');
    },

    /* Hide an error */
    hideError: function (id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('show');
    },

    /* Set today's date on a date input */
    setToday: function (id) {
      const el = document.getElementById(id);
      if (el) el.value = new Date().toISOString().split('T')[0];
    },

    /* Get related tools for cross-linking
       Pass your current slug to exclude it.
       Returns 3 tools from SAME category, then fills from other. */
    getRelated: function (currentSlug, category, count) {
      count = count || 3;
      const pool = category === 'calculators'
        ? CALC_TOOLS.concat(TEXT_TOOLS)
        : TEXT_TOOLS.concat(CALC_TOOLS);
      return pool.filter(function (t) { return t.slug !== currentSlug; }).slice(0, count);
    },

    /* Render related tools HTML into a container */
    renderRelated: function (containerId, currentSlug, category) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const tools = window.TB_UTILS.getRelated(currentSlug, category, 3);
      const folder = category === 'calculators' ? 'calculators' : 'text-tools';
      container.innerHTML = tools.map(function (t) {
        return `
          <a class="tb-related-card" href="${href(folder + '/' + t.slug + '.html')}">
            <span class="tb-related-icon">${t.icon}</span>
            <span class="tb-related-name">${t.name}</span>
          </a>`;
      }).join('');
    },

    /* Get today string YYYY-MM-DD */
    todayStr: function () {
      return new Date().toISOString().split('T')[0];
    },

    /* Validate: is value a positive number? */
    isPosNum: function (val) {
      return val !== '' && !isNaN(val) && Number(val) > 0;
    },

    /* Round to N decimal places */
    round: function (n, places) {
      return Math.round(n * Math.pow(10, places)) / Math.pow(10, places);
    },

  };

})();