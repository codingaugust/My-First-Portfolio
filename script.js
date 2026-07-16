document.addEventListener('DOMContentLoaded', () => {

    // 1. एक्टिव मेनू लिंक को हाइलाइट करने के लिए (Current Page Highlighter)
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // अगर लिंक का href हमारे करंट पेज के नाम से मैच करता है
        if (currentUrl.includes(link.getAttribute('href'))) {
            // पुराने एक्टिव क्लास को हटाकर नए पर लगाना
            document.querySelector('nav ul li a.active')?.classList.remove('active');
            link.classList.add('active');
        }
    });

    // 2. कॉन्टैक्ट फॉर्म सबमिशन हैंडलर (Contact Form Simulation)
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // फॉर्म को नॉर्मल रीफ्रेश होने से रोकना
            e.preventDefault();

            // फॉर्म के इनपुट्स से डेटा निकालना
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // यूजर को एक सुंदर सा सक्सेस मैसेज दिखाना
            alert(`Thank you, ${name}! Your message has been sent successfully.\nAnand will contact you soon at: ${email}`);

            // फॉर्म को वापस खाली (Reset) करना
            this.reset();
        });
    }

    // 3. बटन क्लिक पर स्मूद इफेक्ट्स (Console Logging for Testing)
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
