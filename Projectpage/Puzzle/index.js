// function randomimge(){
//   const sortable = document.querySelectorAll("#sortable li");

// var nums = [1,2,3,4,5,6,7,8],
// ranNums = [],
// i = nums.length,
// j = 0;

// while (i--) {
// j = Math.floor(Math.random() * (i+1));
// ranNums.push(nums[j]);
// nums.splice(j,1);
// console.log(ranNums)
// }

// ranNums.map((item,index)=>{
// sortable[index].innerHTML = item;
// console.log(item,index);

// });
// }





$(function () {
  // $(".draggable").draggableTouch({
  //   useTransform: true
  // });
  $("#sortable").sortable({
    
    // revert: true
    update: function (event, ui) {
      if (isSorted($("#sortable"))) {
        document.querySelector(".won-vedio").classList.add("show");
        document.querySelector(".right-container,.right-container").classList.remove("hide");
        document.querySelector(".right-container,.right-container").classList.add("show");
        const restartbtn= document.querySelector("#restart-btn");
        restartbtn.addEventListener("click",()=>{
          window.location.reload();
        });
        setTimeout(() => {
          document.querySelector(".won-vedio").classList.remove("show");
          document.querySelector(".won-vedio").classList.add("hide");
        }, 10000);
      }
    },
  });
});






function isSorted(list) {
  var items = list.find("li");
  for (var i = 1; i < items.length; i++) {
    var current = parseInt($(items[i]).text().match(/\d+/)[0]);
    var prev = parseInt(
      $(items[i - 1])
        .text()
        .match(/\d+/)[0]
    );
    if (current < prev) {
      return false;
    }
  }
  return true;
}

function start() {
  let puzzleBox = document.getElementById("puzzle-function");
  let startBox = document.getElementById("start-game");
  puzzleBox.classList.add("show");
  startBox.style.display = "none";
}
