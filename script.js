
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


 
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_kvthh8q", "template_z8rjfr6", this) // ✅ 'this' is the form element
      .then(function(response) {
        alert("Message sent successfully!");
        e.target.reset(); // reset form
      }, function(error) {
        alert("Failed to send message.");
        console.error("EmailJS Error:", error);
      });
  });


