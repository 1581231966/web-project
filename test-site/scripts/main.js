/**
 * Created by Terencel on 2019/11/13.
 */
let myHeading = document.querySelector('h2');
if(myHeading.textContent != 'Record my life')
{
    myHeading.textContent = 'Hello';
}else{
    alert(createMessage("123", null))
}
function createMessage(str1, str2){
    if(str1 == "123"){
        str2 = " a message create by function";
        return str1 + str2;
    }else {
        return "null";
    }
}