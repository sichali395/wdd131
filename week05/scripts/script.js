// DOM element references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chapters array from localStorage or empty array
let chaptersArray = getChapterList() || [];

// Populate the list on initial load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Update empty state display
updateEmptyState();

// Button click event listener
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // Make sure the input is not empty
        displayList(input.value.trim()); // Call the function that outputs the submitted chapter
        chaptersArray.push(input.value.trim());  // Add the chapter to the array
        setChapterList(); // Update the localStorage with the new array
        input.value = ''; // Clear the input
        input.focus(); // Set the focus back to the input
        updateEmptyState();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    
    li.textContent = item; // Use the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // Reference CSS rule for styling
    
    li.append(deletebutton);
    list.append(li);
    
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Remove the chapter from array and localStorage
        input.focus(); // Set the focus back to the input
        updateEmptyState();
    });
}

// Function to set localStorage item
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    // Remove the ❌ from the chapter string
    chapter = chapter.slice(0, chapter.length - 1);
    
    // Filter out the chapter to be removed
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    
    // Update localStorage
    setChapterList();
}

// Function to update empty state display
function updateEmptyState() {
    const listItems = document.querySelectorAll('#list li');
    
    // Remove any existing empty state message
    const existingEmptyState = document.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }
    
    // Add empty state message if list is empty
    if (listItems.length === 0) {
        const emptyState = document.createElement('p');
        emptyState.textContent = 'Your list is empty. Add some chapters above!';
        emptyState.classList.add('empty-state');
        list.appendChild(emptyState);
    }
}