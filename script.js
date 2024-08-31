// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    // Change navbar background on scroll
    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Change background color based on scroll position
    const sections = document.querySelectorAll('section');
    const body = document.body;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
            switch (section.id) {
                case 'home':
                    body.style.backgroundColor = '#f4f4f4'; // Light gray
                    break;
                case 'about':
                    body.style.backgroundColor = '#ffe6e6'; // Light red
                    break;
                case 'services':
                    body.style.backgroundColor = '#e6ffe6'; // Light green
                    break;
                case 'portfolio':
                    body.style.backgroundColor = '#e6e6ff'; // Light blue
                    break;
                case 'testimonials':
                    body.style.backgroundColor = '#fffbe6'; // Light yellow
                    break;
                case 'contact':
                    body.style.backgroundColor = '#e6f7ff'; // Light cyan
                    break;
            }
        }
    });
});
