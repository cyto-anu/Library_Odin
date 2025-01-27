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

addBookToLibrary("Harry Potter", "JK Rowling", 1128, "true")
addBookToLibrary("Romeo and juliet", "Shakespeare", 184, "false")
addBookToLibrary("Steve Jobs", "Walter Issaicson", 592, "true")

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
        if (element.read == "true") {
            readDiv.textContent = "read";
            readDiv.style.border = "2px solid green";
        } else {
            readDiv.textContent = "not read";
            readDiv.style.border = "2px solid red";
        }
        

        const removeBtn = document.createElement('button');
        removeBtn.classList.add("removeBtn");
        titleDiv.appendChild(removeBtn);
        removeBtn.textContent = "remove book";



    });

};

loopThru();


//adds button to remove the selected book from DOM, display, and the myLibrary array.
// const removeBtn = document.querySelectorAll(".removeBtn");

// removeBtn.forEach(element => {
//     element.addEventListener("click", e => {
//         console.log("removed "+element.parentElement.firstChild.textContent);
//         element.parentElement.remove();

//         myLibrary.forEach((event, index) => {
//             if (event.title === element.parentElement.firstChild.textContent) {
//                 myLibrary.splice(index,1);
//             };
//         });

//     });

// });


//form submit
const submitBtn = document.querySelector("#submitBtn");

function addNewBook () {

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    container.appendChild(titleDiv);
    titleDiv.textContent = myLibrary[myLibrary.length - 1].title;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add("author");
    titleDiv.appendChild(authorDiv);
    authorDiv.textContent = myLibrary[myLibrary.length - 1].author;

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add("pages");
    titleDiv.appendChild(pagesDiv);
    pagesDiv.textContent = myLibrary[myLibrary.length - 1].pages;

    const readDiv = document.createElement('div');
    readDiv.classList.add("read");
    titleDiv.appendChild(readDiv);

    if (myLibrary[myLibrary.length - 1].read == "true") {
        readDiv.textContent = "read";
    } else {
        readDiv.textContent = "not read";
        
    };


    const removeBtn = document.createElement('button');
    removeBtn.classList.add("removeBtn");
    titleDiv.appendChild(removeBtn);
    removeBtn.textContent = "remove book";

};

submitBtn.addEventListener("click", event => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked ? "true" : "false");
    addNewBook();
} );


container.addEventListener("click", e => {
    if (e.target.classList.contains("removeBtn")) {
        const bookTitle = e.target.parentElement.firstChild.textContent;

        console.log("removed " + bookTitle);
        e.target.parentElement.remove();

        myLibrary.forEach((book, index) => {
            if (book.title === bookTitle) {
                myLibrary.splice(index, 1);
            }
        });
    }
});

//read status intial color


//changing read status

container.addEventListener("click", e => {
    if (e.target.classList.contains("read")) {

        if (e.target.textContent === "read") {
            e.target.textContent = "not read";
            e.target.style.border = "2px solid red";

            myLibrary.forEach(z => {
                if (z.title === e.target.parentElement.firstChild.textContent) {
                    z.read = "false";
                
                };
    
            });
            
        } else {
            e.target.textContent = "read";
            e.target.style.border = "3px solid green";
            
            myLibrary.forEach(z => {
                if (z.title === e.target.parentElement.firstChild.textContent) {
                    z.read = "true";
                
                };
    
            });
        };


    };
});