// Game Site Factory — Instant Search & Interactive Accordions
document.addEventListener('DOMContentLoaded', () => {
  // Live Keyword Filter
  const searchInput = document.getElementById('searchGuide');
  const cards = document.querySelectorAll('.article-card');

  if (searchInput && cards.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.display !== 'none';
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
});
