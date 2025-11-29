// Product data array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    // Add product options to select element
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
        productSelect.appendChild(option);
    });
    
    // Set today's date as default for installation date
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('installationDate').value = formattedDate;
    
    // Form validation
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Check if product is selected
        const productSelect = document.getElementById('productName');
        if (!productSelect.value) {
            isValid = false;
            highlightError(productSelect);
        } else {
            removeHighlight(productSelect);
        }
        
        // Check if rating is selected
        const ratingSelected = document.querySelector('input[name="rating"]:checked');
        if (!ratingSelected) {
            isValid = false;
            const ratingContainer = document.querySelector('.rating-container');
            highlightError(ratingContainer);
        } else {
            const ratingContainer = document.querySelector('.rating-container');
            removeHighlight(ratingContainer);
        }
        
        // Check if installation date is provided
        const installationDate = document.getElementById('installationDate');
        if (!installationDate.value) {
            isValid = false;
            highlightError(installationDate);
        } else {
            removeHighlight(installationDate);
        }
        
        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all required fields marked with *.');
        }
    });
    
    function highlightError(element) {
        element.style.border = '2px solid #e74c3c';
        element.style.boxShadow = '0 0 5px rgba(231, 76, 60, 0.5)';
    }
    
    function removeHighlight(element) {
        element.style.border = '';
        element.style.boxShadow = '';
    }
});