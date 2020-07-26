function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

const book1 = new Book('Book One', 'John Doe', '2016');
const book2 = new Book('Book two', 'Jane Doe', '2017');

console.log(book1.getSummary());