function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    let read_text = "";
    if (this.read) {
        read_text = "read";
    } else {
        read_text = "not read yet";
    }
    this.info = function() {
        return title + " by " + author + ", " + String(pages) + " pages, " + read_text;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info());