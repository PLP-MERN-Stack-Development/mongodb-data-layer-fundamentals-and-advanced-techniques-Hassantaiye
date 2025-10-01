// insert_books_with_years.js
use plp_bookstore;

db.books.insertMany([
  // Books published BEFORE 2010
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 12.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 14.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 16.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 19.99,
    in_stock: true,
    pages: 223,
    publisher: "Bloomsbury"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 11.99,
    in_stock: true,
    pages: 234,
    publisher: "Little, Brown and Company"
  },

  // Books published AFTER 2010
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    published_year: 2019,
    price: 18.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    published_year: 2018,
    price: 16.99,
    in_stock: true,
    pages: 368,
    publisher: "G.P. Putnam's Sons"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    published_year: 2020,
    price: 17.99,
    in_stock: false,
    pages: 304,
    publisher: "Canongate Books"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Science Fiction",
    published_year: 2021,
    price: 21.99,
    in_stock: true,
    pages: 476,
    publisher: "Ballantine Books"
  }
]);