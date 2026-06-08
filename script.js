/* =========================================
   礎 ISHIZUE — JavaScript
   ========================================= */

'use strict';

// ── Utility ──────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Data ─────────────────────────────────

const listings = [
  {
    type: 'buy',
    area: '台北市・大安區',
    title: '仁愛路精品大樓',
    meta: ['3房2衛', '82坪', '21樓/28F'],
    price: '8,800',
    unit: '萬元',
    badge: '住宅買賣',
    badgeClass: '',
    kanji: '安',
    bg: 'linear-gradient(135deg, #2a2e2a 0%, #1e2218 100%)',
  },
  {
    type: 'rent',
    area: '台北市・信義區',
    title: '松仁路現代辦公室',
    meta: ['開放格局', '55坪', '8樓/12F'],
    price: '88,000',
    unit: '元/月',
    badge: '出租',
    badgeClass: 'gold',
    kanji: '商',
    bg: 'linear-gradient(135deg, #22282e 0%, #182028 100%)',
  },
  {
    type: 'new',
    area: '新北市・板橋區',
    title: '文化路新建案 【礎苑】',
    meta: ['2~4房可選', '預計2026Q2', '地上28層'],
    price: '3,500',
    unit: '萬起',
    badge: '新建案',
    badgeClass: 'moss',
    kanji: '新',
    bg: 'linear-gradient(135deg, #28221e 0%, #201a18 100%)',
  },
  {
    type: 'buy',
    area: '台北市・內湖區',
    title: '港華街透天厝',
    meta: ['5房3衛', '60坪', '地+4層'],
    price: '6,200',
    unit: '萬元',
    badge: '住宅買賣',
    badgeClass: '',
    kanji: '家',
    bg: 'linear-gradient(135deg, #2a2620 0%, #20201a 100%)',
  },
  {
    type: 'rent',
    area: '台北市・中山區',
    title: '林森北路精緻套房',
    meta: ['套房', '12坪', '4樓/8F'],
    price: '22,000',
    unit: '元/月',
    badge: '出租',
    badgeClass: 'gold',
    kanji: '室',
    bg: 'linear-gradient(135deg, #1e2226 0%, #161a1e 100%)',
  },
  {
    type: 'new',
    area: '桃園市・中壢區',
    title: '環中路景觀宅 【礎光】',
    meta: ['2~3房', '預計2027Q1', '地上24層'],
    price: '1,980',
    unit: '萬起',
    badge: '新建案',
    badgeClass: 'moss',
    kanji: '光',
    bg: 'linear-gradient(135deg, #202828 0%, #181e20 100%)',
  },
];

const testimonials = [
  {
    quote: '礎不動產的服務讓我對首次購屋不再感到陌生。從看屋到過戶，每個步驟都有專人說明，讓我感受到真正日式的細心與貼心。',
    author: '王小姐',
    role: '首購族・大安區自住',
  },
  {
    quote: '我委託礎不動產出租我名下的辦公室，短短三週便成功媒合優質承租人。合約條款保障完善，讓我完全放心。',
    author: '黃先生',
    role: '商業房東・信義區',
  },
  {
    quote: '透過礎不動產購入預售屋，顧問詳細解說建材規格與周邊發展，讓我對投資決策充滿信心。專業程度遠超預期。',
    author: '陳先生',
    role: '投資客・板橋礎苑',
  },
  {
    quote: '在台灣找租屋困難重重，礎的顧問非常有耐心，為我尋找到符合預算又交通便利的理想住所，感謝您們。',
    author: '林小姐',
    role: '租屋客・中山區',
  },
];

// ── Navbar Scroll ─────────────────────────
(function initNav() {
  const nav = $('#nav');
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  $$('.nav__links a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// ── Reveal on Scroll ──────────────────────
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger within same parent
        const siblings = $$('.reveal', entry.target.parentElement);
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => io.observe(el));
})();

// ── Listings ─────────────────────────────
(function initListings() {
  const grid = $('#listingsGrid');
  const filterBtns = $$('.filter-btn');
  let current = 'all';

  function renderCards(filter) {
    const filtered = filter === 'all'
      ? listings
      : listings.filter(l => l.type === filter);

    grid.innerHTML = '';
    filtered.forEach((item, i) => {
      const card = document.createElement('article');
      card.className = 'listing-card reveal';
      card.dataset.type = item.type;
      card.innerHTML = `
        <div class="listing-card__img">
          <div class="listing-card__placeholder"
               style="background:${item.bg}">
            ${item.kanji}
          </div>
          <span class="listing-card__badge ${item.badgeClass}">${item.badge}</span>
        </div>
        <div class="listing-card__body">
          <p class="listing-card__area">${item.area}</p>
          <h3 class="listing-card__title">${item.title}</h3>
          <div class="listing-card__meta">
            ${item.meta.map(m => `<span>${m}</span>`).join('')}
          </div>
          <p class="listing-card__price">
            ${item.price}<small>${item.unit}</small>
          </p>
        </div>
      `;
      grid.appendChild(card);
      // Slight stagger
      setTimeout(() => {
        const io = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => card.classList.add('visible'), i * 100);
            io.disconnect();
          }
        }, { threshold: 0.1 });
        io.observe(card);
      }, 0);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      current = btn.dataset.filter;
      renderCards(current);
    });
  });

  renderCards('all');
})();

// ── Testimonials Slider ───────────────────
(function initTestimonials() {
  const inner = $('#testimonialsInner');
  const dotsContainer = $('#testiDots');
  const prevBtn = $('#testiPrev');
  const nextBtn = $('#testiNext');
  let current = 0;
  let autoTimer;

  // Build slides
  testimonials.forEach((t) => {
    const slide = document.createElement('div');
    slide.className = 'testi-card';
    slide.innerHTML = `
      <blockquote class="testi-card__quote">${t.quote}</blockquote>
      <p class="testi-card__author">${t.author}</p>
      <p class="testi-card__role">${t.role}</p>
    `;
    inner.appendChild(slide);
  });

  // Build dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `第 ${i + 1} 則`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    current = (idx + testimonials.length) % testimonials.length;
    inner.style.transform = `translateX(-${current * 100}%)`;
    $$('.testi-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn.addEventListener('click', () => { clearInterval(autoTimer); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { clearInterval(autoTimer); goTo(current + 1); startAuto(); });

  startAuto();

  // Swipe support
  let startX = 0;
  inner.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  inner.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      clearInterval(autoTimer);
      goTo(dx < 0 ? current + 1 : current - 1);
      startAuto();
    }
  });
})();

// ── Contact Form ──────────────────────────
(function initForm() {
  const form = $('#contactForm');
  const success = $('#formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name').value.trim();
    const phone = $('#phone').value.trim();

    // Simple validation
    if (!name) { highlight($('#name')); return; }
    if (!phone) { highlight($('#phone')); return; }

    // Simulate submission
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '送出中…';
    btn.disabled = true;

    setTimeout(() => {
      success.classList.add('visible');
      form.reset();
      btn.textContent = '送出諮詢';
      btn.disabled = false;
      setTimeout(() => success.classList.remove('visible'), 5000);
    }, 1200);
  });

  function highlight(el) {
    el.style.borderColor = '#8b3a2a';
    el.focus();
    el.addEventListener('input', () => { el.style.borderColor = ''; }, { once: true });
  }
})();

// ── Active nav link on scroll ─────────────
(function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav__links a[href^="#"]');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = $(`.nav__links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
})();

// ── Smooth scroll offset for fixed nav ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
