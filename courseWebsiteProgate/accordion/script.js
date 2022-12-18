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

