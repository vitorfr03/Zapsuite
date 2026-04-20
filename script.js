document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isActive = navMenu.classList.contains('active');
        
        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'translateY(9px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
        } else {
            spans[0].style.transform = 'translateY(0) rotate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'translateY(0) rotate(0)';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'translateY(0) rotate(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fechar todas as outras respostas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.faq-icon');
                if(icon) icon.textContent = '+';
            });
            
            // Se não estava ativa, abre e troca o ícone
            if (!isActive) {
                faqItem.classList.add('active');
                const icon = question.querySelector('.faq-icon');
                if(icon) icon.textContent = '-';
            }
        });
    });
});
