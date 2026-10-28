const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let ans = [];
  let keys = Object.keys(books);
  keys.forEach((isbn) => {
    if(books[isbn].author === req.params.author) {
      ans.push({"isbn": isbn, ...books[isbn]});
    }
  });
  return res.status(200).json(ans);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let ans = [];
  let keys = Object.keys(books);
  keys.forEach((isbn) => {
    if(books[isbn].title === req.params.title) {
      ans.push({"isbn": isbn, ...books[isbn]});
    }
  });
  return res.status(200).json(ans);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn].reviews);
});

module.exports.general = public_users;
