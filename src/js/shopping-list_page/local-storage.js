import { getBookById } from '../home_page/books-api';

// const addButton = document.querySelector('.add-button-sh');
// const delButton = document.querySelector('');
// const getButton = document.querySelector('.site-nav__link');

// addButton.addEventListener('click', handleAddBtnClick);
// delButton.addEventListener('click', handleDelBtnClick);
// getButton.addEventListener('click', handleGetBtnClick);

// const bookId = '643282b2e85766588626a112';

export async function handleAddBtnClick(bookId) {
  const data = await getBookById(bookId);
  saveToLS(data._id, data);
}

export function handleDelBtnClick(bookId) {
  localStorage.removeItem(bookId);
}

export function handleGetBtnClick() {
  const itemCount = localStorage.length;
  const uploadedBooks = [];

  for (let i = 0; i < itemCount; i++) {
    const key = localStorage.key(i);
    const value = loadFromLS(key);

    if (value._id) {
      uploadedBooks.push(value);
    }
  }

  if (uploadedBooks.length) {
    console.log(uploadedBooks);
    return uploadedBooks;
  } else {
    console.log('shoppingList is empty');
  }
}

function saveToLS(key, value) {
  const serializedData = JSON.stringify(value);
  localStorage.setItem(key, serializedData);
}

function loadFromLS(key) {
  const serializedData = localStorage.getItem(key);
  try {
    return JSON.parse(serializedData);
  } catch {
    return serializedData;
  }
}
