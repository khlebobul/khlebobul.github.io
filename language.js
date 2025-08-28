document.addEventListener('DOMContentLoaded', function() {
    // Get language buttons
    const langEn = document.getElementById('lang-en');
    const langRu = document.getElementById('lang-ru');
    
    // Check if language preference exists in localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    // Set initial language
    setLanguage(savedLanguage);
    
    // Add event listeners to language buttons
    langEn.addEventListener('click', function() {
        setLanguage('en');
    });
    
    langRu.addEventListener('click', function() {
        setLanguage('ru');
    });
    
    // Function to set language
    function setLanguage(lang) {
        // Update active button state
        if (lang === 'en') {
            langEn.classList.add('active');
            langRu.classList.remove('active');
        } else {
            langRu.classList.add('active');
            langEn.classList.remove('active');
        }
        
        // Save language preference
        localStorage.setItem('language', lang);
        
        // Update all elements with data-en and data-ru attributes
        const elements = document.querySelectorAll('[data-' + lang + ']');
        elements.forEach(function(element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.getAttribute('data-' + lang);
            } else {
                element.textContent = element.getAttribute('data-' + lang);
            }
        });
        
        // Update project cards if they exist
        if (typeof updateProjectsLanguage === 'function') {
            updateProjectsLanguage(lang);
        }
    }
});
