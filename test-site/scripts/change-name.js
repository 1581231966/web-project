/**
 * Created by Terencel on 2019/11/15.
 */
const page = document.querySelector('p');
page.addEventListener('click', changeName);

function changeName() {
    page.textContent = prompt('输入名字');
}