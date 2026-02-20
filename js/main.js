document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();
  initSmoothScroll();
  initActiveNav();
  initVoiceSearch();
  initNewsletterForm();
  initHeaderScroll();
});

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        tab.click();
      }
    });
  });
}
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to the target section for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
}

// ------------------------------------------
function initActiveNav() {
  const currentPath = window.location.pathname;
  const normPath = currentPath.replace(/^\//, '').split('?')[0].split('#')[0];

  document.querySelectorAll('.nav__link, .nav__pill').forEach((link) => {
    if (link.classList.contains('active')) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;

    const normHref = href
      .replace(/^\.\.\//, '')
      .replace(/^\//, '')
      .split('?')[0]
      .split('#')[0];

    if (normPath && normPath === normHref) {
      link.classList.add('active');
    }
  });
}


function initVoiceSearch() {
  const voiceBtn = document.querySelector('.search__voice');
  const searchInput = document.querySelector('.search__input');
  if (!voiceBtn || !searchInput) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
  
    voiceBtn.setAttribute('title', 'Voice search is not supported in your browser');
    voiceBtn.addEventListener('click', () => {
      const original = searchInput.placeholder;
      searchInput.placeholder = 'Voice search not supported';
      searchInput.focus();
      setTimeout(() => {
        searchInput.placeholder = original;
      }, 2500);
    });
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  voiceBtn.addEventListener('click', () => {
    if (voiceBtn.classList.contains('listening')) {
      recognition.stop();
      return;
    }
    voiceBtn.classList.add('listening');
    voiceBtn.setAttribute('aria-label', 'Stop voice search');
    searchInput.placeholder = 'Listening…';
    recognition.start();
  });

  recognition.addEventListener('result', (e) => {
    searchInput.value = e.results[0][0].transcript;
    searchInput.placeholder = 'Search';
    voiceBtn.classList.remove('listening');
    voiceBtn.setAttribute('aria-label', 'Voice search');
  });

  recognition.addEventListener('end', () => {
    searchInput.placeholder = 'Search';
    voiceBtn.classList.remove('listening');
    voiceBtn.setAttribute('aria-label', 'Voice search');
  });

  recognition.addEventListener('error', () => {
    searchInput.placeholder = 'Search';
    voiceBtn.classList.remove('listening');
    voiceBtn.setAttribute('aria-label', 'Voice search');
  });
}

function initNewsletterForm() {
  const form = document.querySelector('.newsletter__form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const btn = form.querySelector('.newsletter__button');
    if (!emailInput || !emailInput.value) return;

    const originalText = btn.textContent;
    btn.textContent = 'Subscribed! ✓';
    btn.disabled = true;
    emailInput.value = '';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
}
