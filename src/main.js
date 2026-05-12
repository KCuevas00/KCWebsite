// ============================================================
// LANGUAGE SYSTEM - Must run BEFORE DOM is visible
// ============================================================

const translations = {
    en: {
        // Navigation
        nav_home: 'HOME',
        nav_work: 'WORK',
        nav_about: 'ABOUT',
        nav_contact: 'CONTACT',
        nav_menu: 'Menu',
        nav_close: 'Close menu',

        // Hero - Index
        hero_title: 'Simple websites for Illinois small businesses.',
        hero_name: 'Kevin Cuevas',
        hero_education: 'Northern Illinois University — Computer Science',

        // Hero - Work
        hero_work_title: 'Featured Work',
        hero_work_by: 'by Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'About Kevin',
        hero_about_desc: 'Computer Science student at Northern Illinois University creating websites for local businesses across Illinois.',

        // Hero - Contact
        hero_contact_title: 'Get in Touch',
        hero_contact_desc: 'Need a website for your Illinois business? I can help you get online quickly and affordably.',

        // Featured Work Section
        featured_work_title: 'Selected Work',
        featured_work_desc: 'I build clean, functional websites that help local businesses get found online.',

        // Project 1 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Landscaping Company',
        project_mg_desc: 'Professional landscaping website showcasing services, portfolio gallery, and customer testimonials to attract local residential and commercial clients.',
        project_mg_view: 'View Project',

        // Project 2 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Restaurant & Business',
        project_taag_desc: 'Modern restaurant website featuring menu displays, online reservations, and event promotion to enhance the dining experience.',
        project_taag_view: 'View Project',

        // Project 3 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Hispanic-Owned Business',
        project_unidos_desc: 'Culturally-responsive website serving the Hispanic community with bilingual content and authentic local business representation.',
        project_unidos_view: 'View Project',

        view_all_work: 'View All Work →',

        // Mobile First Section
        mobile_title: 'Designed for mobile first.',
        mobile_desc: 'Every website is designed with the mobile layout in mind first to ensure a simple and easy experience across all devices.',
        mobile_responsive: 'Responsive Design',
        mobile_touch: 'Touch-Friendly',
        mobile_fast: 'Fast Loading',

        // How I Work + What You Get Section
        how_work_title: 'How I Work + What You Get',
        how_work_subtitle: 'A simple process, clear deliverables',

        how_work_section: 'How I Work',
        step1_title: 'Send me your info',
        step1_desc: 'You send your contact details, business information, photos you want on the site, and any social media links.',
        step2_title: 'Design & Build',
        step2_desc: 'I\'ll create a clean, modern website tailored to your business',
        step3_title: 'Launch',
        step3_desc: 'I\'ll send you previews of the site. Once everything looks good, we set up your custom domain and publish it live.',

        what_get_section: 'What You Get',
        deliverable1: 'Desktop website designed for your business',
        deliverable2: 'Mobile-friendly responsive design',
        deliverable3: 'Contact forms so customers can reach you easily',
        deliverable4: 'Click-to-call phone and WhatsApp integration',
        deliverable5: 'Basic SEO setup for visibility',
        deliverable6: 'Hosting setup guidance',
        deliverable7: 'Custom domain setup guidance (yourbusiness.com)',
        deliverable8: 'Fast loading performance',
        deliverable9: 'Post-launch support and small edits',

        // About Preview Section
        about_preview_title: 'About Me',
        about_preview_p1: "I'm currently pursuing my Master's in Computer Science at Northern Illinois University while building websites for local businesses in my community.",
        about_preview_p2: 'I started doing this as a way to keep learning and growing as a developer, but it quickly turned into something I genuinely enjoy. I love helping small businesses create a professional online presence that still feels personal and authentic.',
        about_preview_p3: "I learn something new with every project. You'll probably see my style evolve as I grow.",
        learn_more: 'Learn More →',

        // Footer CTA
        footer_cta_title: "Let's build something that feels real.",
        footer_cta_desc: 'Ready to establish your professional online presence? Let\'s discuss how we can create a website that represents your business with authenticity and care.',
        start_project: 'Start a Project',

        // Contact Info
        contact_whatsapp_label: 'WhatsApp',
        contact_email_label: 'Email',
        contact_facebook_label: 'Facebook',

        // Footer
        footer_name: 'Kevin Cuevas',
        footer_desc: 'Computer Science student at Northern Illinois University creating websites for local businesses.',
        footer_contact_title: 'Contact',
        footer_email_label: 'Email:',
        footer_phone_label: 'Phone:',
        footer_whatsapp_label: 'WhatsApp:',
        footer_facebook_label: 'Facebook:',
        footer_nav_title: 'Navigation',
        footer_copyright: '© 2026 Kevin Cuevas. All rights reserved.',

        // WhatsApp Float
        whatsapp_float_label: 'Contact on WhatsApp',

        // Work Page
        work_mg_tag: 'Landscaping',
        work_mg_feature1: 'Mobile-responsive design',
        work_mg_feature2: 'Service showcase',
        work_mg_feature3: 'Customer testimonials',

        work_taag_tag: 'Restaurant',
        work_taag_feature1: 'Online reservations',
        work_taag_feature2: 'Digital menu',
        work_taag_feature3: 'Event promotion',

        work_unidos_tag: 'Community Business',
        work_unidos_feature1: 'Bilingual support',
        work_unidos_feature2: 'Community focus',
        work_unidos_feature3: 'Cultural authenticity',

        work_cta_title: 'Ready to start your project?',
        work_cta_desc: "Let's discuss how we can create a professional online presence for your business.",
        get_in_touch: 'Get in Touch',

        // About Page
        about_title: 'About Me',
        about_p1: "I'm a Computer Science student at Northern Illinois University. I build websites for local businesses because I understand what small businesses need to get found online.",
        about_p2: "I focus on simple, clean designs that work well and don't cost a fortune. No complicated setups or confusing tech talk - just straightforward websites that help your business grow.",
        contact_me: 'Contact Me →',

        education_title: 'My Education',
        education_desc: "I'm studying Computer Science at NIU and focusing on web development. My classes give me the technical skills to build websites that actually work well for businesses.",
        education_degree: 'Computer Science, B.S.',
        education_focus: 'Web Development & Design',
        education_grad: 'Expected Graduation: 2027',

        philosophy_title: 'How I Work',
        philosophy_1_title: 'Customer-Focused',
        philosophy_1_desc: 'I build websites that work for your customers - easy to use and find what they need.',
        philosophy_2_title: 'Honest & Reliable',
        philosophy_2_desc: 'I build websites that actually work and show what your business is really about.',
        philosophy_3_title: 'Mobile-First',
        philosophy_3_desc: "I make sure your website works great on phones since that's where most customers will find you.",

        skills_title: 'Technical Skills',
        skills_frontend: 'Frontend Development',
        skill_html: 'HTML5 & Semantic Markup',
        skill_css: 'CSS3 & Tailwind CSS',
        skill_js: 'JavaScript & Interactivity',
        skill_responsive: 'Responsive Design',
        skills_design: 'Design & UX',
        skill_ux: 'User Experience Design',
        skill_accessibility: 'Accessibility (WCAG)',
        skill_performance: 'Performance Optimization',
        skill_seo: 'SEO Best Practices',

        about_cta_title: "Let's work together",
        about_cta_desc: "I'm passionate about helping local businesses establish their online presence. Let's discuss how we can create a website that represents your business with authenticity and professionalism.",

        // Contact Page
        form_title: 'Send a Message',
        form_name_label: 'Your Name *',
        form_name_placeholder: 'John Smith',
        form_email_label: 'Email Address *',
        form_email_placeholder: 'john@example.com',
        form_business_label: 'Business Name',
        form_business_placeholder: "Smith's Landscaping",
        form_phone_label: 'Phone Number',
        form_phone_placeholder: '(815) 503-2302',
        form_message_label: 'Project Details *',
        form_message_placeholder: 'Tell me about your business and what kind of website you\'re looking for...',
        form_submit: 'Send Message',
        form_success: "Thank you for your message! I'll get back to you within 24 hours.",

        contact_other_title: 'Other Ways to Connect',
        contact_email_best: 'Best for detailed project discussions',
        contact_whatsapp_quick: 'Quick questions and project updates',
        contact_facebook_follow: 'Follow my work and updates',

        response_time_title: 'Response Time',
        response_time_desc: 'I typically respond to messages within 24 hours. For urgent project inquiries, WhatsApp is the fastest way to reach me.',

        service_area_title: 'Service Area',
        service_area_desc: 'I work with businesses throughout Illinois, with special focus on the Northern Illinois region including DeKalb, Sycamore, and surrounding communities.',
    },
    es: {
        // Navigation
        nav_home: 'INICIO',
        nav_work: 'TRABAJO',
        nav_about: 'ACERCA DE',
        nav_contact: 'CONTACTO',
        nav_menu: 'Menú',
        nav_close: 'Cerrar menú',

        // Hero - Index
        hero_title: 'Sitios web simples para pequeñas empresas de Illinois.',
        hero_name: 'Kevin Cuevas',
        hero_education: 'Universidad Northern Illinois — Ciencias de la Computación',

        // Hero - Work
        hero_work_title: 'Trabajo Destacado',
        hero_work_by: 'por Kevin Cuevas.',

        // Hero - About
        hero_about_title: 'Acerca de Kevin',
        hero_about_desc: 'Estudiante de Ciencias de la Computación en Northern Illinois University creando sitios web para empresas locales en Illinois.',

        // Hero - Contact
        hero_contact_title: 'Contacto',
        hero_contact_desc: '¿Necesita un sitio web para su negocio en Illinois? Puedo ayudarle a estar en línea de manera rápida y asequible.',

        // Featured Work Section
        featured_work_title: 'Trabajo Seleccionado',
        featured_work_desc: 'Construyo sitios web limpios y funcionales que ayudan a las pequeñas empresas a ser encontradas en línea.',

        // Project 1 - M&G Landscaping
        project_mg_title: 'M&G Landscaping',
        project_mg_category: 'Empresa de Jardinería',
        project_mg_desc: 'Sitio web profesional de jardinería que muestra servicios, galería de proyectos y testimonios de clientes para atraer clientes residenciales y comerciales locales.',
        project_mg_view: 'Ver Proyecto',

        // Project 2 - TAAG
        project_taag_title: 'TAAG Quality Construction Inc.',
        project_taag_category: 'Restaurante y Negocio',
        project_taag_desc: 'Sitio web moderno para restaurante con menús en línea, reservas y promoción de eventos para mejorar la experiencia de comida.',
        project_taag_view: 'Ver Proyecto',

        // Project 3 - Unidos Rocha
        project_unidos_title: 'Unidos Rocha',
        project_unidos_category: 'Negocio Hispano',
        project_unidos_desc: 'Sitio web culturalmente responsivo que sirve a la comunidad hispana con contenido bilingüe y representación auténtica de negocios locales.',
        project_unidos_view: 'Ver Proyecto',

        view_all_work: 'Ver Todo el Trabajo →',

        // Mobile First Section
        mobile_title: 'Diseñado para móviles primero.',
        mobile_desc: 'Cada sitio web está diseñado pensando primero en el diseño móvil para garantizar una experiencia simple y fácil en todos los dispositivos.',
        mobile_responsive: 'Diseño Responsivo',
        mobile_touch: 'Compatible con Tacto',
        mobile_fast: 'Carga Rápida',

        // How I Work + What You Get Section
        how_work_title: 'Cómo Trabajo + Lo Que Recibes',
        how_work_subtitle: 'Un proceso simple, entregables claros',

        how_work_section: 'Cómo Trabajo',
        step1_title: 'Envíame tu información',
        step1_desc: 'Envías tus datos de contacto, información del negocio, fotos que quieres en el sitio y enlaces de redes sociales.',
        step2_title: 'Diseño y Construcción',
        step2_desc: 'Creo un sitio web limpio y moderno adaptado a tu negocio',
        step3_title: 'Lanzamiento',
        step3_desc: 'Te envío vistas previas del sitio. Una vez que todo se ve bien, configuramos tu dominio personalizado y lo publicamos en vivo.',

        what_get_section: 'Lo Que Recibes',
        deliverable1: 'Sitio web de escritorio diseñado para su negocio',
        deliverable2: 'Diseño responsivo compatible con móviles',
        deliverable3: 'Formularios de contacto para que los clientes puedan comunicarse fácilmente',
        deliverable4: 'Integración de clic para llamar por teléfono y WhatsApp',
        deliverable5: 'Configuración básica de SEO para visibilidad',
        deliverable6: 'Guía de configuración de hosting',
        deliverable7: 'Guía de configuración de dominio personalizado (tubusiness.com)',
        deliverable8: 'Rendimiento de carga rápida',
        deliverable9: 'Soporte y ediciones pequeñas después del lanzamiento',

        // About Preview Section
        about_preview_title: 'Acerca de Mí',
        about_preview_p1: 'Actualmente estoy cursando mi Maestría en Ciencias de la Computación en Northern Illinois University mientras construyo sitios web para empresas locales en mi comunidad.',
        about_preview_p2: 'Empecé a hacer esto como una manera de seguir aprendiendo y creciendo como desarrollador, pero rápidamente se convirtió en algo que disfruto genuinamente. Me encanta ayudar a las pequeñas empresas a crear una presencia profesional en línea que se sienta personal y auténtica.',
        about_preview_p3: 'Aprendo algo nuevo con cada proyecto. Probablemente verá mi estilo evolucionar a medida que crezco.',
        learn_more: 'Conocer Más →',

        // Footer CTA
        footer_cta_title: 'Construyamos algo que se sienta real.',
        footer_cta_desc: '¿Listo para establecer su presencia profesional en línea? Hablemos de cómo podemos crear un sitio web que represente su negocio con autenticidad y cuidado.',
        start_project: 'Comenzar Proyecto',

        // Contact Info
        contact_whatsapp_label: 'WhatsApp',
        contact_email_label: 'Correo',
        contact_facebook_label: 'Facebook',

        // Footer
        footer_name: 'Kevin Cuevas',
        footer_desc: 'Estudiante de Ciencias de la Computación en Northern Illinois University creando sitios web para empresas locales.',
        footer_contact_title: 'Contacto',
        footer_email_label: 'Correo:',
        footer_phone_label: 'Teléfono:',
        footer_whatsapp_label: 'WhatsApp:',
        footer_facebook_label: 'Facebook:',
        footer_nav_title: 'Navegación',
        footer_copyright: '© 2026 Kevin Cuevas. Todos los derechos reservados.',

        // WhatsApp Float
        whatsapp_float_label: 'Contactar por WhatsApp',

        // Work Page
        work_mg_tag: 'Jardinería',
        work_mg_feature1: 'Diseño responsivo móvil',
        work_mg_feature2: 'Exhibición de servicios',
        work_mg_feature3: 'Testimonios de clientes',

        work_taag_tag: 'Restaurante',
        work_taag_feature1: 'Reservas en línea',
        work_taag_feature2: 'Menú digital',
        work_taag_feature3: 'Promoción de eventos',

        work_unidos_tag: 'Negocio Comunitario',
        work_unidos_feature1: 'Soporte bilingüe',
        work_unidos_feature2: 'Enfoque comunitario',
        work_unidos_feature3: 'Autenticidad cultural',

        work_cta_title: '¿Listo para comenzar su proyecto?',
        work_cta_desc: 'Hablemos de cómo podemos crear una presencia profesional en línea para su negocio.',
        get_in_touch: 'Contactar',

        // About Page
        about_title: 'Acerca de Mí',
        about_p1: 'Soy estudiante de Ciencias de la Computación en Northern Illinois University. Construyo sitios web para empresas locales porque entiendo lo que las pequeñas empresas necesitan para ser encontradas en línea.',
        about_p2: 'Me enfoco en diseños simples y limpios que funcionan bien y no cuestan una fortuna. Sin configuraciones complicadas ni charlas técnicas confusas - solo sitios web directos que ayudan a su negocio a crecer.',
        contact_me: 'Contactarme →',

        education_title: 'Mi Educación',
        education_desc: 'Estudio Ciencias de la Computación en NIU y me enfoco en desarrollo web. Mis clases me dan las habilidades técnicas para construir sitios web que realmente funcionan bien para las empresas.',
        education_degree: 'Ciencias de la Computación, Lic.',
        education_focus: 'Desarrollo Web y Diseño',
        education_grad: 'Graduación Esperada: 2027',

        philosophy_title: 'Cómo Trabajo',
        philosophy_1_title: 'Enfoque en el Cliente',
        philosophy_1_desc: 'Construyo sitios web que funcionan para sus clientes - fáciles de usar y encontrar lo que necesitan.',
        philosophy_2_title: 'Honesto y Confiable',
        philosophy_2_desc: 'Construyo sitios web que realmente funcionan y muestran de qué se trata realmente su negocio.',
        philosophy_3_title: 'Primero Móvil',
        philosophy_3_desc: 'Me aseguro de que su sitio web funcione muy bien en teléfonos ya que es donde la mayoría de los clientes lo encontrarán.',

        skills_title: 'Habilidades Técnicas',
        skills_frontend: 'Desarrollo Frontend',
        skill_html: 'HTML5 y Marcado Semántico',
        skill_css: 'CSS3 y Tailwind CSS',
        skill_js: 'JavaScript e Interactividad',
        skill_responsive: 'Diseño Responsivo',
        skills_design: 'Diseño y UX',
        skill_ux: 'Diseño de Experiencia de Usuario',
        skill_accessibility: 'Accesibilidad (WCAG)',
        skill_performance: 'Optimización de Rendimiento',
        skill_seo: 'Mejores Prácticas de SEO',

        about_cta_title: 'Trabajemos juntos',
        about_cta_desc: 'Me apasiona ayudar a las empresas locales a establecer su presencia en línea. Hablemos de cómo podemos crear un sitio web que represente su negocio con autenticidad y profesionalismo.',

        // Contact Page
        form_title: 'Enviar Mensaje',
        form_name_label: 'Su Nombre *',
        form_name_placeholder: 'Juan Pérez',
        form_email_label: 'Correo Electrónico *',
        form_email_placeholder: 'juan@ejemplo.com',
        form_business_label: 'Nombre del Negocio',
        form_business_placeholder: 'Jardinería Pérez',
        form_phone_label: 'Número de Teléfono',
        form_phone_placeholder: '(815) 503-2302',
        form_message_label: 'Detalles del Proyecto *',
        form_message_placeholder: 'Cuénteme sobre su negocio y qué tipo de sitio web está buscando...',
        form_submit: 'Enviar Mensaje',
        form_success: '¡Gracias por su mensaje! Le responderé dentro de 24 horas.',

        contact_other_title: 'Otras Formas de Conectar',
        contact_email_best: 'Mejor para discusiones detalladas de proyectos',
        contact_whatsapp_quick: 'Preguntas rápidas y actualizaciones de proyecto',
        contact_facebook_follow: 'Siga mi trabajo y actualizaciones',

        response_time_title: 'Tiempo de Respuesta',
        response_time_desc: 'Típicamente respondo mensajes dentro de 24 horas. Para consultas urgentes, WhatsApp es la forma más rápida de contactarme.',

        service_area_title: 'Área de Servicio',
        service_area_desc: 'Trabajo con empresas en todo Illinois, con enfoque especial en la región del Norte de Illinois incluyendo DeKalb, Sycamore y comunidades cercanas.',
    }
};

// Get saved language or default to English
function getSavedLanguage() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

// Save language preference
function saveLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Update language toggle button states
function updateLanguageToggleUI(lang) {
    document.querySelectorAll('.language-toggle').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active-language');
            btn.setAttribute('aria-current', 'true');
        } else {
            btn.classList.remove('active-language');
            btn.removeAttribute('aria-current');
        }
    });
}

// Switch language function
function switchLanguage(lang) {
    if (!translations[lang]) return;

    saveLanguage(lang);
    applyTranslations(lang);
    updateLanguageToggleUI(lang);
}

// Initialize language system
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.language-toggle');

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Apply saved language on page load
    const savedLang = getSavedLanguage();
    applyTranslations(savedLang);
    updateLanguageToggleUI(savedLang);
}

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

// EARLY LANGUAGE INITIALIZATION - Run before DOM is visible
(function initLanguageEarly() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const t = translations[savedLang];
    if (!t) return;

    // Apply translations immediately to prevent flash of wrong language
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Set HTML lang attribute
    document.documentElement.lang = savedLang;
})();

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
