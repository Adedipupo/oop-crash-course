const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        return `${this.title} is ${years} years old`;
    }
}