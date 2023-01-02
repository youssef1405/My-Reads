# My Reads

## Overview

A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. React is used to build the application and provides an API server and client library that you is used to persist information as you interact with the application. The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are: Currently Reading, Want to Read, and Read. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is current shelf the book is in. The main page also has a link to /search, a search page that allows you to find books to add to your library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. When a book is on a bookshelf, it should have the same state on both the main application page and the search page. The search page also has a link to / (the root URL), which leads back to the main page. When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## How to Use the App

- git clone https://github.com/youssef1405/My-Reads.git
- CD to the project folder
- Run npm install in the terminal
- Run npm start
- The app runs on port 3000

## Built with

- React
- Hooks
- React Router
- CSS

## Screenshots

## Backend Server

BookAPI.js file contains the methods needed to perform necessary operations on the backend. There are three methods

- getAll To get all the books from the API
- update Update shelf information of the book
- search Search book in the database

## Author

- Youssef Girgeis
