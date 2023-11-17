let bar = document.querySelector("#bar-show");
let close = document.querySelector("#bar-close");
let aboutmediapage = document.querySelector("#about-media-page");
let homebtn = document.getElementById("home-btn");
let aboutbtn = document.getElementById("about-btn");
let projectbtn = document.getElementById("project-btn");
let servicebtn = document.getElementById("service-btn");
let contactbtn = document.getElementById("contact-btn");
let projecSection = document.getElementById("projectpageSection");
let homepageSection = document.getElementById("homepageSection");
let aboutpageSection = document.getElementById("aboutpageSection");
let contactpageSection = document.getElementById("contactpageSection");
let viewall = document.getElementById("viewall");
viewall.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollHeight = 0;
  homepageSection.classList.add("hide");
  homepageSection.classList.remove("show");
  projecSection.classList.remove("hide");
  projecSection.classList.add("show");
  aboutpageSection.classList.add("hide");
  aboutpageSection.classList.remove("show");
});

projectbtn.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
  e.preventDefault();
  homepageSection.classList.add("hide");
  homepageSection.classList.remove("show");
  aboutpageSection.classList.add("hide");
  aboutpageSection.classList.remove("show");
  projecSection.classList.remove("hide");
  projecSection.classList.add("show");
});
// ------aboutpageSection------
aboutbtn.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
  e.preventDefault();
  homepageSection.classList.add("hide");
  homepageSection.classList.remove("show");
  projecSection.classList.add("hide");
  projecSection.classList.remove("show");
  aboutpageSection.classList.remove("hide");
  aboutpageSection.classList.add("show");
});
homebtn.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
  e.preventDefault();
  homepageSection.classList.remove("hide");
  homepageSection.classList.add("show");
  projecSection.classList.add("hide");
  projecSection.classList.remove("show");
  aboutpageSection.classList.add("hide");
  aboutpageSection.classList.remove("show");
});


// --servicpageSection--
// servicebtn.addEventListener('click',(e)=>{
//   document.documentElement.scrollTop = 0;
//   event.preventDefault();
//   homepageSection.classList.add('hide');
//   homepageSection.classList.remove('show');
//   projecSection.classList.add('hide');
//   projecSection.classList.remove('show');
//   aboutpageSection.classList.remove('hide');
//   aboutpageSection.classList.add('show');
//   servicepageSection.classList.remove('hide');
//   servicepageSection.classList.add('show');
// });

// contactpage-------------
contactbtn.addEventListener('click',(e)=>{
  document.documentElement.scrollTop = 0;
  event.preventDefault();
  homepageSection.classList.add('hide');
  homepageSection.classList.remove('show');
  projecSection.classList.add('hide');
  projecSection.classList.remove('show');
  aboutpageSection.classList.add('hide');
  aboutpageSection.classList.remove('show');
  // servicepageSection.classList.add('hide');
  // servicepageSection.classList.remove('show');
  contactpageSection.classList.remove('hide');
  contactpageSection.classList.add('show');
});
