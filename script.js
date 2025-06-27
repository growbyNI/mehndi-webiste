
  const images = document.querySelectorAll('.zoom-img');
  const popup = document.getElementById('imagePopup');
  const popupImg = document.getElementById('popupImg');
  const closeBtn = document.getElementById('closePopup');

  images.forEach(img => {
    img.addEventListener('click', () => {
      popupImg.src = img.src;
      popup.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });


  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });

