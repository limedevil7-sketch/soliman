/**
 * Soliman Nightmares — Main Application Logic
 */

(function () {
  'use strict';

  // =========================================================
  // Navbar scroll behavior
  // =========================================================

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  function handleScroll() {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  // =========================================================
  // Mobile menu
  // =========================================================

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen =
        navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute(
        'aria-expanded',
        String(!isOpen)
      );

      navLinks.classList.toggle('open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }


  // =========================================================
  // Render Videos
  // =========================================================

  function renderVideos() {
    const grid = document.getElementById('video-grid');

    if (!grid || typeof VIDEOS === 'undefined') {
      return;
    }

    grid.innerHTML = VIDEOS
      .slice(0, 6)
      .map(function (v) {
        return `
          <article class="video-card">

            <a
              href="${v.youtubeUrl}"
              target="_blank"
              rel="noopener"
              class="video-thumb"
              aria-label="Watch ${v.title}"
            >
              <img
                src="${v.thumbnail}"
                alt="${v.title}"
                loading="lazy"
                width="640"
                height="360"
              >

              <div class="video-play">
                <div class="video-play-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>

              <span class="video-duration">
                ${v.duration || ''}
              </span>
            </a>

            <div class="video-body">

              <div class="video-category">
                ${v.category || ''}
              </div>

              <h3 class="video-title">
                ${v.title || ''}
              </h3>

              <p class="video-desc">
                ${v.description || ''}
              </p>

              <div class="video-meta">

                <span>
                  ${formatDate(v.date)}
                </span>

                <a
                  href="${v.youtubeUrl}"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-outline"
                  style="padding:0.4rem 0.8rem;font-size:0.7rem;"
                >
                  WATCH
                </a>

              </div>
            </div>

          </article>
        `;
      })
      .join('');
  }


  // =========================================================
  // Render Horror Stories
  // =========================================================

  function renderHorrorStories() {
    const container =
      document.getElementById('horror-stories');

    if (!container || typeof STORIES === 'undefined') {
      return;
    }

    const horror = STORIES
      .filter(function (s) {
        return (
          s.category === 'horror' ||
          s.category === 'mystery'
        );
      })
      .slice(0, 4);

    container.innerHTML = horror
      .map(function (s) {
        return `
          <a
            href="pages/stories.html?id=${encodeURIComponent(s.slug)}"
            class="story-card-large"
          >

            <div
              class="story-bg"
              style="background-image:url('${s.image}')"
            ></div>

            <div class="story-overlay"></div>

            <div class="story-content">

              <div class="story-cat">
                ${(s.category || '').toUpperCase()}
              </div>

              <h3 class="story-title">
                ${s.title || ''}
              </h3>

              <p class="story-excerpt">
                ${s.description || ''}
              </p>

            </div>

          </a>
        `;
      })
      .join('');
  }


  // =========================================================
  // Render Dark Technology
  // =========================================================

  function renderTech() {
    const grid = document.getElementById('tech-grid');

    if (!grid || typeof TECH_TOPICS === 'undefined') {
      return;
    }

    grid.innerHTML = TECH_TOPICS
      .map(function (t) {
        return `
          <div class="tech-card">

            <div class="tech-icon">
              ${t.icon || ''}
            </div>

            <h3 class="tech-title">
              ${t.title || ''}
            </h3>

            <p class="tech-desc">
              ${t.description || ''}
            </p>

          </div>
        `;
      })
      .join('');
  }


  // =========================================================
  // Render Categories
  // =========================================================

  function renderCategories() {
    const grid =
      document.getElementById('category-grid');

    if (!grid || typeof CATEGORIES === 'undefined') {
      return;
    }

    grid.innerHTML = CATEGORIES
      .map(function (c) {
        return `
          <a
            href="pages/stories.html?cat=${encodeURIComponent(c.id)}"
            class="category-card"
          >

            <div
              class="cat-bg"
              style="background-image:url('${c.image}')"
            ></div>

            <div class="cat-content">

              <div class="cat-name">
                ${c.name || ''}
              </div>

              <div class="cat-ar">
                ${c.nameAr || ''}
              </div>

            </div>

          </a>
        `;
      })
      .join('');
  }


  // =========================================================
  // Render Social / Community
  // =========================================================

  function renderSocial() {
    const grid =
      document.getElementById('social-grid');

    const community =
      document.getElementById('community-grid');

    if (typeof SOCIAL_LINKS === 'undefined') {
      return;
    }

    const cards = SOCIAL_LINKS
      .map(function (s) {
        return `
          <a
            href="${s.url}"
            target="_blank"
            rel="noopener"
            class="social-card"
          >

            <div class="social-icon">
              ${s.icon || ''}
            </div>

            <div class="social-info">

              <h4>
                ${s.name || ''}
              </h4>

              <p>
                ${s.descriptionAr || ''}
              </p>

            </div>

          </a>
        `;
      })
      .join('');

    if (grid) {
      grid.innerHTML = cards;
    }

    if (community) {
      community.innerHTML = cards;
    }
  }


  // =========================================================
  // Date formatter
  // =========================================================

  function formatDate(iso) {
    if (!iso) {
      return '';
    }

    try {
      const d = new Date(iso);

      if (Number.isNaN(d.getTime())) {
        return iso;
      }

      return d.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

    } catch (error) {
      return iso;
    }
  }


  // =========================================================
  // Hero particles
  // =========================================================

  function initParticles() {
    const container =
      document.getElementById('particles');

    if (!container) {
      return;
    }

    const prefersReduced =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

    if (prefersReduced) {
      return;
    }

    // Prevent duplicate particles
    if (container.children.length > 0) {
      return;
    }

    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');

      const size =
        Math.random() * 2 + 1;

      const opacity =
        Math.random() * 0.4 + 0.1;

      const left =
        Math.random() * 100;

      const top =
        Math.random() * 100;

      const duration =
        8 + Math.random() * 12;

      const delay =
        -Math.random() * 10;

      p.style.position = 'absolute';
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.background =
        `rgba(196, 30, 58, ${opacity})`;
      p.style.borderRadius = '50%';
      p.style.left = `${left}%`;
      p.style.top = `${top}%`;
      p.style.animation =
        `particleFloat ${duration}s ease-in-out infinite`;
      p.style.animationDelay =
        `${delay}s`;

      container.appendChild(p);
    }

    // Inject keyframes once
    if (!document.getElementById('particle-style')) {
      const style =
        document.createElement('style');

      style.id = 'particle-style';

      style.textContent = `
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }

          50% {
            transform: translate(
              ${Math.random() > 0.5 ? 20 : -20}px,
              -30px
            );
            opacity: 0.7;
          }
        }
      `;

      document.head.appendChild(style);
    }
  }


  // =========================================================
  // Smooth scrolling
  // =========================================================

  function initSmoothScroll() {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach(function (link) {

        link.addEventListener('click', function (event) {

          const targetId =
            link.getAttribute('href');

          if (
            !targetId ||
            targetId === '#'
          ) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      });
  }


  // =========================================================
  // Image error handling
  // =========================================================

  function initImageHandling() {
    document
      .querySelectorAll('img')
      .forEach(function (img) {

        img.addEventListener('error', function () {
          img.classList.add('image-error');
        });

      });
  }


  // =========================================================
  // Initialize Application
  // =========================================================

  document.addEventListener(
    'DOMContentLoaded',
    function () {

      renderVideos();

      renderHorrorStories();

      renderTech();

      renderCategories();

      renderSocial();

      initParticles();

      initSmoothScroll();

      initImageHandling();

    }
  );

})();
