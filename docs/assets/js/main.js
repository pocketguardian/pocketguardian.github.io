/**
 * Pocket Guardian - Landing Page JavaScript
 * ==========================================
 * Handles:
 *   1. Auto-updating copyright year in footer
 *   2. Scroll-triggered fade-up animations (IntersectionObserver)
 *   3. Nav background state on scroll
 *   4. Smooth anchor scroll with fixed nav offset
 *   5. Screenshot card keyboard accessibility
 *   6. i18n hook (stub for future localization)
 *
 * No frameworks. No dependencies. Vanilla ES5-compatible.
 */

(function () {
  'use strict';

  /* -------------------------------------------------------
     1. AUTO COPYRIGHT YEAR
     Updates every <span id="footer-year"> to the current
     year automatically — no manual edits needed.
     Example: "© 2026" becomes "© 2027" on Jan 1 2027.
  ------------------------------------------------------- */
  function updateCopyrightYear() {
    var year = new Date().getFullYear();
    var elements = document.querySelectorAll('#footer-year');
    elements.forEach(function (el) {
      el.textContent = year;
    });
  }

  /* -------------------------------------------------------
     2. FADE-UP ANIMATIONS
     Reveals .fade-up elements as they enter the viewport.
     Falls back to instant-show in unsupported browsers.
  ------------------------------------------------------- */
  function initFadeAnimations() {
    var elements = document.querySelectorAll('.fade-up');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      elements.forEach(function (el) {
        el.classList.add('visible');
        el.style.transitionDelay = '0s';
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      // Stagger siblings within the same parent for a cascade effect
      var siblings = Array.from(el.parentNode.querySelectorAll('.fade-up'));
      var idx = siblings.indexOf(el);
      el.style.transitionDelay = Math.min(idx * 0.06, 0.4) + 's'; // cap at 400ms
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------
     3. NAV SCROLL STATE
     Adds .nav--scrolled after 40px for stronger backdrop.
     Uses requestAnimationFrame to avoid scroll jank.
  ------------------------------------------------------- */
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var ticking = false;

    function update() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 40);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update(); // run on load in case page is already scrolled
  }

  /* -------------------------------------------------------
     4. SMOOTH ANCHOR SCROLL
     Intercepts #anchor links and accounts for fixed nav height.
  ------------------------------------------------------- */
  function initAnchorScroll() {
    var nav = document.querySelector('.nav');

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        var offset = nav ? nav.offsetHeight + 8 : 8;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* -------------------------------------------------------
     5. SCREENSHOT KEYBOARD ACCESSIBILITY
     Tab + Enter/Space to activate screenshot cards.
  ------------------------------------------------------- */
  function initScreenshotCards() {
    document.querySelectorAll('.screenshot-card').forEach(function (card) {
      if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  /* -------------------------------------------------------
     6. i18n HOOK (stub)
     Replace PG.i18n.t() with a real lookup table when
     localization is needed.
  ------------------------------------------------------- */
  window.PG = window.PG || {};
  window.PG.i18n = {
    locale: (navigator.language || 'en').split('-')[0],
    translations: {},
    t: function (key) { return this.translations[key] || key; },
  };

  /* -------------------------------------------------------
     LOGGING UTILITY - safe console wrapper
  ------------------------------------------------------- */
  window.PG.log = function (msg) {
    if (window.console && window.console.log) {
      console.log('[PocketGuardian]', msg);
    }
  };

  /* -------------------------------------------------------
     INIT - runs after DOM is fully parsed
  ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    updateCopyrightYear();   // must run first - sets year before render
    initFadeAnimations();
    initNavScroll();
    initAnchorScroll();
    initScreenshotCards();
    window.PG.log('Initialized. year=' + new Date().getFullYear() + ' locale=' + window.PG.i18n.locale);
  });

})();