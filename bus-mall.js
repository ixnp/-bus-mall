// refresh page, .random choseing imgags, images stored in array, <15, create counter/
//whileloop. event listner < on click refresh page

var images = ["bag.jpg", "banana.jpg", "bathroom.jpg","boots.jpg","breakfast.jpg","bubblegum.jpg","chair.jpg","cthulu.jpg","dog-duck.jpg","dragon.jpg","pen.jpg","pet-sweep.jpg","scissors.jpg","shark.jpg","sweep.jpg","tauntaun.jpg","unicorn.jpg","usb.jpg","water-can.jpg", "wine-glass.jpg"];

var imgArray = new Array();

imagesArray[0] = new Image();
imageArray[0].src =  'bag.jpg';

////////////

function nextImage(element)
{
  var img = document.getElementsById(element);

  for( var i = 0; i< imageArray.length;i++)
  if(imageArray[i].src == img.src)
  {
    if(i === imageArray.length{
      document.getElementById(element).src = imageArray[0].src;
      break;
    }
    document.getElementById(element).src = imgArray[i+1].src;
    break;
  }
}


// function displayImage(){
//   var number = Math.floor(Math.random()*(imagesArray.legth + 1));
//   var document.getElementById("imageOne") = images[number]
// }
//
//
//

// document.getElemntbyID("randomOne").addEventListener("clcik", function(event){
//   event.target.innHtml="click count:" + event.detail;
//
// }
//
// var randomImage = getElementsById('myimage')[0];
// for(i=0; i< 3; i++){
//
// var item = (Math.floor(Math.random()*myImage.length), 1)[0];
//
// var image = document.createElement('img');
// image.src= item.image;
//
// list.appendChild(image);
// //
//
// var myImage = ["bag.jpg", "banana.jpg", "bathroom.jpg","boots.jpg","breakfast.jpg","bubblegum.jpg","chair.jpg","cthulu.jpg","dog-duck.jpg","dragon.jpg","pen.jpg","pet-sweep.jpg","scissors.jpg","shark.jpg","sweep.jpg","tauntaun.jpg","unicorn.jpg","usb.jpg","water-can.jpg", "wine-glass.jpg"];
//
//
// }


// function choose (){
//   var rand = Math.floor(Math.random()* images.length);
//
// document.getElemntbyID("myimage").src= images[rand];
// }
// var lastIndex = 0;
//
// function randomImage() {
//    var theImage = document.getElementById('myimage');
//    var imgDir = 'images/bus-mall
//    ';
//    var imgArray = new array('bag.jpg', 'banana.jpg', 'bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.jpg','tauntaun.jpg','unicorn.jpg','usb.jpg','water-can.jpg', 'wine-glass.jpg');
//    var imgIndex = 0;
//
//
//    if(imgArray.length > 1) {
//    while(imgIndex == lastIndex) {
//       imgIndex = Math.floor(Math.random() * imgArray.length);
//    }
//    lastIndex = imgIndex;
//
//    var imgPath = imgDir + imgArray[imgIndex];
//
// theImage.src = imgPath;
// theImage.alt = imgArray[imgIndex];
