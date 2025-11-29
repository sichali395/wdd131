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
    
    // Clear any existing options except the first placeholder
    while (productSelect.children.length > 1) {
        productSelect.removeChild(productSelect.lastChild);
    }
    
    // Add product options to select element
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1) + ` (${product.averagerating}★)`;
        productSelect.appendChild(option);
    });
    
    // Set today's date as default for installation date
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const installationDateInput = document.getElementById('installationDate');
    installationDateInput.value = formattedDate;
    installationDateInput.max = formattedDate;
    
    // Form validation
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const errorMessages = [];
        
        // Check if product is selected
        const productSelect = document.getElementById('productName');
        if (!productSelect.value) {
            isValid = false;
            highlightError(productSelect);
            errorMessages.push('Please select a product');
        } else {
            removeHighlight(productSelect);
        }
        
        // Check if rating is selected
        const ratingSelected = document.querySelector('input[name="rating"]:checked');
        if (!ratingSelected) {
            isValid = false;
            const ratingContainer = document.querySelector('.rating-container');
            highlightError(ratingContainer);
            errorMessages.push('Please select an overall rating');
        } else {
            const ratingContainer = document.querySelector('.rating-container');
            removeHighlight(ratingContainer);
        }
        
        // Check if installation date is provided and valid
        const installationDate = document.getElementById('installationDate');
        if (!installationDate.value) {
            isValid = false;
            highlightError(installationDate);
            errorMessages.push('Please select the installation date');
        } else if (new Date(installationDate.value) > today) {
            isValid = false;
            highlightError(installationDate);
            errorMessages.push('Installation date cannot be in the future');
        } else {
            removeHighlight(installationDate);
        }
        
        if (!isValid) {
            event.preventDefault();
            const errorMessage = errorMessages.join('\n• ');
            alert('Please correct the following errors:\n\n• ' + errorMessage);
        }
    });
    
    function highlightError(element) {
        element.classList.add('error');
    }
    
    function removeHighlight(element) {
        element.classList.remove('error');
    }
});