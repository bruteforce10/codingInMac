const checkBox = document.querySelector('.menu-toggle input');
const list = document.querySelector('.header-right ul');
const toggleDark = document.querySelector('.toggle input');
const heading = document.querySelector('.heading');
const aboutWrapper = document.querySelector('.about-wrapper');
const formWrapper = document.querySelector('.form-wrapper');


checkBox.addEventListener('click', function() {
    list.classList.toggle('slide');
})

toggleDark.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    heading.classList.toggle('white-color');
    aboutWrapper.classList.toggle('toska-color');
    formWrapper.classList.toggle('toska-color');
})


  function validateForm() {
      var email = document.getElementById("email").value;
      var errorMessage = document.getElementById("error");

      // Validasi input email menggunakan regex
      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Email tidak valid";
        return false;
      } else {
        errorMessage.innerHTML = "";
        return true;
      }
    }




const myModal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModalButton");
const closeModalIcon = document.getElementById("closeModalIcon");


openModalButton.addEventListener('click', () => {
    myModal.style.display = "flex";
})


closeModalIcon.addEventListener('click', () => {
    myModal.style.display = "none";
})


const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
    const accordions = accordion[i];
    accordions.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display="none";
        } else {
            panel.style.display="block";
        }
    })
}
