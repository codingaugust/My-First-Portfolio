document.addEventListener('DOMContentLoaded', () => {

    //(Current Page Highlighter)
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // If the link's href matches our current page's name
        if (currentUrl.includes(link.getAttribute('href'))) {
            // Removing the old active class and applying the new one
            document.querySelector('nav ul li a.active')?.classList.remove('active');
            link.classList.add('active');
        }
    });

    // 2. (Contact Form Simulation)
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Preventing a normal form refresh
            e.preventDefault();

            // Preventing a normal form refresh
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Showing a nice success message to the user
            alert(`Thank you, ${name}! Your message has been sent successfully.\nAnand will contact you soon at: ${email}`);

            // Resetting the form
            this.reset();
        });
    }

    // 3.(Console Logging for Testing)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Button clicked successfully on local server!");
        });
    });

});
function openModal(fileLink) {
    var modal = document.getElementById('certModal');
    var iframe = document.getElementById('certFrame');
    var imgTag = document.getElementById('certImage');
    
    // Pehle dono ko chhupa dete hain
    iframe.style.display = 'none';
    imgTag.style.display = 'none';
    
    // Check karte hain ki file PDF hai ya Image
    if (fileLink.toLowerCase().endsWith('.pdf') || fileLink.includes('drive.google.com')) {
        iframe.src = fileLink;
        iframe.style.display = 'block'; // PDF ke liye iframe chalu
    } else {
        imgTag.src = fileLink;
        imgTag.style.display = 'block'; // JPEG ke liye image tag chalu (bina zoom ke dikhega)
    }
    
    // Popup ko screen par show karein
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('certModal');
    var iframe = document.getElementById('certFrame');
    var imgTag = document.getElementById('certImage');
    
    modal.style.display = 'none';
    iframe.src = '';
    imgTag.src = '';
}
