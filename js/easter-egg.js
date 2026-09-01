/**
 * Soliman Nightmares — Hidden Easter Egg
 * Click the logo/raven area exactly 3 times
 * Secret: "عاش يا شبح 👻"
 */

(function () {
  'use strict';

  const REQUIRED_CLICKS = 3;
  const COOLDOWN_MS = 12000;
  const MESSAGE_DURATION = 3200;
  const CLICK_WINDOW_MS = 4000; // clicks must be within this window

  let clickCount = 0;
  let lastClickTime = 0;
  let isCoolingDown = false;
  let resetTimer = null;

  const overlay = document.getElementById('easter-overlay');
  const messageEl = document.getElementById('easter-message');

  // Targets: logo in nav + hero logo
  const targets = [
    document.getElementById('logo-trigger'),
    document.getElementById('hero-logo')
  ].filter(Boolean);

  function resetClicks() {
    clickCount = 0;
    if (resetTimer) {
      clearTimeout(resetTimer);
      resetTimer = null;
    }
  }

  function showEasterEgg() {
    if (isCoolingDown) return;
    isCoolingDown = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (overlay && !prefersReduced) {
      overlay.classList.add('active');
      setTimeout(() => overlay.classList.remove('active'), 700);
    }

    if (messageEl) {
      messageEl.textContent = 'عاش يا شبح 👻';
      messageEl.classList.add('show');
      setTimeout(() => {
        messageEl.classList.remove('show');
      }, MESSAGE_DURATION);
    }

    setTimeout(() => {
      isCoolingDown = false;
    }, COOLDOWN_MS);

    resetClicks();
  }

  function handleClick(e) {
    // Don't prevent default navigation on the logo link for first clicks
    // Only intercept the third activation subtly
    const now = Date.now();

    if (isCoolingDown) return;

    // Reset if too much time passed between clicks
    if (now - lastClickTime > CLICK_WINDOW_MS) {
      clickCount = 0;
    }

    lastClickTime = now;
    clickCount += 1;

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(resetClicks, CLICK_WINDOW_MS);

    if (clickCount >= REQUIRED_CLICKS) {
      e.preventDefault();
      e.stopPropagation();
      showEasterEgg();
    }
  }

  targets.forEach(el => {
    el.addEventListener('click', handleClick, { capture: true });
  });
})();
