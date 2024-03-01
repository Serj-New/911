import { getBookById } from '../home_page/books-api';

const addButton = document.querySelector('.add-button-sh'); 
 
addButton.addEventListener('click', handleAddBtnClick); 
 
async function handleAddBtnClick(event) { 
    const data = await getBookById('643282b2e85766588626a114');
}