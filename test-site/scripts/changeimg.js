/**
 * Created by Terencel on 2019/11/14.
 */
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let imageSrc = myImage.getAttribute('src');
    if(imageSrc == 'images/my-love.jpg'){
        imageSrc = 'images/my-work.jpg';
        myImage.setAttribute('src', imageSrc);
    }else {
        imageSrc = 'images/my-love.jpg';
        myImage.setAttribute('src', imageSrc);
    }
};