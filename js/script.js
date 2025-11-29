document.addEventListener('DOMContentLoaded', () => {
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données (simulation)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simulation d'envoi
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Envoi en cours...';
            btn.style.backgroundColor = '#10b981'; // Vert
            
            setTimeout(() => {
                alert(`Merci ${name} ! Votre message a bien été "envoyé" (Ceci est une démo).`);
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = ''; // Retour couleur originale
            }, 1500);
        });
    }

    // Effet de navigation active au scroll
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = ''; // Reset
            if (link.getAttribute('href').includes(current)) {
                link.style.color = '#8b5cf6'; // Active color
            }
        });
    });
});