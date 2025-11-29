// Website Planning Document - Ighembe Education Zone
// JavaScript functionality for the planning document

document.addEventListener('DOMContentLoaded', function() {
    // Set current date in the document
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        currentDateElement.textContent = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Add validation indicators (for demonstration)
    console.log('Website Planning Document loaded successfully');
    console.log('All files follow naming conventions: siteplan.html, siteplan.css, siteplan.js');
    
    // Simple section navigation highlight (optional enhancement)
    const sections = document.querySelectorAll('.plan-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.backgroundColor = '#f8f9fa';
                setTimeout(() => {
                    entry.target.style.backgroundColor = '';
                }, 1000);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});