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
  resultsEl: document.getElementById('results'),
  showResultsEl: document.getElementById('show-results'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  clicks: 0,


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
    this.imageOneEl.id = this.imgObjOne.name;
    this.imageTwoEl.src = this.imgObjTwo.path;
    this.imageTwoEl.id = this.imgObjTwo.name;
    this.imageThreeEl.src = this.imgObjThree.path;
    this.imageThreeEl.id = this.imgObjThree.name;
    //29:00//
  },

  checkClicks: function(){
    console.log(this.clicks);
    if(this.clicks > 14){

      this.imageContainerEl.removeEventListener('click',this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e){
        e.preventDefault();
        tracker.renderResults();
      });
    }
  },
  clickHandler: function(e){
    tracker.checkClicks();
    if(
      e.target.id === tracker.imgObjOne.name ||
      e.target.id === tracker.imgObjTwo.name ||
      e.target.id === tracker.imgObjThree.name) {
        tracker.clicks++;
        tracker.tallyVotes(e.target.id);
        tracker.displayImages();
      }
    },

    tallyVotes: function(elId){
      for(var i = 0; i< productArr.length; i++){
        if(elId === productArr[i].name){
          productArr[i].votes += 1;
          console.log(productArr[i]);
          break;
        }
      }
    },
    renderResults: function(){
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'],//names of images//
              datasets: [{
                  label: '# of Votes',
                  data: productArr[i].votes, //this will hold the votes//
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          }
      });

    }
  };
  tracker.imageContainerEl.addEventListener('click', tracker.clickHandler);

  tracker.displayImages();



  //chart////
