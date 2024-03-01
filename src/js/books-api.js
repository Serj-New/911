import axios from 'axios';

export async function getBookCategoryList() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'category-list ';
  const url = BASE_URL + END_POINT;
  const response = await axios.get(url);
  return response.data;
}

export async function getBookByCategory(selectedCategory) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'category';
  const url = BASE_URL + END_POINT;

  const params = {
    category: selectedCategory,
  };

  const response = await axios.get(url, { params });
  return response.data;
}

export async function getTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = 'top-books';
  const url = BASE_URL + END_POINT;
  const response = await axios.get(url);
  return response.data;
}


export async function getBookById(bookId) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const END_POINT = bookId;
  const url = BASE_URL + END_POINT;
  const response = await axios.get(url,);
  return response.data;
}