console.log('JavaScript code is being executed');
document.addEventListener('DOMContentLoaded', function() {
      //collapsible
    const button = document.querySelector(".button-collapsible");
    const content = document.querySelector(".all-div");
    const funkciniaiCheckbox = document.getElementById('funkciniai');
    const funkciniaiImages = document.querySelectorAll('.funkciniaiImg');

      // Toggle the content when the button is clicked
    button.addEventListener("click", () => {
        content.classList.toggle("active");
        /*content.style.display = content.style.display === "block" ? "none" : "block";*/

        if (button.textContent === "Ʌ Slapukų naudojimo tikslai") {
          button.textContent = "V Slapukų naudojimo tikslai";
        } else {
          button.textContent = "Ʌ Slapukų naudojimo tikslai";
        }
        /*content.addEventListener("transitionend", () => {
          collapsiblecont.style.display = collapsiblecont.style.display === "block" ? "none" : "block";
        });*/
    });

    changeImg(funkciniaiCheckbox, funkciniaiImages);

    /*funkciniaiCheckbox.addEventListener('change', function() {
      if (this.checked) {
        funkciniaiImages.forEach(function(image) {
          image.src = 'assets/consentgiven.png';
        });
      } else {
        funkciniaiImages.forEach(function(image) {
          image.src = 'assets/consentnotgiven.png';
        });
      }
    });*/
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

  function changeImg(checkbox, images) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        images.forEach(function(image) {
          image.src = 'assets/consentgiven.png';
        });
      } else {
        images.forEach(function(image) {
          image.src = 'assets/consentnotgiven.png';
        });
      }
    });
  }
  