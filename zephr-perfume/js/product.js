/**
 * ZEPHR HAUTE PARFUMERIE POUR HOMME — PRODUCT CATALOG
 * 10 Curated Masculine Fragrances matching the 10-Item Wireframe Grid
 */

const ZEPHR_PERFUMES = [
  {
    id: 'zephr-noir-01',
    title: 'ZEPHR NOIR 01',
    category: 'Extrait de Parfum',
    family: 'leather',
    familyName: 'Smoky Leather & Woods',
    price: 'Rp 1.450.000',
    numericPrice: 1450000,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Birch Tar, Tuscan Leather, Haitian Vetiver & Black Pepper.',
    fullDesc: 'Mahakarya wewangian malam yang memancarkan aura dominan dan maskulinitas tanpa kompromi. Menggabungkan asap kayu birch dengan kelembutan kulit Italia dan kesegaran rempah lada hitam.',
    topNotes: 'Black Cardamom, Italian Bergamot, Cracked Pink Pepper',
    heartNotes: 'Tuscan Leather, Smoked Birch Tar, French Clary Sage',
    baseNotes: 'Haitian Vetiver, Roasted Tonka, Aged Cedarwood, Dark Amber',
    longevity: '14 - 18 Jam (Extrait Concentration 35%)',
    sillage: 'Heavy & Dominant',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'sovereign-oud',
    title: 'SOVEREIGN OUD',
    category: 'Private Reserve',
    family: 'oud',
    familyName: 'Dark Agarwood & Amber',
    price: 'Rp 1.850.000',
    numericPrice: 1850000,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Malinau Agarwood, Smoked Plum, Saffron & Cuban Tobacco.',
    fullDesc: 'Kemewahan getah gaharu liar Kalimantan yang dimaserasi selama 6 bulan bersama daun tembakau Kuba dan safron Persia. Wibawa sejati seorang pemimpin.',
    topNotes: 'Persian Saffron, Blood Orange, Spiced Cinnamon',
    heartNotes: 'Smoked Black Plum, Cuban Tobacco Leaf, Rose Absolute',
    baseNotes: 'Malinau Raw Agarwood (Oud), Ambergris, Labdanum, Patchouli',
    longevity: '16 - 20 Jam (Private Reserve 38%)',
    sillage: 'Enigmatic & Regal',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'vetiver-1928',
    title: 'VETIVER 1928',
    category: 'Heritage Series',
    family: 'woody',
    familyName: 'Earthy Java Vetiver',
    price: 'Rp 1.250.000',
    numericPrice: 1250000,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Calabrian Bergamot, Roasted Vetiver Root & Atlas Cedar.',
    fullDesc: 'Penghormatan pada akar wangi Garut & Jawa yang dipanggang lambat untuk mengekstrak aroma tanah basah, hutan pinus pegunungan, dan kesegaran sitrus klasik pria terhormat.',
    topNotes: 'Calabrian Bergamot, Bitter Grapefruit, Juniper Berry',
    heartNotes: 'Bourbon Geranium, Indonesian Nutmeg, Roasted Coffee Flower',
    baseNotes: 'Smoked Java Vetiver, Virginian Cedar, White Oakmoss',
    longevity: '12 - 14 Jam',
    sillage: 'Refined & Timeless',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'obsidian-smoke',
    title: 'OBSIDIAN SMOKE',
    category: 'Night Elixir',
    family: 'oud',
    familyName: 'Incense & Charred Oak',
    price: 'Rp 1.350.000',
    numericPrice: 1350000,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Somalian Frankincense, Charred Oak & Warm Cashmeran.',
    fullDesc: 'Misteri malam pekat di mana aroma dupa kemenyan suci berpadu dengan kayu ek yang terbakar lembut dan kehangatan sutra cashmeran.',
    topNotes: 'Elemi Resin, Black Pepper, Coriander Seed',
    heartNotes: 'Somalian Frankincense, Cade Wood, Myrrh',
    baseNotes: 'Charred Oak, Cashmeran, Madagascar Vanilla Pod, Leather',
    longevity: '14 - 16 Jam',
    sillage: 'Intense & Magnetic',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'eclipse-cuir',
    title: 'ECLIPSE CUIR',
    category: 'Signature Noir',
    family: 'leather',
    familyName: 'Tuscan Leather & Smoke',
    price: 'Rp 1.550.000',
    numericPrice: 1550000,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Wild Thyme, Tuscan Leather, Smoked Raspberry & Ambergris.',
    fullDesc: 'Karakter pria modern yang percaya diri. Aroma jaket kulit mewah berbalut aksen buah rasberi hitam berasap dan kehangatan ambergris laut dalam.',
    topNotes: 'Wild Mountain Thyme, Saffron, Smoked Raspberry',
    heartNotes: 'Night Blooming Jasmine, Olibanum, Tuscan Leather',
    baseNotes: 'Raw Black Leather, Black Suede, Ambergris, Woody Notes',
    longevity: '15 - 18 Jam',
    sillage: 'Bold & Irresistible',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'ambre-imperial',
    title: 'AMBRE IMPÉRIAL',
    category: 'Private Reserve',
    family: 'amber',
    familyName: 'Aged Bourbon & Spice',
    price: 'Rp 1.300.000',
    numericPrice: 1300000,
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Golden Amber, Ceylon Cinnamon Bark, Bourbon Vanilla & Sandalwood.',
    fullDesc: 'Kehangatan sensual bourbon tua dalam tong kayu ek, berbaur dengan kayu cendana Mysore dan resin ambar emas yang memikat dan penuh karisma.',
    topNotes: 'Ceylon Cinnamon, Bergamot, Pink Peppercorn',
    heartNotes: 'Bourbon Barrel Accord, Benzoin Resin, Clove Bud',
    baseNotes: 'Golden Amber, Mysore Sandalwood, Bourbon Vanilla, Tonka',
    longevity: '14 - 16 Jam',
    sillage: 'Warm & Captivating',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'royal-cedar',
    title: 'ROYAL CEDAR',
    category: 'Signature Noir',
    family: 'woody',
    familyName: 'Atlas Cedar & Pine',
    price: 'Rp 1.150.000',
    numericPrice: 1150000,
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Blue Pine Needles, Virginian Cedarwood & White Musk.',
    fullDesc: 'Ketegasan arsitektural hutan pinus pegunungan tinggi. Aroma kayu cedar yang bersih, kokoh, dan memberikan rasa tenang penuh kendali.',
    topNotes: 'Blue Pine Needle, Iced Lemon Zest, Cardamom',
    heartNotes: 'Virginian Cedarwood, Clary Sage, Juniper Wood',
    baseNotes: 'Atlas Cedar, Vetiver, White Musk, Iso E Super',
    longevity: '12 - 14 Jam',
    sillage: 'Clean & Grounded',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'vortex-citrus',
    title: 'VORTEX CITRUS',
    category: 'Fresh Aquatic',
    family: 'fresh',
    familyName: 'Aquatic Noir & Salted Citrus',
    price: 'Rp 1.100.000',
    numericPrice: 1100000,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Frozen Bergamot, Mineral Sea Salt, Cardamom & Black Cypress.',
    fullDesc: 'Aroma pria aktif yang menyukai petualangan. Hembusan angin samudra dingin yang tajam dengan garam mineral laut dan kesegaran bergamot beku.',
    topNotes: 'Frozen Calabrian Bergamot, Grapefruit Peel, Aquatic Accord',
    heartNotes: 'Mineral Sea Salt, Cardamom, Black Cypress Needle',
    baseNotes: 'Driftwood, Ambergris, Haitian Vetiver, Clean Musk',
    longevity: '10 - 12 Jam',
    sillage: 'Crisp & Invigorating',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'tobacco-absolu',
    title: 'TOBACCO ABSOLU',
    category: 'Private Reserve',
    family: 'leather',
    familyName: 'Cuban Cigar & Dark Honey',
    price: 'Rp 1.650.000',
    numericPrice: 1650000,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Dried Tobacco Leaf, Spiced Ginger, Cacao Pod & Roasted Tonka.',
    fullDesc: 'Klub pria eksklusif dengan cerutu Havana terbaik, kayu mahoni tua, madu hutan pekat, dan biji kakao panggang. Mewah, berkelas, dan berkesan mendalam.',
    topNotes: 'Dried Cuban Tobacco Leaf, Spiced Ginger, Star Anise',
    heartNotes: 'Wild Dark Honey, Roasted Cacao, Tobacco Blossom, Tonka',
    baseNotes: 'Aged Woody Notes, Vanilla Absolute, Dried Fruits, Smoked Benzoin',
    longevity: '16+ Jam',
    sillage: 'Opulent & Rich',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  },
  {
    id: 'titanium-musk',
    title: 'TITANIUM MUSK',
    category: 'Modern Minimalist',
    family: 'fresh',
    familyName: 'Metallic Steel & White Iris',
    price: 'Rp 950.000',
    numericPrice: 950000,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Silver Aldehydes, Tuscan White Iris, Cashmeran & Clean Vetiver.',
    fullDesc: 'Presisi modern pria metropolitan. Kombinasi kesegaran metalik aldehida perak, bunga iris putih elegan, dan vetiver bersih yang tak lekang oleh waktu.',
    topNotes: 'Silver Aldehydes, Frozen Bergamot, Pink Peppercorn',
    heartNotes: 'Tuscan White Iris, Violet Leaf, Frankincense',
    baseNotes: 'Clean Cashmeran, Haitian Vetiver, Titanium Musk, Cedar',
    longevity: '12 - 14 Jam',
    sillage: 'Sharp & Modern',
    sizes: ['50ml Flacon', '100ml Grand Flacon']
  }
];

