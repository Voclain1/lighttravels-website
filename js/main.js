// LIGHT TRAVELS — minimal site script
(function () {
  'use strict';

  // Header scroll state
  const header = document.querySelector('.site-header');
  if (header && !header.classList.contains('solid')) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Reveal-on-scroll
  if ('IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // Contact form — submits to Web3Forms (or whatever the form's `action` is set to)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const button = form.querySelector('button[type="submit"]');
      const originalBtn = button ? button.innerHTML : '';

      if (button) { button.disabled = true; button.innerHTML = 'Sending...'; }
      if (status) { status.textContent = ''; status.style.color = 'var(--muted)'; }

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        const result = await response.json().catch(() => ({}));

        if (response.ok && (result.success === undefined || result.success === true)) {
          if (status) {
            status.textContent = 'Thank you. We will be in touch within 24 hours.';
            status.style.color = 'var(--gold)';
          }
          form.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        if (status) {
          status.textContent = 'Something went wrong. Please email hello@lighttravels.ng directly.';
          status.style.color = '#b00020';
        }
      } finally {
        if (button) { button.disabled = false; button.innerHTML = originalBtn; }
      }
    });
  }
})();
