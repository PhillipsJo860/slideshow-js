let i = 0; //Start point
const images = [];
const delay = 3000;

//Image List
images[0] = 'download.jpg';
images[1] = 'download1.jpg';
images[2] = 'download2.jpg';
images[3] = 'images1.jpg';

//Image captions array
const captions = ['Art piece #1', 'Art piece #2', 'Art piece #3', 'Art piece #4'];

//Change Image
function changeImg(){
    document.slide.src = images[i];
    const myCaption = document.querySelector('#art-caption');
    myCaption.innerHTML = captions[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", delay);
}

window.onload = changeImg;