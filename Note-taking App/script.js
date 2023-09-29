// Define variables
const notesList = document.getElementById('notes-list');
const noteText = document.getElementById('note-text');
const saveButton = document.getElementById('save-button');
const deleteButton = document.getElementById('delete-button');

// Initialize an empty array to store notes
let notes = [];

// Function to display notes in the list
function displayNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = note;
        listItem.addEventListener('click', () => {
            noteText.value = note;
            noteText.dataset.index = index;
        });
        notesList.appendChild(listItem);
    });
}

// Function to add a new note
function addNote() {
    const text = noteText.value.trim();
    if (text !== '') {
        notes.push(text);
        noteText.value = '';
        displayNotes();
    }
}

// Function to edit an existing note
function editNote() {
    const index = noteText.dataset.index;
    if (index !== undefined) {
        const text = noteText.value.trim();
        if (text !== '') {
            notes[index] = text;
            noteText.value = '';
            delete noteText.dataset.index;
            displayNotes();
        }
    }
}

// Function to delete a note
function deleteNote() {
    const index = noteText.dataset.index;
    if (index !== undefined) {
        notes.splice(index, 1);
        noteText.value = '';
        delete noteText.dataset.index;
        displayNotes();
    }
}

// Event listeners
saveButton.addEventListener('click', addNote);
deleteButton.addEventListener('click', deleteNote);
noteText.addEventListener('input', editNote);

// Initial display of notes
displayNotes();
