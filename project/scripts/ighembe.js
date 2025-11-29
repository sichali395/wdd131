// Ighembe Education Zone - Main JavaScript File
// Author: Laston James Sichali

// School data array
const schoolsData = [
    {
        name: "Changwina Primary School",
        headteacher: "Wilson Mwangama",
        students: 380,
        teachers: 12,
        established: 1985,
        location: "Changwina Village"
    },
    {
        name: "Chikutu Primary School",
        headteacher: "Oscar Chiona",
        students: 420,
        teachers: 14,
        established: 1978,
        location: "Chikutu Village"
    },
    {
        name: "Chisi Primary School",
        headteacher: "Henry Kaonga",
        students: 350,
        teachers: 11,
        established: 1982,
        location: "Chisi Village"
    },
    {
        name: "Ighembe Primary School",
        headteacher: "Kilion Khumbanyiwa",
        students: 450,
        teachers: 15,
        established: 1975,
        location: "Ighembe Centre"
    },
    {
        name: "Kafulu Primary School",
        headteacher: "George Ng'ambi",
        students: 320,
        teachers: 10,
        established: 1988,
        location: "Kafulu Village"
    },
    {
        name: "Kakolya Primary School",
        headteacher: "Dennis Mwaipopo",
        students: 280,
        teachers: 9,
        established: 1990,
        location: "Kakolya Village"
    },
    {
        name: "Kaporo Primary School",
        headteacher: "John Chirwa",
        students: 390,
        teachers: 13,
        established: 1980,
        location: "Kaporo Village"
    },
    {
        name: "Kasantha Primary School",
        headteacher: "Dennis Mbukwa",
        students: 410,
        teachers: 14,
        established: 1976,
        location: "Kasantha Village"
    },
    {
        name: "Kaundi Primary School",
        headteacher: "Nkhuluta Mhango",
        students: 340,
        teachers: 11,
        established: 1983,
        location: "Kaundi Village"
    },
    {
        name: "Kibwe Primary School",
        headteacher: "Benjamin Kaponda",
        students: 370,
        teachers: 12,
        established: 1981,
        location: "Kibwe Village"
    },
    {
        name: "Lutengano Primary School",
        headteacher: "Chimwemwe Shora",
        students: 330,
        teachers: 10,
        established: 1987,
        location: "Lutengano Village"
    },
    {
        name: "Ndemange Primary School",
        headteacher: "Enock Mwailubi",
        students: 290,
        teachers: 9,
        established: 1992,
        location: "Ndemange Village"
    },
    {
        name: "Ndindo Primary School",
        headteacher: "Chastice Mwambila",
        students: 360,
        teachers: 12,
        established: 1984,
        location: "Ndindo Village"
    },
    {
        name: "Ngaramu Primary School",
        headteacher: "Harriet Nyirenda",
        students: 400,
        teachers: 13,
        established: 1979,
        location: "Ngaramu Village"
    },
    {
        name: "Sherasongwe Primary School",
        headteacher: "Douglass Chiona",
        students: 380,
        teachers: 12,
        established: 1986,
        location: "Sherasongwe Village"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main Application Initialization
function initializeApp() {
    initializeNavigation();
    initializeEventListeners();
    loadDynamicContent();
    initializeLocalStorage();
    initializeLazyLoading();
}

// Navigation Management
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    });
}

// Event Listeners
function initializeEventListeners() {
    // Home page events
    const exploreBtn = document.getElementById('exploreResources');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'resources.html';
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Resource page events
    initializeResourceFilters();
    initializeResourceSearch();
    
    // Scholarships page events
    initializeScholarshipFilters();
    initializeEligibilityCalculator();
    initializeApplicationTracker();
}

// Local Storage Management
function initializeLocalStorage() {
    // Initialize newsletter subscriptions if not exists
    if (!localStorage.getItem('newsletterSubscriptions')) {
        localStorage.setItem('newsletterSubscriptions', JSON.stringify([]));
    }
    
    // Initialize scholarship applications if not exists
    if (!localStorage.getItem('scholarshipApplications')) {
        localStorage.setItem('scholarshipApplications', JSON.stringify([]));
    }
    
    // Initialize saved resources if not exists
    if (!localStorage.getItem('savedResources')) {
        localStorage.setItem('savedResources', JSON.stringify([]));
    }
}

// Lazy Loading Implementation
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
}

// Dynamic Content Loading
function loadDynamicContent() {
    loadNewsUpdates();
    loadResources();
    loadSchools();
    loadScholarships();
    loadApplicationTracker();
}

