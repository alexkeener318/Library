let myLibrary = [];

/* TODO: FIX SUBMIT BUTTOn
            - Verify validity of fields before submission
            - Hide form upon submission

        ADD REST OF FUNCTIONALITY
*/
const addNewBook = document.getElementById("form");
const addButton = document.querySelector(".add");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const cards = document.querySelector(".content");
const cancel = document.querySelector(".cancel");
console.dir(addNewBook);

// Prevents form from refreshing page
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// Functions for adding a new book
addButton.addEventListener("click", () => {
    if(window.getComputedStyle(addNewBook).visibility === "hidden"){
        addNewBook.style = "visibility: visible;";
    }
    else{
        addNewBook.style = "visibility: hidden;";
    }
});

cancel.addEventListener("click", () => {
    form.style = "visibility: hidden;";
    clear(form);
});

submit.addEventListener("click", createBook);


function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        let output = title + " by " + author + ", " + numPages + " pages, ";
        if(read){
            output += "has read it."
        }else{
            output += "had not read."
        }
        return output;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBook(){
    if(!verifyValidity()){
        return;
    }
    const submittedBook = new Book(form[0].value, form[1].value, form[2].value, form[3].checked);
    addBookToLibrary(submittedBook);

    //creates new DOM element for book
    const newBook = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    read.classList.add("read");
    remove.classList.add("remove");
    if(submittedBook.read){
        read.textContent = "Read";
    }
    else{
        read.textContent = "Not Read";
        read.classList.add("not");
    }

    title.textContent = submittedBook.title;
    author.textContent = submittedBook.author;
    pages.textContent = submittedBook.numPages;
    remove.textContent = "Remove";
    console.log(submittedBook.numPages);

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);
    newBook.appendChild(remove);

    newBook.classList.add("card");
    cards.appendChild(newBook);

    addNewBook.style = "visibility: hidden;";
    clear(newBook);
}

function verifyValidity(){
    for(let i = 0; i < 3; i++){
        console.log("Input: ");
        if(form[i].value === ""){
            return false
        }
    }
    return true;
}

function clear() {
    console.dir(form);
    for(let i = 0; i < 3; i++){
        form[i].value = ""
    }
    form[3].checked = false;
}

// let book1 = new Book("12 karrot toothache","post malone", 200, true);
// console.log(book1.info());