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
    img: 'https://images.unsplash.com/photo-1560448204-603b8f2f4f35?w=700&q=80&auto=format&fit=crop',
    desc: '位於台北市大安區仁愛路核心地段，鄰近仁愛圓環，捷運步行五分鐘可達。本戶坐落21樓，視野開闊，採光充足。格局方正，主臥套房附更衣室，廚房採開放式歐化設計，全室建材品質優良，適合自住或投資置產。',
    features: ['捷運5分鐘', '近大安森林公園', '頂級管理', '機械停車位'],
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
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop',
    desc: '位於台北市信義區精華地段，鄰近台北101，交通便利、商業氛圍濃厚。開放式辦公格局，挑高3.5米，採光極佳，適合科技、金融及創意產業進駐，周邊餐廳、便利機能完善。',
    features: ['台北101步行10分', '大型會議室', '24小時保全', '彈性隔間'],
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
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80&auto=format&fit=crop',
    desc: '礎苑坐落板橋文化路核心，28層地標建築，採日式建築美學設計外觀。提供2至4房多種格局選擇，全棟高智能設備，空中花園、健身中心、兒童遊憩區等公設完備，預計2026年第二季完工交屋。',
    features: ['板橋車站5分鐘', '空中花園', '智慧門禁', '全齡公設'],
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
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80&auto=format&fit=crop',
    desc: '內湖科技園區旁的四層樓透天厝，地坪約15坪、建坪60坪，5房3衛、附地下停車位一台。屋況良好，一樓可作商業使用，二至四樓為住宅，前後院美化完善，環境清幽，附近生活機能齊備。',
    features: ['自備車位', '前後院', '近內科園區', '可商業使用'],
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
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&q=80&auto=format&fit=crop',
    desc: '位於中山區林森北路，捷運中山站步行三分鐘。12坪精緻套房，全新裝潢，傢俱家電齊全可直接入住，獨立廚房、全套浴廁，採光良好，適合單身或雙人租住，周邊餐廳、超商、藥妝店林立。',
    features: ['捷運3分鐘', '全配傢俱', '可養寵物', '獨立廚房'],
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
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80&auto=format&fit=crop',
    desc: '礎光坐落桃園中壢環中路，24層景觀豪宅，提供2至3房精選格局。全棟採落地窗設計，高樓層視野無遮，遠眺桃園市區天際線。捷運青埔站十分鐘車程，高鐵桃園站生活圈，預計2027年首季完工。',
    features: ['近高鐵桃園站', '全棟落地窗', '屋頂觀星台', '低總價首購優先'],
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
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `查看物件：${item.title}`);
      card.innerHTML = `
        <div class="listing-card__img">
          <div class="listing-card__placeholder" style="background:${item.bg}">${item.kanji}</div>
          <img class="listing-card__photo" src="${item.img || ''}" alt="${item.title}" loading="lazy" onerror="this.classList.add('img-error')">
          <span class="listing-card__badge ${item.badgeClass}">${item.badge}</span>
          <div class="listing-card__overlay">
            <span class="listing-card__view-label">查看詳情</span>
          </div>
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
          <div class="listing-card__cta">
            <span>查看物件</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      `;

      card.addEventListener('click', () => window.__openListingModal(item));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.__openListingModal(item); }
      });

      grid.appendChild(card);
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

// ── Property Modal ────────────────────────
(function initModal() {
  const modal = document.getElementById('propModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const ctaBtn = document.getElementById('modalCta');

  function openModal(item) {
    const imgEl = document.getElementById('modalImg');
    imgEl.classList.remove('img-error');
    imgEl.src = item.img || '';
    imgEl.alt = item.title;
    imgEl.onerror = () => imgEl.classList.add('img-error');

    const placeholder = document.getElementById('modalImgPlaceholder');
    placeholder.textContent = item.kanji;
    placeholder.style.background = item.bg;

    const badge = document.getElementById('modalBadge');
    badge.textContent = item.badge;
    badge.className = 'prop-modal__badge' + (item.badgeClass ? ' ' + item.badgeClass : '');

    document.getElementById('modalArea').textContent = item.area;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalMeta').innerHTML = item.meta.map(m => `<span>${m}</span>`).join('');
    document.getElementById('modalDesc').textContent = item.desc || '';
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalUnit').textContent = item.unit;

    const featuresEl = document.getElementById('modalFeatures');
    if (item.features && item.features.length) {
      featuresEl.innerHTML = item.features.map(f => `<span class="prop-modal__feature">${f}</span>`).join('');
      featuresEl.hidden = false;
    } else {
      featuresEl.hidden = true;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  ctaBtn.addEventListener('click', () => {
    closeModal();
    setTimeout(() => {
      const contact = document.getElementById('contact');
      if (contact) {
        const top = contact.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 350);
  });

  window.__openListingModal = openModal;
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
