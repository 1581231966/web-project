/**
 * Created by Terencel on 2019/11/13.
 */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let myInput = document.querySelector('input');

myButton.onclick =  setMessage;
function setMessage() {
    let message = myInput.value;
    if (message != null && message != ''){
        myHeading.textContent = message;
    }else{
        alert('You can not input a empty message.');
    }
}