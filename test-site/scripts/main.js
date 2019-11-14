/**
 * Created by Terencel on 2019/11/13.
 */
let myHeading = document.querySelector('html');
myHeading.onclick = function () {
    alert("You click on this page")
};
function createMessage(str1, str2){
    if(str1 == "123"){
        str2 = " a message create by function";
        return str1 + str2;
    }else {
        return "null";
    }
}