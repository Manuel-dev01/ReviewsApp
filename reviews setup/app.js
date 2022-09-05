// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./person-1.jpeg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./person-2.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "./person-3.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "./person-4.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const personImg = document.getElementById("person-img");

const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//select starting item
let currentItem = 0

//load initial value
window.addEventListener("DOMContentLoaded", function () {
  console.log("whats poppin")
  showPerson()
});

//Show person beased on item
const showPerson = () =>{
  const item = reviews[currentItem];
  personImg.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nxtBtn.addEventListener("click", function(){
  currentItem++;
   if(currentItem > reviews.length - 1){
     currentItem = 0;
  }
  
  showPerson();
});

//show prev person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1
  }

  showPerson();
});

//get Random Review
const randomReview = () =>{
  currentItem = Math.floor(Math.random() * reviews.length )
  console.log(currentItem)
  showPerson()
}

randomBtn.addEventListener("click", function(){
    randomReview()
})