// Product Catalog Page Logic
document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('product-ten-grid');
  const searchInput = document.getElementById('product-search-input');
  const filterChips = document.querySelectorAll('.filter-chip');
  const sidebarLinks = document.querySelectorAll('.sidebar-perfume-filter');

  let activeFilter = 'all';
  let searchQuery = '';

  function renderGrid() {
    if (!gridContainer) return;

    const filtered = ZEPHR_PERFUMES.filter(item => {
      const matchFamily = activeFilter === 'all' || item.family === activeFilter;
      const matchSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.shortDesc.toLowerCase().includes(searchQuery) ||
        item.familyName.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery);
      return matchFamily && matchSearch;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
          <h3 style="font-family: var(--font-display); color: var(--color-obsidian); margin-bottom: 8px;">TIDAK DITEMUKAN</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem;">Tidak ada parfum yang cocok dengan kata kunci "${searchQuery}".</p>
          <button onclick="resetFilters()" style="margin-top: 14px; background: var(--color-gold); color: #090A0C; padding: 8px 18px; font-weight: 700; border-radius: 2px;">RESET PENCARIAN</button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => `
      <article class="product-card-unit" data-id="${item.id}">
        <div class="product-media-container" onclick="openQuickView('${item.id}')" style="cursor: pointer;">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="product-category-tag">${item.category}</div>
          <!-- Wireframe [+] Add to Cart Corner Button -->
          <button class="btn-wireframe-corner-add" onclick="event.stopPropagation(); quickAddToCart('${item.id}')" title="Tambah ke Troli">
            &plus;
          </button>
        </div>
        <div class="product-card-details">
          <h3 class="product-item-title" onclick="openQuickView('${item.id}')" style="cursor: pointer;">${item.title}</h3>
          <p class="product-notes-summary">${item.shortDesc}</p>
          <div class="product-price-row">
            <span class="product-item-price">${item.price}</span>
            <button class="btn-quickview-link" onclick="openQuickView('${item.id}')">DETAIL &rarr;</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Filter click handlers
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      renderGrid();
    });
  });

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter || 'all';
      activeFilter = filter;
      filterChips.forEach(c => {
        c.classList.toggle('active', c.dataset.filter === filter);
      });
      renderGrid();
      showToast(`Filter Koleksi: ${link.textContent}`);
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderGrid();
    });
  }

  window.resetFilters = () => {
    activeFilter = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
    renderGrid();
  };

  // Initial render
  renderGrid();
});

// Quick Add To Cart from corner [+] button
function quickAddToCart(id) {
  const perfume = ZEPHR_PERFUMES.find(p => p.id === id);
  if (!perfume) return;
  ZephrCart.addItem({
    id: perfume.id,
    title: perfume.title,
    price: perfume.price,
    numericPrice: perfume.numericPrice,
    image: perfume.image,
    size: '50ml Flacon',
    category: perfume.category
  });
}

// Quick View Modal
let currentModalPerfume = null;
let currentModalSize = '50ml Flacon';

function openQuickView(id) {
  const perfume = ZEPHR_PERFUMES.find(p => p.id === id);
  if (!perfume) return;
  currentModalPerfume = perfume;
  currentModalSize = '50ml Flacon';

  const overlay = document.getElementById('quickview-modal');
  const media = document.getElementById('quickview-media');
  const details = document.getElementById('quickview-details');
  if (!overlay || !media || !details) return;

  media.innerHTML = `
    <img src="${perfume.image}" alt="${perfume.title}">
    <div class="wireframe-box-cross"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg></div>
  `;

  details.innerHTML = `
    <div class="quickview-category">${perfume.category} &bull; ${perfume.familyName}</div>
    <h2 class="quickview-title">${perfume.title}</h2>
    <div class="quickview-price" id="modal-price-display">${perfume.price}</div>
    <p class="quickview-desc">${perfume.fullDesc}</p>

    <!-- Olfactory Pyramid -->
    <div class="olfactory-pyramid-box">
      <div class="pyramid-header">Piramida Aroma (Olfactory Pyramid)</div>
      <div class="pyramid-level">
        <span class="pyramid-level-label">Top Notes:</span>
        <span class="pyramid-level-notes">${perfume.topNotes}</span>
      </div>
      <div class="pyramid-level">
        <span class="pyramid-level-label">Heart Notes:</span>
        <span class="pyramid-level-notes">${perfume.heartNotes}</span>
      </div>
      <div class="pyramid-level">
        <span class="pyramid-level-label">Base Notes:</span>
        <span class="pyramid-level-notes">${perfume.baseNotes}</span>
      </div>
      <div class="pyramid-level" style="margin-top: 10px; border-top: 1px dashed #2B313B; padding-top: 8px;">
        <span class="pyramid-level-label">Ketahanan:</span>
        <span class="pyramid-level-notes" style="color: var(--color-gold-light);">${perfume.longevity}</span>
      </div>
      <div class="pyramid-level">
        <span class="pyramid-level-label">Sillage:</span>
        <span class="pyramid-level-notes">${perfume.sillage}</span>
      </div>
    </div>

    <!-- Size Selection -->
    <div class="size-selector-row">
      <button class="size-option-btn active" onclick="selectModalSize(this, '50ml Flacon', ${perfume.numericPrice})">50ml Flacon</button>
      <button class="size-option-btn" onclick="selectModalSize(this, '100ml Grand Flacon', ${Math.round(perfume.numericPrice * 1.65)})">100ml Grand Flacon (+65%)</button>
    </div>

    <!-- Add to Bag Button -->
    <button class="btn-quickview-add" onclick="addModalPerfumeToCart()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0"/>
      </svg>
      TAMBAH KE TROLI
    </button>
  `;

  overlay.classList.add('active');
}

function selectModalSize(btn, size, price) {
  currentModalSize = size;
  document.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const priceDisplay = document.getElementById('modal-price-display');
  if (priceDisplay) {
    priceDisplay.textContent = 'Rp ' + Number(price).toLocaleString('id-ID');
  }
}

function addModalPerfumeToCart() {
  if (!currentModalPerfume) return;
  const is100ml = currentModalSize.includes('100ml');
  const finalPrice = is100ml ? Math.round(currentModalPerfume.numericPrice * 1.65) : currentModalPerfume.numericPrice;

  ZephrCart.addItem({
    id: `${currentModalPerfume.id}-${is100ml ? '100ml' : '50ml'}`,
    title: currentModalPerfume.title,
    price: 'Rp ' + Number(finalPrice).toLocaleString('id-ID'),
    numericPrice: finalPrice,
    image: currentModalPerfume.image,
    size: currentModalSize,
    category: currentModalPerfume.category
  });

  closeQuickView();
}

function closeQuickView() {
  const overlay = document.getElementById('quickview-modal');
  if (overlay) overlay.classList.remove('active');
}
