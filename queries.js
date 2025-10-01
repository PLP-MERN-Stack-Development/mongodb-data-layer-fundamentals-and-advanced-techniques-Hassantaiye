// queries.js

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// Alternative: Find all Fantasy books
db.books.find({ genre: "Fantasy" });

// With pretty formatting for better readability
db.books.find({ genre: "Science Fiction" }).pretty();

// 2. Find books published after a certain year
// Books published after 2000
db.books.find({ published_year: { $gt: 2000 } });

// Books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// Books published after 1950
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author
db.books.find({ author: "J.K. Rowling" });

// Find books by George Orwell
db.books.find({ author: "George Orwell" });

// Find books by contemporary authors
db.books.find({ author: "Andy Weir" });

// 4. Update the price of a specific book
// Update price of "The Great Gatsby"
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 15.99 } }
);

// Update price of "The Hobbit" and mark it as in stock
db.books.updateOne(
  { title: "The Hobbit" },
  { 
    $set: { 
      price: 18.50,
      in_stock: true
    } 
  }
);

// Update multiple books by same author
db.books.updateMany(
  { author: "J.R.R. Tolkien" },
  { $set: { price: 20.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "1984" });

// Delete a more recent book
db.books.deleteOne({ title: "The Midnight Library" });

// Verify deletion by checking remaining books
db.books.find({}, { title: 1, _id: 0 });

// task 3
// 1. Find books that are both in stock AND published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});
// 2. Use projection to return only title, author, and price fields

// For all books
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);
// 3. Implement sorting by price

// Ascending order (cheapest first)
db.books.find().sort({ price: 1 });

// Descending order (most expensive first)
db.books.find().sort({ price: -1 });
// 4. Pagination using limit and skip (5 books per page)

// Page 1: Books 1-5
db.books.find().limit(5).skip(0);

// Page 2: Books 6-10
db.books.find().limit(5).skip(5);
// Page 3: Books 11-15
db.books.find().limit(5).skip(10);

//aggregation pipelines
// 1. Average price of books per genre
db.books.aggregate([
  { $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);
// 2. find the author with the most books in the collection
db.books.aggregate([
  { $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);
// 3. pipeline that groups books by publication decade and counts them
db.books.aggregate([
  { $project: {
      decade: { $concat: [
        { $toString: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] } },
        "s"
      ] }
    }
  },
  { $group: {
      _id: "$decade",
      bookCount: { $sum: 1 }
    }
  }
]);

// Task 5: indexing
//Create an index on the title field for faster searches
db.books.createIndex({ title: 1 });
//Create a compound index on author and published_year for queries filtering by both fields
db.books.createIndex({ author: 1, published_year: -1 });
//Create a text index on title and author for full-text search capabilities
db.books.createIndex({ title: "text", author: "text" });
//Use the explain() method to demonstrate the performance improvement with your indexes
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");
db.books.find({ $text: { $search: "Tolkien" } }).explain("executionStats");

// After creating indexes, run the same queries again to see improved performance
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");
db.books.find({ $text: { $search: "Tolkien" } }).explain("executionStats");

