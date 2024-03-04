import { getBookById } from '../home_page/books-api';

// handleAddBtnClick("643282b1e85766588626a081"); //розкоментувати для додавання книжки
// handleAddBtnClick("643282b1e85766588626a0b2"); //розкоментувати для додавання книжки
// handleAddBtnClick("643282b2e85766588626a112"); //розкоментувати для додавання книжки

// handleDelBtnClick("643282b1e85766588626a081"); //розкоментувати для видалення книжок
// handleDelBtnClick("643282b1e85766588626a0b2"); //розкоментувати для видалення книжок
// handleDelBtnClick("643282b2e85766588626a112"); //розкоментувати для видалення книжок


export async function handleAddBtnClick(bookId) {
  const data = await getBookById(bookId);
  saveToLS(data._id, data);
}

export function handleDelBtnClick(bookId) {
  localStorage.removeItem(bookId);
}

export function handleGetBtnClick() {
  const itemCount = localStorage.length;
  const downloadedBooks = [];

  for (let i = 0; i < itemCount; i++) {
    const key = localStorage.key(i);
    const value = loadFromLS(key);

    if (value._id) {
      downloadedBooks.push(value);
    }
  }
    return downloadedBooks;
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
