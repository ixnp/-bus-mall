// refresh page, .random choseing imgags, images stored in array, <15, create counter/
//whileloop. event listner < on click refresh page


var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

var productArr = [];

// Constructor function
function Product(name) {
 this.name = name;
 this.votes = 0;
 this.path = 'image/' + name + '.jpg';
 productArr.push(this);
}
console.log(this.path);
// a simple IIFE to build all the product images // Producing path to new product
(function () {
 for (var i = 0; i < productNames.length; i++) {
   new Product(productNames[i]);
 }
 console.log(productArr);
})();

var tracker = {
  imageOneEl: document.getElementById('imageOne'),
  imageTwoEl: document.getElementById('imageTwo'),
  imageThreeEl: document.getElementById('imageThree'),
  imageContainerEl: document.getElementById('imageContainer'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,



getRandomIndex:function(){
  return Math.floor(Math.random()* productArr.length);
  console.log(getRandomIndex);
  },

  displayImages: function() {
    this.imgObjOne = productArr[this.getRandomIndex()];
    this.imgObjTwo = productArr[this.getRandomIndex()];
    this.imgObjThree = productArr[this.getRandomIndex()];
//keeps out dulplicats//


    if(this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree){
    this.displayImages();
  }

  this.imageOneEl.src = this.imgObjOne.path;
  this.imageTwoEl.src = this.imgObjTwo.path;
  this.imageThreeEl.src = this.imgObjThree.path;
//29:00//
  }
};

tracker.imageContainerEl.addEventListener('click',function(e){
  if(e.target){
    
  }
});
// var tracker = {
//
// };
//
// someEl.addEventListener('click', functions(e)){
//
// })


// var imgArray = new Array();
//
// imagesArray[0] = new Image();
// imageArray[0].src =  'bag';
//
// ////////////
//
// function nextImage(element)
// {
//   var img = document.getElementsById(element);
//
//   for( var i = 0; i< imageArray.length;i++)
//   if(imageArray[i].src == img.src)
//   {
//     if(i === imageArray.length{
//       document.getElementById(element).src = imageArray[0].src;
//       break;
//     }
//     document.getElementById(element).src = imgArray[i+1].src;
//     break;
//   }
// }
//

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
