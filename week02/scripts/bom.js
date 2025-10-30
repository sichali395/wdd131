// Declare variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#chapterList');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create a li element
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        
        // Populate the li element's textContent with the input value
        li.textContent = input.value;
        
        // Populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        
        // Set aria-label for accessibility
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        
        // Add class for styling
        deleteButton.classList.add('delete-btn');
        
        // Append the delete button to the li element
        li.append(deleteButton);
        
        // Append the li element to the unordered list
        list.append(li);
        
        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            checkEmptyList();
        });
        
        // Clear the input field
        input.value = '';
        
        // Focus back to the input field
        input.focus();
        
        // Remove empty message if it exists
        const emptyMessage = document.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.remove();
        }
    } else {
        // If input is blank, focus back to input field
        input.focus();
    }
});

// Function to check if the list is empty and show a message
function checkEmptyList() {
    if (list.children.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No favorite chapters added yet.';
        emptyMessage.classList.add('empty-message');
        list.append(emptyMessage);
    }
}

// Add event listener for Enter key in input field
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        button.click();
    }
});

// Initialize the empty list message
checkEmptyList();