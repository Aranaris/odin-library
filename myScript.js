"use strict";
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // let read_text = "";
    // if (this.read) {
    //     read_text = "read";
    // } else {
    //     read_text = "not read yet";
    // }
    // this.info = function() {
    //     return title + " by " + author + ", " + String(pages) + " pages, " + read_text;
    // }
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function toggleRead (book) {
    book.read = !book.read;
}

function removeBookfromLibrary(libraryIndex) {
    myLibrary.splice(libraryIndex, 1);
    updateBookDisplay();
}

function updateBookDisplay () {
    const bookDisplay = document.querySelector(".book-display");
    bookDisplay.replaceChildren();
    let bookDisplayHeader = document.createElement('h3');
    bookDisplayHeader.className = 'book-display-header';
    bookDisplayHeader.textContent = `Your Books (${myLibrary.length})`
    bookDisplay.appendChild(bookDisplayHeader);
    for (let i = 0; i < myLibrary.length; i++) {
        let newBook = document.createElement('div');
        newBook.className = 'book';
        // newBook.textContent = myLibrary[i].info(); 
        for (const property in myLibrary[i]) {
            let bookProperty = document.createElement('div');
            bookProperty.className = `${property}`;
            if (property === 'read') {
                let readLabel = document.createElement('label');
                readLabel.for = `read-${i}`;
                readLabel.textContent = 'Read: ';
                let readInput = document.createElement('input');
                readInput.id = `read-${i}`;
                readInput.type = 'checkbox';
                readInput.value = 'hasRead';
                readInput.checked = myLibrary[i][property];
                readInput.addEventListener('change', function() {
                    toggleRead(myLibrary[i]);
                    console.log(myLibrary[i]);
                });

                bookProperty.appendChild(readLabel);
                bookProperty.appendChild(readInput);
            
            } else if (property === 'pages') {
                bookProperty.textContent = `${myLibrary[i][property]} pgs`;
            } else {
                bookProperty.textContent = `${myLibrary[i][property]}`;
            }
            newBook.appendChild(bookProperty);
        }
        let removeBookButton = document.createElement('button');
        removeBookButton.className = 'remove-book-button';
        removeBookButton.textContent = 'Remove';
        removeBookButton.dataset.libraryIndex = i;
        removeBookButton.addEventListener('click', () => {
            removeBookfromLibrary(removeBookButton.dataset.libraryIndex);
        })
        newBook.appendChild(removeBookButton);

        bookDisplay.appendChild(newBook);

    }
}

function userAddNewBook () {
    const newBookSection = document.querySelector(".new-book-section");
    newBookSection.replaceChildren();

    let newBookHeader = document.createElement('h3');
    newBookHeader.textContent = 'Please fill out the form below:';

    let addNewBookForm = document.createElement('form');
    addNewBookForm.className = 'new-book-form';
    addNewBookForm.name = 'addNewBook';
    addNewBookForm.method = 'POST';
    addNewBookForm.action = '/addnewbook';
    
    /* adding inputs to form */
    let titleLabel = document.createElement('label');
    titleLabel.for = 'title';
    titleLabel.textContent = 'Book Title: ';
    let titleInput = document.createElement('input');
    titleInput.id = 'title';
    titleInput.type = 'text';

    let authorLabel = document.createElement('label');
    authorLabel.for = 'author';
    authorLabel.textContent = 'Book Author: ';
    let authorInput = document.createElement('input');
    authorInput.id = 'author';
    authorInput.type = 'text';

    let pageNumLabel = document.createElement('label');
    pageNumLabel.for = 'pageNum';
    pageNumLabel.textContent = 'Number of Pages: ';
    let pageNumInput = document.createElement('input');
    pageNumInput.id = 'pageNum';
    pageNumInput.type = 'number';

    let readLabel = document.createElement('label');
    readLabel.for = 'read';
    readLabel.textContent = 'Read? ';
    let readInput = document.createElement('input');
    readInput.id = 'read';
    readInput.type = 'checkbox';
    readInput.value = 'hasRead';

    let submitNewBook = document.createElement('button');
    submitNewBook.type = 'button';
    submitNewBook.textContent = 'Submit';
    submitNewBook.id = 'submit-new';

    addNewBookForm.appendChild(titleLabel);
    addNewBookForm.appendChild(titleInput);
    addNewBookForm.appendChild(authorLabel);
    addNewBookForm.appendChild(authorInput);
    addNewBookForm.appendChild(pageNumLabel);
    addNewBookForm.appendChild(pageNumInput);
    addNewBookForm.appendChild(readLabel);
    addNewBookForm.appendChild(readInput);
    addNewBookForm.appendChild(submitNewBook);

    newBookSection.appendChild(newBookHeader);
    newBookSection.appendChild(addNewBookForm);
    
    /*handling user inputs and adding to library */
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pageNum = document.querySelector('#pageNum');
    const readCheckbox = document.querySelector('#read');

    const submitButton = document.querySelector('#submit-new');
    submitButton.addEventListener('click', () => {
        const newBook = new Book (title.value, author.value, pageNum.value, readCheckbox.checked);
        addBookToLibrary(newBook);
        updateBookDisplay();

        newBookSection.replaceChildren();
        generateNewBookSection();
    })
    
}

function generateNewBookSection() {
    let newBookSectionHeader = document.createElement('div');
    newBookSectionHeader.className = 'new-book-header';
    newBookSectionHeader.textContent = 'Click the button to add a new book to your collection!';
    let newBookSectionButton = document.createElement('button');
    newBookSectionButton.id = 'show-book-form';
    newBookSectionButton.textContent = 'Add New Book';

    const newBookSection = document.querySelector(".new-book-section");
    newBookSection.appendChild(newBookSectionHeader);
    newBookSection.appendChild(newBookSectionButton);

    const addNewBookButton = document.getElementById('show-book-form');
    addNewBookButton.addEventListener('click', () => {
        userAddNewBook();
    })
}

generateNewBookSection();

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

const sampleBook = new Book("SampleBook2 with really long title", "New Author", 100, false);

addBookToLibrary(theHobbit);
addBookToLibrary(sampleBook);

updateBookDisplay();