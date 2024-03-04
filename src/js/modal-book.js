import * as basicLightbox from 'basiclightbox';
import { getBookById } from './books-api'; 

//------------------option 3---------------//

// function createModalMarkup(book) {
//   return `
//     <img class="book-image" src="${book_image}" alt="#" />
//         <div class="modal">
//           <h1>${title}</h1>
//             <p>${author}</p>
//             <p>${description}</p>
//             <ul>
//             <li><a href='${buy_links[0].url}'><svg></svg></a></li>
//             <li><a href='${buy_links[1].url}'><svg></svg></a></li>
//             </ul>
//             <button type="submit">ADD TO SHOPPING LIST</button>
//         </div>`;
// }

// async function handleBookClick(event) {
//   event.preventDefault();
//   const bookId = event.currentTarget.dataset.bookId;
//   const book = await getBookById(bookId);
//   const modalMarkup = createModalMarkup(book);
//   const instance = basicLightbox.create(modalMarkup);
//   instance.show();
    
//     console.log(handleBookClick());
// }

// const bookItems = document.querySelectorAll('.main-page-book-render-item');
// bookItems.forEach(bookItem => {
//   bookItem.addEventListener('click', handleBookClick());
// });

//------------------option 2---------------//

// export function createModalMarkup(el) { 
//     const { book_image, title, author, description, buy_links } = el;
//     return `<img class="book-image" src="${book_image}" alt="#" />
//         <div class="modal">
//             <h1>${title}</h1>
//             <p>${author}</p>
//             <p>${description}</p>
//             <ul>
//             <li><a href='${buy_links[0].url}'><svg></svg></a></li>
//             <li><a href='${buy_links[1].url}'><svg></svg></a></li>
//             </ul>
//             <button type="submit">ADD TO SHOPPING LIST</button>
//         </div>`;
// } 

// export async function handleBookClick(event) {
//     if (!event) return;
//     event.preventDefault();
//     const liElement = event.target.closest('.main-page-book-render-item');
//     if (!liElement) return;
//     const id = liElement.dataset.bookId;
//     let bookInfo = await getBookById(id);
//     const modalMarkup = createModalMarkup(bookInfo);

//     const instance = basicLightbox.create(modalMarkup);
//     instance.show();
//     console.log(handleBookClick());
// }

//--------------------option 1------------//

// document.addEventListener('DOMContentLoaded', () => {
//     const bookCard = document.querySelector('.main-page-book-render-item');

//     let currentId;
//     let bookInfo;

//     // //Click on a book

//     // bookCard.addEventListener('click', handleBookClick());

//     // Check if bookCard exists before adding event listener
//     if (bookCard) {
//         bookCard.addEventListener('click', handleBookClick);
//     }
    
//     // Function to create modal 
//     function createModalMarkup(el) {
//         const { book_image, title, author, description, buy_links } = el;
//         return `<img class="book-image" src="${book_image}" alt="#" />
//         <div class="modal">
//             <h1>${title}</h1>
//             <p>${author}</p>
//             <p>${description}</p>
//             <ul>
//             <li><a href='${buy_links[0].url}'><svg></svg></a></li>
//             <li><a href='${buy_links[1].url}'><svg></svg></a></li>
//             </ul>
//             <button type="submit">ADD TO SHOPPING LIST</button>
//         </div>`;
//     }
 
//      async function handleBookClick(event) {
//         // Get the id of the clicked book from data attribute or any other way
//         const id = event.target.dataset.id;
//         currentId = id;
//         bookInfo = await getBookById(currentId);
//         const modalMarkup = createModalMarkup(bookInfo);

//         const instance = basicLightbox.create(modalMarkup);
//         instance.show();
//     }
// });

//--------- AI suggestions ----///

// const bookList = document.querySelector('.main-page-books-render');

// // Listen for clicks on the book list
// bookList.addEventListener('click', function(e) {
//   if (e.target.tagName === 'LI') {
//     const bookId = e.target.dataset.id; //needs data-id
//     openModal(bookId);
//   }
// });

// // Function to open the modal
// async function openModal(id) {
//   const bookDetails = await getBookDetails(id);
//   const modal = document.querySelector('.modal');
  
//   // Populate the modal with book details
//   modal.querySelector('.cover-image').src = bookDetails.coverImage;
//   modal.querySelector('.book-name').textContent = bookDetails.name;
//   modal.querySelector('.author').textContent = bookDetails.author;
//   modal.querySelector('.description').textContent = bookDetails.description;
  
//   // Add links to trading platforms
//   const linkList = modal.querySelector('.links');
//   linkList.innerHTML = '';
//   bookDetails.links.forEach(link => {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
//     linkList.appendChild(listItem);
//   });
  
//   // Add event listener to the add/remove button
//   const button = modal.querySelector('.add-remove-button');
//   button.textContent = localStorage.getItem(id) ? 'Remove from Shopping List' : 'Add to Shopping List';
//   button.onclick = function() {
//     const action = localStorage.getItem(id) ? 'remove' : 'add';
//     updateShoppingList(id, action);
//     button.textContent = action === 'add' ? 'Remove from Shopping List' : 'Add to Shopping List';
//   };
  
//   // Show the modal
//   modal.style.display = 'block';
  
//   // Prevent scrolling in the background
//   document.body.style.overflow = 'hidden';
  
//   // Add event listeners to close the modal
//   modal.querySelector('.close-button').onclick = closeModal;
//   window.onkeydown = function(e) {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   };
// }

// // Function to close the modal
// function closeModal() {
//   const modal = document.querySelector('.modal');
//   modal.style.display = 'none';
//   document.body.style.overflow = '';
  
//   // Remove event listeners
//   modal.querySelector('.close-button').onclick = null;
//   window.onkeydown = null;
// }

// // Add a book to the shopping list
// function addToShoppingList(bookId) {
//   // Add the book ID to the list in localStorage
//   const updatedList = [...bookIdList, bookId];
//   localStorage.setItem('shoppingList', JSON.stringify(updatedList));

//   // Re-render the shopping list
//   renderShopList(updatedList);
// }

// // Update the setupDeleteButtons function to also handle add buttons
// function setupButtons() {
//   refs.shopListDivElem.addEventListener('click', event => {
//     const listItem = event.target.closest('.shopping-list-item');
//     const bookId = listItem.dataset.id;

//     if (event.target.matches('.shopping-list-delete-btn')) {
//       // Remove the book from the shopping list
//       listItem.remove();
//       const updatedList = bookIdList.filter(id => id !== bookId);
//       localStorage.setItem('shoppingList', JSON.stringify(updatedList));
//       renderShopList(updatedList);
//     } else if (event.target.matches('.shopping-list-add-btn')) {
//       // Add the book to the shopping list
//       addToShoppingList(bookId);
//     }
//   });
// }

// // Initialize
// renderShopList(bookIdList);
// setupButtons();