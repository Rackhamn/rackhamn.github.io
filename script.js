<script>
  const links = document.querySelectorAll('.lightbox-link');
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const src = link.getAttribute('href');
      overlayImg.src = src;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = '';
  });

  closeBtn.addEventListener('click', e => {
    e.stopPropagation(); // don't trigger overlay click
    overlay.style.display = 'none';
    overlayImg.src = '';
  });
</script>
