const myModal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModalButton");
const closeModalIcon = document.getElementById("closeModalIcon");


openModalButton.addEventListener('click', () => {
    myModal.style.display = "block";
})


closeModalIcon.addEventListener('click', () => {
    myModal.style.display = "none";
})



