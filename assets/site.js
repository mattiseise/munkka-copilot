// Kopiointipainikkeet: data-copy="#id" osoittaa elementtiin, jonka teksti kopioidaan.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.copy-btn[data-copy]').forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener('click', function () {
      var el = document.querySelector(btn.getAttribute('data-copy'));
      if (!el) return;
      var text = el.textContent.replace(/\s+/g, ' ').trim();
      copyText(text, function () {
        btn.textContent = '✓ Kopioitu';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  // Kuvan suurennus napsauttamalla
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  var overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  document.querySelectorAll('figure img').forEach(function (img) {
    img.addEventListener('click', function () {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add('open');
    });
  });

  overlay.addEventListener('click', function () { overlay.classList.remove('open'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });

  // Tulostuspainike
  document.querySelectorAll('.print-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { window.print(); });
  });
});
