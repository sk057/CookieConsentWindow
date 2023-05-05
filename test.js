console.log('JavaScript code is being executed');
document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.querySelector(".button-collapsible");
    const content = document.querySelector(".all-div");
    const funkciniaiCheckbox = document.getElementById('funkciniai');
    const funkciniaiImages = document.querySelectorAll('.funkciniaiImg');
    const analitiniaiCheckbox = document.getElementById('analitiniai');
    const analitiniaiImages = document.querySelectorAll('.analitiniaiImg');
    const tiksliniaiCheckbox = document.getElementById('tiksliniai');
    const tiksliniaiImages = document.querySelectorAll('.tiksliniaiImg');
    const trecSalysImages = document.querySelectorAll('.trecsalysImg');

    button.addEventListener("click", () => {
        content.classList.toggle("active");

        if (button.textContent === "▲ Slapukų naudojimo tikslai") {
          button.textContent = "▼ Slapukų naudojimo tikslai";
        } else {
          button.textContent = "▲ Slapukų naudojimo tikslai";
        }
    });

    changeImg(funkciniaiCheckbox, funkciniaiImages, trecSalysImages);
    changeImg(analitiniaiCheckbox, analitiniaiImages, trecSalysImages);
    changeImg(tiksliniaiCheckbox, tiksliniaiImages, trecSalysImages);
  });

  function checkAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(:disabled)');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
      checkboxes[i].dispatchEvent(new Event('change'));
    }
  }

  function uncheckAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(:disabled)');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
      checkboxes[i].dispatchEvent(new Event('change'));
    }
  }

  function changeImg(checkbox, images, trecSalysImages) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        images.forEach(function(image) {
          image.src = 'assets/consentgiven.png';
          image.alt = 'Consent given';
          changeTrecSalImg(trecSalysImages);
        });
      } else {
        images.forEach(function(image) {
          image.src = 'assets/consentnotgiven.png';
          image.alt = 'Consent not given';
          changeTrecSalImg(trecSalysImages);
        });
      }
    });
  }

  function changeTrecSalImg(trecSalysImages){
    for (var i = 0; i < trecSalysImages.length; i++){
      funkciniaiSib = trecSalysImages[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('.funkciniaiImg');
      analitiniaiSib = trecSalysImages[i].parentElement.previousElementSibling.previousElementSibling.querySelector('.analitiniaiImg');
      tiksliniaiSib = trecSalysImages[i].parentElement.previousElementSibling.querySelector('.tiksliniaiImg');
      if (funkciniaiSib && funkciniaiSib.alt == 'Consent given' || analitiniaiSib.alt == 'Consent given' || tiksliniaiSib.alt == 'Consent given'){
        trecSalysImages[i].src = 'assets/consentgiven.png';
      }
      else if (analitiniaiSib.alt == 'Consent given' || tiksliniaiSib.alt == 'Consent given'){
        trecSalysImages[i].src = 'assets/consentgiven.png';
      }
      else{
        trecSalysImages[i].src = 'assets/consentnotgiven.png';
      }
    }
    
  }
  