// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temple objects
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x225/rome-italy-temple-lds-1079992-wallpaper.jpg"
  },
  {
    templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29856,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-philippines-temple-lds-852643-wallpaper.jpg"
  }
];

// DOM elements
const templeGallery = document.getElementById('templeGallery');
const navLinks = document.querySelectorAll('nav a');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Function to create temple card
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';
  
  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-img" loading="lazy">
    <div class="temple-info">
      <div class="temple-name">${temple.templeName}</div>
      <div class="temple-detail"><strong>Location:</strong> ${temple.location}</div>
      <div class="temple-detail"><strong>Dedicated:</strong> ${temple.dedicated}</div>
      <div class="temple-detail"><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</div>
    </div>
  `;
  
  return card;
}

// Function to display temples
function displayTemples(templesArray) {
  templeGallery.innerHTML = '';
  templesArray.forEach(temple => {
    const card = createTempleCard(temple);
    templeGallery.appendChild(card);
  });
}

// Filter functions
function filterOldTemples() {
  return temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
}

function filterNewTemples() {
  return temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  });
}

function filterLargeTemples() {
  return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.area < 10000);
}

// Navigation event handler
function handleNavClick(e) {
  e.preventDefault();
  const filter = this.getAttribute('data-filter');
  
  // Update active nav link
  navLinks.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
  
  // Filter temples based on selection
  switch(filter) {
    case 'old':
      displayTemples(filterOldTemples());
      break;
    case 'new':
      displayTemples(filterNewTemples());
      break;
    case 'large':
      displayTemples(filterLargeTemples());
      break;
    case 'small':
      displayTemples(filterSmallTemples());
      break;
    case 'home':
    default:
      displayTemples(temples);
      break;
  }
}

// Initialize the page
function init() {
  // Display all temples initially
  displayTemples(temples);
  
  // Add event listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Hamburger menu functionality
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  // Update footer information
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);