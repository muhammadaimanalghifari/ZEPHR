/**
 * ZEPHR HAUTE PARFUMERIE POUR HOMME — ATELIER BANDUNG
 * Core Application Engine: Cart, Modals, Wireframe Guides, Viewport, Toast
 */

// Global Shopping Cart
const ZephrCart = {
  items: JSON.parse(localStorage.getItem('zephr_cart_perfume') || '[]'),

  save() {
    localStorage.setItem('zephr_cart_perfume', JSON.stringify(this.items));
    this.updateUI();
  },

  addItem(item) {
    const existing = this.items.find(i => i.id === item.id && i.size === item.size);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      this.items.push({
        id: item.id || Date.now().toString(),
        title: item.title,
        price: item.price,
        numericPrice: item.numericPrice || 1250000,
        image: item.image,
        size: item.size || '50ml Flacon',
        category: item.category || 'Extrait de Parfum',
        quantity: item.quantity || 1
      });
    }
    this.save();
    showToast(`"${item.title}" ditambahkan ke Troli.`);
    this.openDrawer();
  },

  removeItem(index) {
    this.items.splice(index, 1);
    this.save();
  },

  updateQty(index, delta) {
    if (!this.items[index]) return;
    this.items[index].quantity += delta;
    if (this.items[index].quantity <= 0) {
      this.items.splice(index, 1);
    }
    this.save();
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0);
  },

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  formatIDR(num) {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
  },

  updateUI() {
    const badges = document.querySelectorAll('.cart-count-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });

    const list = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal');
    if (!list) return;

    if (this.items.length === 0) {
      list.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0"/>
          </svg>
          <p>Troli wewangian Anda masih kosong.</p>
          <a href="product.html" class="action-text-link" style="justify-content: center; margin-top: 12px; color: var(--color-gold);">JELAJAHI KOLEKSI &rarr;</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = 'Rp 0';
      return;
    }

    list.innerHTML = this.items.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-variant">${item.size} &bull; ${item.category}</div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${this.formatIDR(item.numericPrice)}</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="ZephrCart.updateQty(${idx}, -1)">&minus;</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="ZephrCart.updateQty(${idx}, 1)">&plus;</button>
            </div>
          </div>
        </div>
        <button onclick="ZephrCart.removeItem(${idx})" title="Hapus" style="color:#6C7582; font-size:1.1rem; padding:4px;">&times;</button>
      </div>
    `).join('');

    if (subtotalEl) {
      subtotalEl.textContent = this.formatIDR(this.getTotal());
    }
  },

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    }
  },

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
};

// Toast Notification
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Cinema Video Modal
function openCinemaModal(title, videoUrl) {
  const overlay = document.getElementById('cinema-modal');
  const titleEl = document.getElementById('cinema-title');
  const viewport = document.getElementById('cinema-viewport');
  if (!overlay || !viewport) return;

  if (titleEl) titleEl.textContent = title || "ZEPHR — THE ART OF MASCULINE SCENTS";
  
  // Set video or ambient presentation
  viewport.innerHTML = `
    <video autoplay loop muted playsinline controls style="width:100%; height:100%; object-fit:cover;">
      <source src="https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-a-dark-room-42867-large.mp4" type="video/mp4">
    </video>
  `;

  overlay.classList.add('active');
}

function closeCinemaModal() {
  const overlay = document.getElementById('cinema-modal');
  const viewport = document.getElementById('cinema-viewport');
  if (overlay) {
    overlay.classList.remove('active');
    if (viewport) viewport.innerHTML = '';
  }
}

// Wireframe Guides & Viewport Switcher
document.addEventListener('DOMContentLoaded', () => {
  ZephrCart.updateUI();

  // Wireframe toggle
  const wireframeToggle = document.getElementById('wireframe-mode-toggle');
  const wireframeOverlay = document.querySelector('.wireframe-grid-overlay');
  const specIndicator = document.getElementById('grid-spec-text');

  if (wireframeToggle && wireframeOverlay) {
    wireframeToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        wireframeOverlay.classList.add('active');
        if (specIndicator) specIndicator.classList.add('active');
      } else {
        wireframeOverlay.classList.remove('active');
        if (specIndicator) specIndicator.classList.remove('active');
      }
    });
  }

  // Viewport switchers
  const viewportBtns = document.querySelectorAll('.btn-viewport');
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.viewport;
      
      const body = document.body;
      body.classList.remove('viewport-desktop', 'viewport-tablet', 'viewport-mobile');
      
      if (mode === 'tablet') {
        body.classList.add('viewport-tablet');
        if (specIndicator) {
          specIndicator.innerHTML = '<strong>Tablet Wireframe</strong> &bull; Gutter: 0.49 cm &bull; Column: 10 &bull; Margin: 3.95 cm';
        }
      } else if (mode === 'mobile') {
        body.classList.add('viewport-mobile');
        if (specIndicator) {
          specIndicator.innerHTML = '<strong>Smartphone Wireframe</strong> &bull; Gutter: 0.35 cm &bull; Column: 10/3 &bull; Margin: 1.41 cm';
        }
      } else {
        body.classList.add('viewport-desktop');
        if (specIndicator) {
          specIndicator.innerHTML = '<strong>Desktop Wireframe</strong> &bull; Gutter: 0.85 cm &bull; Column: 12 &bull; Margin: 8.47 cm';
        }
      }
      showToast(`Tampilan Wireframe: ${mode.toUpperCase()}`);
    });
  });

  // Cart open/close triggers
  const cartOpenBtns = document.querySelectorAll('#cart-open-btn, .sidebar-open-cart-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  cartOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      ZephrCart.openDrawer();
    });
  });

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => ZephrCart.closeDrawer());
  if (cartOverlay) cartOverlay.addEventListener('click', () => ZephrCart.closeDrawer());

  // Language switch
  const langSelector = document.getElementById('lang-selector-btn');
  if (langSelector) {
    langSelector.addEventListener('click', () => {
      const current = langSelector.textContent.includes('IDN');
      langSelector.innerHTML = current 
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> LANGUAGE : ENG`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> LANGUAGE : IDN`;
      showToast(current ? 'Switched to English' : 'Beralih ke Bahasa Indonesia');
    });
  }

  // Mobile menu trigger
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('active');
      if (mobileNavOverlay) mobileNavOverlay.classList.toggle('active');
    });
  }
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
    });
  }

  // Checkout trigger
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (ZephrCart.items.length === 0) {
        showToast('Troli Anda masih kosong. Silakan pilih parfum.');
        return;
      }
      showToast('Menghubungkan ke Private Atelier Concierge WhatsApp...');
      setTimeout(() => {
        const orderSummary = ZephrCart.items.map(i => `${i.title} (${i.size}) x${i.quantity}`).join('%0A- ');
        const total = ZephrCart.formatIDR(ZephrCart.getTotal());
        const waUrl = `https://wa.me/6289529114752?text=Halo%20ZEPHR%20Parfums%2C%20saya%20ingin%20memesan%3A%0A- ${orderSummary}%0ATotal%3A%20${encodeURIComponent(total)}`;
        window.open(waUrl, '_blank');
      }, 800);
    });
  }
});
