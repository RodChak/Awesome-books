let booksContainer = document.getElementById('books');
let inpTitle = document.getElementById('inp-title');
let inpAuthor = document.getElementById('inp-author');
let bookDatas = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

//When the remove button is clicked
function removeBook(i) {
  bookDatas.splice(i, 1);
  generateNewBook();
}

// function for generating and displaying new book using dynamic html
function generateNewBook(i) {
  booksContainer.innerHTML = '';
  for (let i = 0; i < bookDatas.length; i += 1) {
  booksContainer.innerHTML += `<div class="book" id="book">
                     <p class="the-title">${bookDatas[i].title} by ${bookDatas[i].author}</p>
                     <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
                     <hr><br></div>`;
}
}

// once you click Button new object is created: following function takes place: 
// pushes the new object into array bookDatas
// the new array Bookdatas is saved in the local storage
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(inpTitle.value, inpAuthor.value);
  bookDatas.push(newBook);
  generateNewBook(bookDatas.length - 1);
  localStorage.setItem('stored ', JSON.stringify(bookDatas));
});
removeBook();

// the load event is fired when the whole webpage (HTML) has loaded fully,
// loading books after refreshing the page
// The getItem() method returns the current value associated with the given key. 
window.addEventListener('load', () => {
  let loadedData = JSON.parse(localStorage.getItem('bookDatas'));
  if (loadedData) {
    generateNewBook();
  } else {
    loadedData = [];
  }
});

//if theres nothing filled in the inputs do not submit
// if the input is similar to one of the object alredy pushed in the array display a message
