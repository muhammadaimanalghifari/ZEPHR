/**
 * ZEPHR HAUTE PARFUMERIE POUR HOMME — CONTACT SCRIPT
 * Form validation, Direct WhatsApp Bridge, Consultation Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('zephr-contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const topicSelect = document.getElementById('contact-topic');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('btn-contact-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const topic = topicSelect?.value || 'Konsultasi Parfum Personal';
      const message = messageInput?.value.trim();

      if (!name) {
        showToast('Mohon tulis nama Anda terlebih dahulu.');
        nameInput?.focus();
        return;
      }

      if (!email || !email.includes('@')) {
        showToast('Mohon masukkan alamat email yang valid.');
        emailInput?.focus();
        return;
      }

      if (!message) {
        showToast('Mohon tuliskan pesan atau pertanyaan wewangian Anda.');
        messageInput?.focus();
        return;
      }

      // Animated button loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `MENGIRIM PESAN KE ATELIER...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Success Confirmation Modal
        showContactSuccessModal(name, email, topic, message);
        contactForm.reset();
      }, 1000);
    });
  }
});

function showContactSuccessModal(name, email, topic, message) {
  let modal = document.getElementById('contact-success-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'contact-success-modal';
    modal.className = 'quickview-modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="quickview-modal-box" style="max-width: 520px; padding: 40px; text-align: center;">
      <div style="width: 64px; height: 64px; background: rgba(197, 160, 89, 0.15); border: 2px solid var(--color-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #FFFFFF; letter-spacing: 0.12em; margin-bottom: 10px;">PESAN TERKIRIM KE ATELIER</h3>
      <p style="font-size: 0.85rem; color: #A9B2BF; line-height: 1.6; margin-bottom: 24px;">
        Terima kasih, <strong>${name}</strong>. Tim Master Perfumer & Private Concierge ZEPHR di Bandung akan menghubungi Anda via email (<strong>${email}</strong>) dalam 1x24 jam kerja.
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <a href="https://wa.me/6289529114752?text=Halo%20ZEPHR%20Parfums%2C%20saya%20${encodeURIComponent(name)}%20sudah%20mengirimkan%20pesan%20via%20website%20mengenai%20${encodeURIComponent(topic)}%3A%20${encodeURIComponent(message)}" target="_blank" class="btn-contact-action btn-contact-whatsapp" style="padding: 14px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
          </svg>
          LANJUT VIA WHATSAPP LANGSUNG
        </a>
        <button onclick="document.getElementById('contact-success-modal').classList.remove('active')" style="background: #1C2027; color: #8E98A5; padding: 12px; font-weight: 700; border-radius: 2px;">
          TUTUP
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
