function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book('Book One', 'John Doe', '2016');
const book2 = new Book('Book two', 'Jane Doe', '2017');

console.log(book2.getAge());