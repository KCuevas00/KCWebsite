// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (!mobileMenu || !mobileMenuBtn) return;
        
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    }

    // Event listeners for mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}

// Desktop menu functionality
function initDesktopMenu() {
    // Find all desktop menu buttons
    const desktopMenuBtns = document.querySelectorAll('button:not(#mobile-menu-btn):not(#close-menu-btn):not(.language-toggle)');
    
    desktopMenuBtns.forEach(btn => {
        if (btn.textContent.trim() === 'Menu') {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Desktop menu clicked - working!');
                
                // Toggle mobile menu for desktop as well (reuse same overlay)
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                
                if (mobileMenu && mobileMenuBtn) {
                    const isOpen = !mobileMenu.classList.contains('hidden');
                    
                    if (isOpen) {
                        mobileMenu.classList.add('hidden');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                    } else {
                        mobileMenu.classList.remove('hidden');
                        mobileMenuBtn.setAttribute('aria-expanded', 'true');
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
            
            // Ensure button is clickable
            btn.style.pointerEvents = 'auto';
            btn.style.cursor = 'pointer';
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card');
    animateElements.forEach(el => {
        el.classList.add('opacity-0');
        observer.observe(el);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// WhatsApp floating button (placeholder functionality)
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('[aria-label="WhatsApp"]');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Placeholder for WhatsApp functionality
            console.log('WhatsApp integration would go here');
        });
    }
}

// Language toggle functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.language-toggle');
    const translations = {
        en: {
            home: 'HOME',
            work: 'WORK', 
            about: 'ABOUT',
            contact: 'CONTACT',
            heroText: 'Websites for small businesses across Illinois.',
            heroSubtext: 'Kevin Cuevas.',
            heroEducation: 'Northern Illinois University — Computer Science',
            selectedWork: 'Featured Work',
            workDescription: 'Creating digital experiences that help local businesses establish their online presence with professionalism and authenticity.',
            mobileFirst: 'Designed for mobile first.',
            mobileSubtext: 'Because most customers already are.',
            transformation: 'Transformation',
            beforeAfter: 'From a Facebook page and phone number to a real online presence.',
            aboutKevin: 'About Kevin',
            letsBuild: 'Let\'s build something that feels real.',
            readyToEstablish: 'Ready to establish your professional online presence? Let\'s discuss how we can create a website that represents your business with authenticity and care.',
            startProject: 'Start a Project'
        },
        es: {
            home: 'INICIO',
            work: 'TRABAJO',
            about: 'ACERCA DE',
            contact: 'CONTACTO',
            heroText: 'Sitios web para pequeñas empresas en toda Illinois.',
            heroSubtext: 'Trabajo seleccionado por Kevin Cuevas.',
            heroEducation: 'Universidad Northern Illinois — Ciencias de la Computación',
            selectedWork: 'Trabajo Seleccionado',
            workDescription: 'Creando experiencias digitales que ayudan a las empresas locales a establecer su presencia en línea con profesionalismo y autenticidad.',
            mobileFirst: 'Diseñado para móviles primero.',
            mobileSubtext: 'Porque la mayoría de los clientes ya lo están.',
            transformation: 'Transformación',
            beforeAfter: 'De una página de Facebook y un número de teléfono a una verdadera presencia en línea.',
            aboutKevin: 'Acerca de Kevin',
            letsBuild: 'Construyamos algo que se sienta real.',
            readyToEstablish: '¿Listo para establecer tu presencia profesional en línea? Hablemos de cómo podemos crear un sitio web que represente tu negocio con autenticidad y cuidado.',
            startProject: 'Comenzar Proyecto'
        }
    };

    function switchLanguage(lang) {
        console.log('Switching to language:', lang);
        
        // Update active state
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('text-terracotta');
                btn.setAttribute('aria-current', 'true');
            } else {
                btn.classList.remove('text-terracotta');
                btn.removeAttribute('aria-current');
            }
        });

        // Update content based on translations
        const t = translations[lang];
        
        // Update navigation - more robust matching
        document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
            const text = link.textContent.trim();
            const originalText = link.textContent.trim();
            
            // Handle all navigation items
            if (originalText === 'HOME' || originalText === 'INICIO') {
                link.textContent = t.home;
            } else if (originalText === 'WORK' || originalText === 'TRABAJO') {
                link.textContent = t.work;
            } else if (originalText === 'ABOUT' || originalText === 'ACERCA DE') {
                link.textContent = t.about;
            } else if (originalText === 'CONTACT' || originalText === 'CONTACTO') {
                link.textContent = t.contact;
            }
        });

        // Update hero section - more specific selector
        const heroH1 = document.querySelector('h1.font-serif.text-4xl, h1.font-serif.text-5xl, h1.font-serif.text-6xl');
        if (heroH1) {
            const currentText = heroH1.textContent.trim();
            if (currentText.includes('Websites for small businesses') || currentText.includes('Sitios web para pequeñas empresas')) {
                heroH1.textContent = t.heroText;
            } else if (currentText === 'Featured Work' || currentText === 'Trabajo Seleccionado') {
                heroH1.textContent = t.selectedWork;
            } else if (currentText === 'About Kevin' || currentText === 'Acerca de Kevin') {
                heroH1.textContent = t.aboutKevin;
            }
        }

        // Update hero subtext
        document.querySelectorAll('p.font-sans.text-lg').forEach(p => {
            const text = p.textContent.trim();
            if (text.includes('Featured Work by Kevin Cuevas') || text.includes('Trabajo seleccionado por Kevin Cuevas')) {
                p.textContent = t.heroSubtext;
            } else if (text.includes('Northern Illinois University') || text.includes('Universidad Northern Illinois')) {
                p.textContent = t.heroEducation;
            }
        });

        // Update section headings
        document.querySelectorAll('h2.font-serif.text-3xl, h2.font-serif.text-4xl').forEach(h2 => {
            const text = h2.textContent.trim();
            if (text === 'Featured Work' || text === 'Trabajo Seleccionado') {
                h2.textContent = t.selectedWork;
            } else if (text === 'Transformation' || text === 'Transformación') {
                h2.textContent = t.transformation;
            } else if (text === 'About Kevin' || text === 'Acerca de Kevin') {
                h2.textContent = t.aboutKevin;
            } else if (text === 'Designed for mobile first.' || text === 'Diseñado para móviles primero.') {
                h2.textContent = t.mobileFirst;
            }
        });

        // Update mobile subtext
        document.querySelectorAll('p.font-serif.text-xl').forEach(p => {
            const text = p.textContent.trim();
            if (text === 'Because most customers already are.' || text === 'Porque la mayoría de los clientes ya lo están.') {
                p.textContent = t.mobileSubtext;
            }
        });

        // Update CTA sections
        document.querySelectorAll('h2.font-serif.text-3xl, h2.font-serif.text-4xl').forEach(h2 => {
            const text = h2.textContent.trim();
            if (text === "Let's build something that feels real." || text === 'Construyamos algo que se sienta real.') {
                h2.textContent = t.letsBuild;
            }
        });

        // Update buttons
        document.querySelectorAll('button, a').forEach(element => {
            const text = element.textContent.trim();
            if (text === 'Start a Project' || text === 'Comenzar Proyecto') {
                element.textContent = t.startProject;
            }
        });

        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
        console.log('Language switched to:', lang, 'and saved to localStorage');
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            console.log('Language button clicked:', lang);
            switchLanguage(lang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('Loading saved language:', savedLang);
    switchLanguage(savedLang);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initDesktopMenu();
    initWhatsAppButton();
    initLanguageToggle();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll-based animations (optional enhancement)
const scrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-slow-zoom');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10);

// Only add parallax if user prefers motion
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.addEventListener('scroll', scrollHandler);
}
