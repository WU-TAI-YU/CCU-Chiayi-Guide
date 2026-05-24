(function () {
  'use strict';

  function clearSubmenus(nav) {
    nav.querySelectorAll('.has-submenu.is-open').forEach(function (el) {
      el.classList.remove('is-open');
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
      if (expanded) clearSubmenus(nav);
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 768) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
          clearSubmenus(nav);
        }
      });
    });
  }

  function initMobileSubmenuToggle() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    nav.querySelectorAll('li.has-submenu > button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.innerWidth >= 768) return;
        var li = btn.closest('.has-submenu');
        var wasOpen = li.classList.contains('is-open');
        clearSubmenus(nav);
        if (!wasOpen) li.classList.add('is-open');
      });
    });
  }

  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href').slice(1);
        if (!targetId) return;
        var target = document.getElementById(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initMobileSubmenuToggle();
    initBackToTop();
    initSmoothScroll();
  });
})();
