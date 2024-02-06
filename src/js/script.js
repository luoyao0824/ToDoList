const createTaskButton = document.querySelector(".create-task");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector("#close_btn");
const addButton = document.querySelector("#add_btn");
const overlay = document.querySelector('.overlay');

//弹出框的设置
createTaskButton.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';

});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

addButton.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

//数据库交互
let db;
const openRequest = window.indexedDB.open('notes_db', 1);
