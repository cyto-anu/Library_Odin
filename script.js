const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

addBookToLibrary("Harry Potter", "JK Rowling", 1128, "read")
addBookToLibrary("Romeo and juliet", "Shakespeare", 184, "read")
addBookToLibrary("Steve Jobs", "Walter Issaicson", 592, "read")

function loopThru() {
    myLibrary.forEach(element => {

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        container.appendChild(titleDiv);
        titleDiv.textContent = element.title;

        const authorDiv = document.createElement('div');
        authorDiv.classList.add("author");
        titleDiv.appendChild(authorDiv);
        authorDiv.textContent = element.author;

        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add("pages");
        titleDiv.appendChild(pagesDiv);
        pagesDiv.textContent = element.pages;

        const readDiv = document.createElement('div');
        readDiv.classList.add("read");
        titleDiv.appendChild(readDiv);
        readDiv.textContent = element.read;

        const bookBtn = document.createElement('button');
        bookBtn.classList.add("bookBtn");
        titleDiv.appendChild(bookBtn);
        bookBtn.textContent = "Press Me";

    });
};

loopThru();


//adds button to remove the selected book from DOM, display, and the myLibrary array.
const bookBtn = document.querySelectorAll(".bookBtn");

bookBtn.forEach(element => {
    element.addEventListener("click", e => {
        console.log(element.parentElement.firstChild.textContent);
        element.parentElement.remove();

        myLibrary.forEach(e => {
            if (e.title === element.parentElement.firstChild.textContent) {
                myLibrary.splice(e,1);
            };
        });

    });


});
