const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2018",

  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${year}`
  }
};

console.log(book1.getSummary());
