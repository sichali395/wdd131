document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const input = document.getElementById('favchap');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('list');
    
    // Function to create a list item
    function createListItem(chapterText) {
        // Create new list item
        const li = document.createElement('li');
        
        // Create span for chapter text
        const chapterSpan = document.createElement('span');
        chapterSpan.textContent = chapterText;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        
        // Append elements to list item
        li.appendChild(chapterSpan);
        li.appendChild(deleteButton);
        
        return li;
    }
    
    // Add all Alma chapters as pre-loaded chapters
    function addPreloadedChapters() {
        const almaChapters = [
            'Alma 1', 'Alma 2', 'Alma 3', 'Alma 4', 'Alma 5',
            'Alma 6', 'Alma 7', 'Alma 8', 'Alma 9', 'Alma 10',
            'Alma 11', 'Alma 12', 'Alma 13', 'Alma 14', 'Alma 15',
            'Alma 16', 'Alma 17', 'Alma 18', 'Alma 19', 'Alma 20',
            'Alma 21', 'Alma 22', 'Alma 23', 'Alma 24', 'Alma 25',
            'Alma 26', 'Alma 27', 'Alma 28', 'Alma 29', 'Alma 30',
            'Alma 31', 'Alma 32', 'Alma 33', 'Alma 34', 'Alma 35',
            'Alma 36', 'Alma 37', 'Alma 38', 'Alma 39', 'Alma 40',
            'Alma 41', 'Alma 42', 'Alma 43', 'Alma 44', 'Alma 45',
            'Alma 46', 'Alma 47', 'Alma 48', 'Alma 49', 'Alma 50',
            'Alma 51', 'Alma 52', 'Alma 53', 'Alma 54', 'Alma 55',
            'Alma 56', 'Alma 57', 'Alma 58', 'Alma 59', 'Alma 60',
            'Alma 61', 'Alma 62', 'Alma 63'
        ];
        
        // Add each Alma chapter to the list
        almaChapters.forEach(chapter => {
            const li = createListItem(chapter);
            list.appendChild(li);
        });
    }
    
    // Initialize with pre-loaded chapters
    addPreloadedChapters();
    
    // Add event listener for the Add Chapter button
    addButton.addEventListener('click', function() {
        // Check if input is not blank
        if (input.value.trim() !== '') {
            // Create new list item
            const li = createListItem(input.value.trim());
            
            // Append list item to the list
            list.appendChild(li);
            
            // Clear input field
            input.value = '';
        }
        
        // Focus on input field
        input.focus();
    });
    
    // Add event listener for the list (event delegation for delete buttons)
    list.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            // Remove the parent li element
            e.target.parentElement.remove();
            
            // Focus on input field
            input.focus();
        }
    });
    
    // Allow adding chapters by pressing Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});