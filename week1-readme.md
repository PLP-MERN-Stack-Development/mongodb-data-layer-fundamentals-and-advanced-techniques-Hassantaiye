# 📘 MongoDB Queries Guide

This project demonstrates how to run common **MongoDB queries** for books data using the `books` collection.  

The file `queries.js` contains examples of queries for **CRUD operations, projections, sorting, pagination, aggregation, and indexing**.

---

## 🚀 Prerequisites

Before running the queries, ensure you have:

1. **MongoDB installed** on your system ([Download MongoDB](https://www.mongodb.com/try/download/community)).
2. **MongoDB server running** (use `mongod` to start the server).
3. **Mongo shell** (`mongosh`) or a MongoDB GUI (like **MongoDB Compass**).
4. A `books` collection in your database. Example structure:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "published_year": 1925,
  "price": 12.99,
  "in_stock": true
}
```

---

## 📂 Running the Queries

### Option 1: Using `mongosh` shell
1. Start Mongo shell:
   ```bash
   mongosh
   ```
2. Switch to your database (example: `library`):
   ```js
   use library
   ```
3. Load the queries file:
   ```js
   load("queries.js")
   ```

### Option 2: Copy-Paste
You can also copy queries from `queries.js` and run them directly inside the `mongosh`.

---

## 🔎 Query Categories

### 1. **Find Queries**
- Find all books in a genre:
  ```js
  db.books.find({ genre: "Fiction" })
  ```
- Find books published after 2000:
  ```js
  db.books.find({ published_year: { $gt: 2000 } })
  ```

### 2. **Update Queries**
- Update price of *The Great Gatsby*:
  ```js
  db.books.updateOne(
    { title: "The Great Gatsby" },
    { $set: { price: 15.99 } }
  )
  ```

### 3. **Delete Queries**
- Delete a book:
  ```js
  db.books.deleteOne({ title: "1984" })
  ```

### 4. **Projection, Sorting & Pagination**
- Show only title, author, price:
  ```js
  db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  ```
- Sort by price:
  ```js
  db.books.find().sort({ price: 1 }) // ascending
  ```
- Pagination:
  ```js
  db.books.find().limit(5).skip(5) // Page 2
  ```

### 5. **Aggregation Pipelines**
- Average price per genre:
  ```js
  db.books.aggregate([
    { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
  ])
  ```
- Author with most books:
  ```js
  db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
  ])
  ```

### 6. **Indexing**
- Create an index on title:
  ```js
  db.books.createIndex({ title: 1 })
  ```
- Full-text search:
  ```js
  db.books.find({ $text: { $search: "Tolkien" } })
  ```
- Analyze performance:
  ```js
  db.books.find({ title: "The Great Gatsby" }).explain("executionStats")
  ```

---

## ✅ Notes
- Run queries step by step for learning, or load the whole script at once.
- Use `.pretty()` for formatted query results.
- Use `.explain("executionStats")` to analyze performance with and without indexes.

---

## 📌 Example Run

```bash
mongosh
> use library
> load("queries.js")
```
This will execute all queries in `queries.js`.
