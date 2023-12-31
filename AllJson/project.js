let projectbox = document.querySelector("#projectbox");
let projecttoolsname = document.querySelector(".project-name-tools");
let projectJson = [
  {
    id: 1,
    title: "Random Color Generator",
    img: "./images/randomcolor.webp",
    link: "./Projectpage/Randomcolor/rcolor.html",
    description:
      "Exploring the World of Colors with a Random Color Generator in HTML",
      tools: {
        tool1:'HTML',
        tool2:'CSS',
        tool3:'Javascript',
      },
  },
  {
    id: 2,
    title: "Counter Number",
    img: "./images/counternumber.png",
    link: "./Projectpage/Counter/counter.html",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tools: {
        tool1:'HTML',
        tool2:'CSS',
        tool3:'Javascript',

      },
  },
  {
    id: 3,
    title: "Puzzle Game",
    img: "./images/puzzle-bg.jpg",
    link: "./Projectpage/Puzzle/puzzle.html",
    description:
      "Puzzle video games make up a broad genre of video games that emphasize puzzle solving. The types of puzzles can test problem-solving skills, including logic, pattern recognition, sequence solving.",
      tools: {
        tool1:'HTML',
        tool2:'CSS',
        tool3:'Javascript',
        tool4:'Jquery',

      },
  },
  {
    id: 4,
    title: "Random Jokes",
    img: "./images/RandomJokes.jpg",
    link: "./Projectpage/Jokes/index.html",
    description:
      "Funny short jokes make you laugh out loud, most times uncontrollably.",
      tools: {
        tool1:'HTML',
        tool2:'CSS',
        tool3:'Javascript',
        tool4:'Bootstrap , Random API ',

      },
  },
  {
    id: 5,
    title: "Crypto_currency",
    img: "./images/crytpo_currency.jpg",
    link: "./Projectpage/Currency/test.html",
    description:
      "Crypto_currency here you can see the current price of the crypto_currency.",
      tools: {
        tool1:'HTML',
        tool2:'CSS',
        tool3:'Javascript',
        tool4:'Bootstrap , Random API ',

      },
  },
  
];

function ProjectShow(){
  let html = "";
projectJson.forEach((item) => {
  html += `<div class="project-box-content box-shadow">
<img
  class="sm-round"
  src="${item.img}"
  alt=""
/>
<div class="project-name-tools">
  <li><a href="">${item.tools.tool1}</a></li>
  <li><a href="">${item.tools.tool2}</a></li>
  <li><a href="">${item.tools.tool3}</a></li>
  <li><a href="">${item.tools.tool4}</a></li>
  

</div>
<div class="project-name-title-link">
  <h1>${item.title}</h1>
  <div class="link-redirect">
    <a href="${item.link}" target="_blank">
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </div>
</div>
<p>${item.description}</p>
</div>`;

projectbox.innerHTML = html;
});
}

ProjectShow();


// ----------homepage---jsapply-start----------
let box=document.querySelector(".box1");
function projectcount(){
  let projectcount=Object.keys(projectJson).length;
  let homecounterhtml='';
  homecounterhtml +=`<div class="box1-container">
<div class="box1-item1 sm-round box-shadow">
  <h1>${projectcount}</h1>
  <p class="mfont">Completed Projects</p>
</div>
<div class="box1-item2 sm-round box-shadow">
  <h1>Professional</h1>
  <p>HTML,CSS,Javascript</p>
</div>
<div class="box1-item3 sm-round box-shadow">
  <h1>50+</h1>
  <p>Satisfied Clients</p>
</div>
<div class="box1-item4 sm-round box-shadow">
  <h1>1+ Years</h1>
  <p>web development</p>
</div>
</div>`
box.innerHTML=homecounterhtml;
}
projectcount();
// homepage-jsapply--end---




// -------------FeaturesProjectslider-start---------

setInterval(()=>{
  function sliderprojectImg(){
    let slides = document.querySelectorAll('.slides');
  let counter=0;
  slides.forEach((slide,index)=>{
      slide.style.left = `${index*100}%`;
  });
  
  document.querySelector('.next').addEventListener('click',()=>{
      counter++;
      carousel();
  });
  document.querySelector('.prev').addEventListener('click',()=>{
      counter--;
      carousel();
  });
  
  function carousel(){
      if(counter===slides.length){
          counter=0;
      }
      if(counter<0){
          counter=slides.length-1;
      }
      slides.forEach((slide)=>{
          slide.style.transform = `translateX(-${counter*100}%)`;
      });
  
  }
  }
  sliderprojectImg();
  
},2000)


// -------------FeaturesProjectslider-end---------


