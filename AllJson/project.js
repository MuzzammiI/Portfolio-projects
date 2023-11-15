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
  <h1>Webflow Expert</h1>
</div>
<div class="box1-item3 sm-round box-shadow">
  <h1>50+</h1>
  <p>Satisfied Clients</p>
</div>
<div class="box1-item4 sm-round box-shadow">
  <h1>1 Years</h1>
  <p>Design Experience</p>
</div>
</div>`
box.innerHTML=homecounterhtml;
}
projectcount();
// homepage-jsapply--end---



