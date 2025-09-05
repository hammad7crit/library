let addBtn = document.querySelector("button");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let checkBox = document.querySelector("#checkbox");
let booksContainer = document.querySelector(".books-container");



addBtn.addEventListener("click", handleAddBook);


function handleAddBook() {
    addBookToLibrary();
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book")
    booksContainer.appendChild(bookDiv);
    let bookTitleElement = document.createElement("p");
    bookTitleElement.textContent = bookTitle.value;
    let bookAuthorElement = document.createElement("p");
    bookAuthorElement.textContent = bookAuthor.value;
    let bookPagesElement = document.createElement("p");
    bookPagesElement.textContent = bookPages.value;
    let bookReadElement = document.createElement("p");
    if (checkBox.checked) {
        bookReadElement.textContent = "Read";
    } else {
        bookReadElement.textContent = "Not Read";
    }
    bookDiv.appendChild(bookTitleElement);
    bookDiv.appendChild(bookAuthorElement);
    bookDiv.appendChild(bookPagesElement);
    bookDiv.appendChild(bookReadElement);
}

const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.author = author
    this.title = title
    this.pages = 300
    this.read = read
    this.id = id
    if (read) {
        read = "has been read"
    } else {
        read = "not read"
    }
}

// this for when u click add a new book 
function addBookToLibrary() {
    const book = new Book(bookTitle, bookAuthor , bookPages, checkBox, crypto.randomUUID)
    myLibrary.push(book)
}

//display all books
function booksLoop() {
    myLibrary.array.forEach((book, index) => {
        `${index + 1} . ${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`
    });
}