// Home Page - News Updates
function loadNewsUpdates() {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;
    
    const newsData = [
        {
            title: "New Mathematics Resources Available",
            date: "2024-01-15",
            content: "We've added new mathematics workbooks and online resources for primary and secondary students.",
            category: "resources"
        },
        {
            title: "Community Education Meeting",
            date: "2024-01-20",
            content: "Join us for our monthly community education meeting on January 25th at the Community Center.",
            category: "events"
        },
        {
            title: "Scholarship Application Deadline",
            date: "2024-02-01",
            content: "The Ighembe Excellence Scholarship application deadline is February 15th, 2024.",
            category: "scholarships"
        }
    ];
    
    const newsHTML = newsData.map(item => `
        <article class="resource-card fade-in" data-category="${item.category}">
            <h3>${item.title}</h3>
            <p class="news-date"><strong>Date:</strong> ${formatDate(item.date)}</p>
            <p>${item.content}</p>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
}

// Resources Page Functionality
function initializeResourceFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter resources
            const category = this.dataset.category;
            filterResources(category);
        });
    });
}

function filterResources(category) {
    const resources = document.querySelectorAll('.resource-card');
    
    resources.forEach(resource => {
        if (category === 'all' || resource.dataset.category === category) {
            resource.style.display = 'block';
            setTimeout(() => resource.classList.add('fade-in'), 50);
        } else {
            resource.style.display = 'none';
            resource.classList.remove('fade-in');
        }
    });
}

function loadResources() {
    const resourcesGrid = document.getElementById('resourcesGrid');
    if (!resourcesGrid) return;
    
    const resourcesData = [
        {
            title: "Mathematics Worksheets",
            description: "Printable worksheets for Standards 1-8 covering basic arithmetic to algebra.",
            category: "students",
            type: "worksheets",
            grade: "Std 1-8"
        },
        {
            title: "Science Experiment Guides",
            description: "Step-by-step guides for hands-on science experiments using local materials.",
            category: "teachers",
            type: "lesson-plans",
            grade: "Std 4-8"
        },
        {
            title: "School Management Toolkit",
            description: "Resources for headteachers on school administration, budgeting, and staff management.",
            category: "headteachers",
            type: "guides",
            grade: "Administration"
        },
        {
            title: "Parent-Teacher Communication Guide",
            description: "Resources to help parents effectively communicate with teachers and support their children's learning.",
            category: "parents",
            type: "guides",
            grade: "All"
        }
    ];
    
    const resourcesHTML = resourcesData.map(resource => `
        <article class="resource-card fade-in" data-category="${resource.category}" data-type="${resource.type}" data-grade="${resource.grade}">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <div class="resource-meta">
                <span class="resource-category">${resource.category}</span>
                <span class="resource-grade">${resource.grade}</span>
            </div>
            <button type="button" class="save-resource-btn" onclick="saveResource('${resource.title}')">Save Resource</button>
        </article>
    `).join('');
    
    resourcesGrid.innerHTML = resourcesHTML;
}

function loadSchools() {
    const schoolsGrid = document.getElementById('schoolsGrid');
    if (!schoolsGrid) return;
    
    const schoolsHTML = schoolsData.map(school => `
        <article class="school-card fade-in">
            <h3>${school.name}</h3>
            <p class="headteacher">Headteacher: ${school.headteacher}</p>
            <p><strong>Location:</strong> ${school.location}</p>
            <p><strong>Established:</strong> ${school.established}</p>
            <div class="school-meta">
                <div class="meta-item">
                    <div class="meta-value">${school.students}</div>
                    <div class="meta-label">Students</div>
                </div>
                <div class="meta-item">
                    <div class="meta-value">${school.teachers}</div>
                    <div class="meta-label">Teachers</div>
                </div>
                <div class="meta-item">
                    <div class="meta-value">${Math.round(school.students/school.teachers)}</div>
                    <div class="meta-label">Ratio</div>
                </div>
            </div>
        </article>
    `).join('');
    
    schoolsGrid.innerHTML = schoolsHTML;
}

function initializeResourceSearch() {
    const searchInput = document.getElementById('resourceSearch');
    const searchBtn = document.getElementById('searchBtn');
    const resultsContainer = document.getElementById('searchResults');
    
    if (!searchInput || !searchBtn || !resultsContainer) return;
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            resultsContainer.innerHTML = '<p>Please enter at least 2 characters to search.</p>';
            return;
        }
        
        const resources = document.querySelectorAll('.resource-card');
        let foundResults = false;
        
        resultsContainer.innerHTML = '';
        
        resources.forEach(resource => {
            const title = resource.querySelector('h3').textContent.toLowerCase();
            const description = resource.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(query) || description.includes(query)) {
                const clone = resource.cloneNode(true);
                resultsContainer.appendChild(clone);
                foundResults = true;
            }
        });
        
        if (!foundResults) {
            resultsContainer.innerHTML = '<p>No resources found matching your search.</p>';
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Scholarships Page Functionality
function initializeScholarshipFilters() {
    const filterBtns = document.querySelectorAll('.scholarship-filters .filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const type = this.dataset.type;
            filterScholarships(type);
        });
    });
}

function filterScholarships(type) {
    const scholarships = document.querySelectorAll('.scholarship-card');
    
    scholarships.forEach(scholarship => {
        if (type === 'all' || scholarship.classList.contains(type)) {
            scholarship.style.display = 'block';
            setTimeout(() => scholarship.classList.add('fade-in'), 50);
        } else {
            scholarship.style.display = 'none';
            scholarship.classList.remove('fade-in');
        }
    });
}

function loadScholarships() {
    const scholarshipsContainer = document.getElementById('scholarshipsContainer');
    if (!scholarshipsContainer) return;
    
    const scholarshipsData = [
        {
            title: "Ighembe Excellence Scholarship",
            amount: "TZS 500,000",
            deadline: "2024-02-15",
            type: "merit",
            eligibility: "Secondary students with GPA 3.5+",
            description: "Awarded to outstanding students demonstrating academic excellence and community involvement."
        },
        {
            title: "Community Support Grant",
            amount: "TZS 300,000",
            deadline: "2024-03-01",
            type: "need",
            eligibility: "Students from low-income families",
            description: "Financial support for students facing economic challenges to continue their education."
        }
    ];
    
    const scholarshipsHTML = scholarshipsData.map(scholarship => `
        <article class="scholarship-card fade-in ${scholarship.type}">
            <h3>${scholarship.title}</h3>
            <p><strong>Amount:</strong> ${scholarship.amount}</p>
            <p><strong>Deadline:</strong> ${formatDate(scholarship.deadline)}</p>
            <p><strong>Eligibility:</strong> ${scholarship.eligibility}</p>
            <p>${scholarship.description}</p>
            <button type="button" class="save-scholarship-btn" onclick="saveScholarship('${scholarship.title}')">Save Scholarship</button>
        </article>
    `).join('');
    
    scholarshipsContainer.innerHTML = scholarshipsHTML;
}

function initializeEligibilityCalculator() {
    const calculatorForm = document.getElementById('eligibilityForm');
    if (!calculatorForm) return;
    
    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateEligibility();
    });
}

function calculateEligibility() {
    const school = document.getElementById('school').value;
    const gradeLevel = document.getElementById('gradeLevel').value;
    const performance = document.getElementById('performance').value;
    const financialNeed = document.getElementById('financialNeed').value;
    
    let eligibilityScore = 0;
    let recommendations = [];
    
    // Calculate score based on inputs
    if (gradeLevel === 'std7' || gradeLevel === 'std8') eligibilityScore += 30;
    else if (gradeLevel === 'std5' || gradeLevel === 'std6') eligibilityScore += 20;
    else eligibilityScore += 10;
    
    if (performance === 'excellent') eligibilityScore += 40;
    else if (performance === 'very-good') eligibilityScore += 25;
    else if (performance === 'good') eligibilityScore += 15;
    else eligibilityScore += 5;
    
    if (financialNeed === 'high') eligibilityScore += 30;
    else if (financialNeed === 'medium') eligibilityScore += 20;
    else eligibilityScore += 10;
    
    // Generate recommendations based on score
    if (eligibilityScore >= 80) {
        recommendations.push("You're highly eligible for most merit-based scholarships");
        recommendations.push("Apply for the Ighembe Excellence Scholarship");
    } else if (eligibilityScore >= 60) {
        recommendations.push("Good eligibility for need-based scholarships");
        recommendations.push("Apply for the Community Support Grant");
    } else {
        recommendations.push("Focus on local and community-based opportunities");
        recommendations.push("Consider vocational training scholarships");
    }
    
    // School-specific recommendations
    if (school) {
        recommendations.push(`Continue working hard at ${getSchoolName(school)} Primary School`);
    }
    
    // Display results using template literals
    const resultsContainer = document.getElementById('calculatorResults');
    const recommendationsHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    
    resultsContainer.innerHTML = `
        <div class="resource-card">
            <h3>Eligibility Results</h3>
            <p><strong>Your Score:</strong> ${eligibilityScore}/100</p>
            <p><strong>Recommendations:</strong></p>
            <ul>${recommendationsHTML}</ul>
            <p class="encouragement">Remember to discuss scholarship opportunities with your headteacher and parents!</p>
        </div>
    `;
}

function initializeApplicationTracker() {
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addApplicationToTracker();
        });
    }
}

function addApplicationToTracker() {
    const scholarshipName = document.getElementById('scholarshipName').value;
    const schoolName = document.getElementById('schoolName').value;
    const deadline = document.getElementById('deadline').value;
    const status = document.getElementById('status').value;
    
    const application = {
        id: Date.now(),
        scholarshipName,
        schoolName,
        deadline,
        status,
        dateAdded: new Date().toISOString()
    };
    
    // Save to localStorage
    const applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
    applications.push(application);
    localStorage.setItem('scholarshipApplications', JSON.stringify(applications));
    
    // Reset form
    document.getElementById('applicationForm').reset();
    
    // Reload tracker
    loadApplicationTracker();
}

function loadApplicationTracker() {
    const trackerList = document.getElementById('trackerList');
    if (!trackerList) return;
    
    const applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
    
    if (applications.length === 0) {
        trackerList.innerHTML = '<p>No scholarship applications tracked yet.</p>';
        return;
    }
    
    const applicationsHTML = applications.map(app => `
        <div class="application-item fade-in" data-status="${app.status}">
            <div>
                <h4>${app.scholarshipName}</h4>
                <p><strong>School:</strong> ${getSchoolName(app.schoolName)}</p>
                <p><strong>Deadline:</strong> ${formatDate(app.deadline)}</p>
                <p><strong>Status:</strong> ${formatStatus(app.status)}</p>
            </div>
            <button type="button" onclick="removeApplication(${app.id})" class="remove-btn">Remove</button>
        </div>
    `).join('');
    
    trackerList.innerHTML = applicationsHTML;
}

function removeApplication(applicationId) {
    let applications = JSON.parse(localStorage.getItem('scholarshipApplications')) || [];
    applications = applications.filter(app => app.id !== applicationId);
    localStorage.setItem('scholarshipApplications', JSON.stringify(applications));
    loadApplicationTracker();
}

// Form Handlers
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
    subscriptions.push(formData);
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
    
    // Show success message
    alert('Thank you for subscribing to our newsletter! You will receive updates on educational opportunities in Ighembe.');
    
    // Reset form
    e.target.reset();
}

// Utility Functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatStatus(status) {
    const statusMap = {
        'planning': 'Planning to Apply',
        'in-progress': 'In Progress',
        'submitted': 'Submitted',
        'awarded': 'Awarded',
        'rejected': 'Not Awarded'
    };
    return statusMap[status] || status;
}

function getSchoolName(schoolCode) {
    const schoolMap = {
        'changwina': 'Changwina',
        'chikutu': 'Chikutu',
        'chisi': 'Chisi',
        'ighembe': 'Ighembe',
        'kafulu': 'Kafulu',
        'kakolya': 'Kakolya',
        'kaporo': 'Kaporo',
        'kasantha': 'Kasantha',
        'kaundi': 'Kaundi',
        'kibwe': 'Kibwe',
        'lutengano': 'Lutengano',
        'ndemange': 'Ndemange',
        'ndindo': 'Ndindo',
        'ngaramu': 'Ngaramu',
        'sherasongwe': 'Sherasongwe'
    };
    return schoolMap[schoolCode] || schoolCode;
}

function saveResource(resourceTitle) {
    let savedResources = JSON.parse(localStorage.getItem('savedResources')) || [];
    
    if (!savedResources.includes(resourceTitle)) {
        savedResources.push(resourceTitle);
        localStorage.setItem('savedResources', JSON.stringify(savedResources));
        alert(`"${resourceTitle}" has been saved to your resources!`);
    } else {
        alert('This resource is already saved!');
    }
}

function saveScholarship(scholarshipTitle) {
    let savedScholarships = JSON.parse(localStorage.getItem('savedScholarships')) || [];
    
    if (!savedScholarships.includes(scholarshipTitle)) {
        savedScholarships.push(scholarshipTitle);
        localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
        alert(`"${scholarshipTitle}" has been saved to your scholarships!`);
    } else {
        alert('This scholarship is already saved!');
    }
}

// Export functions for global access
window.saveResource = saveResource;
window.saveScholarship = saveScholarship;
window.removeApplication = removeApplication;

// References Page Functionality
function initializeReferencesPage() {
    // Add any references-specific functionality here
    console.log('References page initialized');
    
    // Example: Add click tracking for reference items
    const referenceItems = document.querySelectorAll('.references-list li');
    referenceItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            console.log(`Reference item ${index + 1} clicked`);
        });
    });
}

// Update the initializeApp function to include references page
function initializeApp() {
    initializeNavigation();
    initializeEventListeners();
    loadDynamicContent();
    initializeLocalStorage();
    initializeLazyLoading();
    
    // Initialize references page if we're on that page
    if (window.location.pathname.includes('references.html') || 
        document.querySelector('.references-page')) {
        initializeReferencesPage();
    }
}

// Add reference tracking to localStorage
function trackReferenceView(referenceType) {
    const referenceStats = JSON.parse(localStorage.getItem('referenceStats')) || {};
    referenceStats[referenceType] = (referenceStats[referenceType] || 0) + 1;
    localStorage.setItem('referenceStats', JSON.stringify(referenceStats));
}

// Utility function to get reference statistics
function getReferenceStatistics() {
    return JSON.parse(localStorage.getItem('referenceStats')) || {};
}