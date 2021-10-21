let books = [];

// Initialise Cloud Firestore
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
const db = getFirestore();

// Fetch books from Cloud Firestore and display on the website
const booksData = await getDocs(collection(db, "books"));
booksData.forEach((doc) => {
  let book = doc.data();
  books.push(book);
  document.getElementById("book-row").innerHTML += `
  <div class="col-sm">
      <div class="card">
          <img src='${book.imageURL}' class="card-img-top">
          <div class="card-body">
              <h2 class="card-title">${book.title}</h2>
              <div class="price card-text">$ ${book.price}</div>
              <a href="#" class="btn">Add to cart</a>
          </div>
      </div>
  </div>`;
});
