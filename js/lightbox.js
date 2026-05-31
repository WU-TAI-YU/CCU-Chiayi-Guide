function initLightbox(selector) {
  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML =
    '<button class="lb-close" aria-label="關閉圖片預覽">&times;</button>' +
    '<img class="lb-img" alt="" />';
  document.body.appendChild(overlay);

  const lbImg = overlay.querySelector('.lb-img');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll(selector).forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      open(img.src, img.alt);
    });
  });

  overlay.querySelector('.lb-close').addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}
