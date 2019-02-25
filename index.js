document.addEventListener("DOMContentLoaded",() => {

const booksURL = "http://localhost:3000/books"
const usersURL = "http://localhost:3000/users"

const listPanel = document.querySelector('#list-panel')
const showPanel = document.querySelector('#show-panel')

const getTheBooksFetch = () => {
   fetch(booksURL)
  .then(res => res.json())
  .then(booksData => putBooksToListPanel(booksData))
}

const putBooksToListPanel = (booksData) => {
  booksData.forEach(putOneBookToListPanel)
}

const putOneBookToListPanel = (oneBook) => {
  let id = oneBook.id
  let title = oneBook.title
  let description = oneBook.description
  let image = oneBook.img_url
  let users = oneBook.users


  listPanel.innerHTML += `
  <li class="book-title" data-id="${id}" data-title="${title}" data-description="${description}" data-image="${image}">
    ${title}
  </li>
  `
}

const handleClick = () => {
  listPanel.addEventListener('click', showBookDetails)
  listPanel.addEventListener('click', showBookUsers)
}

const showBookDetails = (event) => {
  if(event.target.classList.contains('book-title')){
    console.clear()
    console.log('book clicked!')
    console.log(event.target.dataset.title)

  let id = event.target.dataset.id
  let title = event.target.dataset.title
  let description = event.target.dataset.description
  let image = event.target.dataset.image

  showPanel.innerHTML = ``
  showPanel.innerHTML += `
  <img src="${image}">
  <h2>${title}</h2>
  <h4>${description}</h4>
  <p><button class="read-book-btn" data-id="${id}">READ BOOK!</button>
  `
  // get users to show here

  }
} // end of SHOWBOOKDETAILS

const showBookUsers = (event) => {
  fetch(`${booksURL}/${event.target.dataset.id}`)
  .then(res => res.json())
  .then(bookData => formatUsers(bookData))
}

const formatUsers = (bookData) => {
  bookData.users.forEach(turnToLi)
}

const turnToLi = (userObj) => {
  let user = userObj.username
  let id = userObj.id

  showPanel.innerHTML += `
  <li>${user}</li>
  `
}

const handleButtonClick = () => {
  showPanel.addEventListener('click', readBook)
}

const readBook = (event) => {
  console.log("read book clicked!")

const showBookUsers = (event) => {
  fetch(`${booksURL}/${event.target.dataset.id}`)
  .then(res => res.json())
  .then(bookData => formatUsers(bookData))
}

const formatUsers = (bookData) => {
  debugger
  return bookData.users
}

  let clickedBookURL = `${booksURL}/${event.target.dataset.id}`
  debugger
  fetch(clickedBookURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: ({
      // need userID and all the other users
    })
  })
}


// CALLS
getTheBooksFetch();
handleClick();
handleButtonClick();

}) // END OF DOMCONTENTLOADED
