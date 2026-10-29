/**
 * ZEPHR HAUTE PARFUMERIE POUR HOMME — HOME SCRIPT
 * Hero Video Modal, Story Expanders, Interactive Scent Teasers
 */

document.addEventListener('DOMContentLoaded', () => {
  // Hero Play Button
  const heroPlayBtn = document.getElementById('hero-play-btn');
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCinemaModal(
        'ZEPHR: KEKUATAN AROMA MASKULIN INTENS (OFFICIAL BRAND FILM)',
        'https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-a-dark-room-42867-large.mp4'
      );
    });
  }

  // Story card play triggers
  const storyCards = document.querySelectorAll('.story-card-item');
  storyCards.forEach(card => {
    const playBadge = card.querySelector('.media-play-badge');
    const link = card.querySelector('.story-link-btn');
    const heading = card.querySelector('.story-heading')?.textContent || 'ZEPHR Story';

    if (playBadge) {
      playBadge.addEventListener('click', (e) => {
        e.stopPropagation();
        openCinemaModal(`MAHAKARYA ZEPHR: ${heading}`);
      });
    }

    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openCinemaModal(`KISAH AROMA: ${heading}`);
      });
    }
  });

  // "SEE MORE STORIES >" Expander button
  const seeMoreStoriesBtn = document.getElementById('see-more-stories-btn');
  const storiesGrid = document.querySelector('.home-story-cards-grid');

  if (seeMoreStoriesBtn && storiesGrid) {
    let expanded = false;
    seeMoreStoriesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!expanded) {
        const extraCards = document.createElement('div');
        extraCards.id = 'extra-stories-block';
        extraCards.style.display = 'contents';
        extraCards.innerHTML = `
          <!-- Card 4 -->
          <article class="story-card-item" style="animation: fadeIn 0.4s ease;">
            <div class="story-media-box">
              <img src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80" alt="Bourbon Barrel Aging">
              <div class="media-play-badge" title="Tonton Proses Maserasi"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
            </div>
            <div class="story-card-body">
              <span class="story-tag">PROSES MASERASI</span>
              <h3 class="story-heading">MASERASI 180 HARI DI TONG EK</h3>
              <p class="story-excerpt">Bagaimana istirahat 6 bulan dalam suhu terkontrol menghasilkan kedalaman sillage yang lembut namun tahan hingga 18 jam.</p>
              <a href="#" class="story-link-btn" onclick="openCinemaModal('MASERASI 180 HARI'); return false;">BACA DOKUMENTASI &rarr;</a>
            </div>
          </article>

          <!-- Card 5 -->
          <article class="story-card-item" style="animation: fadeIn 0.4s ease;">
            <div class="story-media-box">
              <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80" alt="Bandung Atelier Lab">
              <div class="media-play-badge" title="Tonton Kisah Atelier"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
            </div>
            <div class="story-card-body">
              <span class="story-tag">WARISAN LOKAL</span>
              <h3 class="story-heading">VETIVER GARUT: EMAS HIJAU DUNIA</h3>
              <p class="story-excerpt">Mengapa akar wangi asal pegunungan Priangan diakui sebagai salah satu bahan parfum terbaik yang diperebutkan rumah parfum Paris.</p>
              <a href="#" class="story-link-btn" onclick="openCinemaModal('VETIVER GARUT: EMAS HIJAU'); return false;">BACA DOKUMENTASI &rarr;</a>
            </div>
          </article>

          <!-- Card 6 -->
          <article class="story-card-item" style="animation: fadeIn 0.4s ease;">
            <div class="story-media-box">
              <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80" alt="Flacon Craftsmanship">
              <div class="media-play-badge" title="Tonton Pembuatan Botol"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
            </div>
            <div class="story-card-body">
              <span class="story-tag">ARSITEKTUR BOTOL</span>
              <h3 class="story-heading">FLACON OBSIDIAN & TUTUP MAGNETIK</h3>
              <p class="story-excerpt">Bobot mantap kaca kristal hitam dengan bunyi klik magnetik presisi yang dirancang khusus untuk kenyamanan genggaman pria.</p>
              <a href="#" class="story-link-btn" onclick="openCinemaModal('ARSITEKTUR FLACON ZEPHR'); return false;">BACA DOKUMENTASI &rarr;</a>
            </div>
          </article>
        `;
        storiesGrid.appendChild(extraCards);
        seeMoreStoriesBtn.innerHTML = 'TAMPILKAN LEBIH SEDIKIT &uarr;';
        expanded = true;
        showToast('3 Kisah Mahakarya tambahan ditampilkan.');
      } else {
        const extra = document.getElementById('extra-stories-block');
        if (extra) extra.remove();
        seeMoreStoriesBtn.innerHTML = 'SEE MORE STORIES &gt;';
        expanded = false;
      }
    });
  }
});
