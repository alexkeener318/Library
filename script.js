let myLibrary = [];


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

// let book1 = new Book("12 karrot toothache","post malone", 200, true);
// console.log(book1.info());