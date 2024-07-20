//Objects

const book = {title: "Rich Dad", author: "Richard", year: 2003,
    bookDetails : () => {
        console.log(`title: ${this.title}\nauthor: ${this.author}`);
    }
}
console.log(book);

const title = book.title
console.log(title);

const author = book.author
console.log(author);


console.log(book.bookDetails());

const updateYear = (year) => {
    book.year = year
    console.log(book);
}

updateYear(2004)

const library = {name : "Urdu Library (Malegaon)",
    books : [
        {
            title: "Shikwa and Jawab-e-Shikwa",
            author: "Allama Iqbal",
            year: 1913,
        },

        {
            title: "The Secrets of the Self",
            author: "Allama Iqbal",
            year: 1915
        },

        {
            title: "Message from the East",
            author: "Allama Iqbal",
            year: 1927
        },

        {
            title: "Jahannum Ki Aapshara",
            author: "Ibne Safi",
            year: 2015
        },    
    ],

    listBooks: function(){
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author}, published in ${book.year}`);
        })
    }
}

const libraryName = library.name 
console.log("Library Name: " + libraryName);

const booksTitle = []
for(i=0; i<library.books.length; i++){
    booksTitle.push(library.books[i].title)
}
console.log("Book Titles: " + booksTitle);

library.listBooks()

for(const key in library.books){
    console.log(`${key} : ${book[key]}`);
}

console.log(`Keys: ${Object.keys(library)} \nValues: ${Object.values(library)}`);