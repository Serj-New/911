import { getBookCategoryList, getTopBooks, getBookByCategory } from '../home_page/books-api' 

const addButton = document.querySelector('.add-button'); 
 
addButton.addEventListener('click', handleAddBtnClick); 
 
async function handleAddBtnClick(event) { 
    const categoryList = await getBookCategoryList(); 
    const BookByCategory = await getBookByCategory('Business Books'); 
    const topBooks = await getTopBooks(); 
}