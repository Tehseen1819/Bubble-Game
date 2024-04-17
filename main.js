var timerval = document.querySelector("#timer");
var pbtm =document.querySelector("#pbtm");
var time = 60;
var score=0;
var rn=0;
        console.log(main);
function updateScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
function makeBubble() {
    var clutter = "";
    for (var i = 0; i < 150; i++) {
      clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
  
    var btm = document.querySelector("#pbtm");
    btm.innerHTML = clutter;
  }
function runTimer() {
  var timer=setInterval(function () {
    if (time >= 0) {
      timerval.textContent = time;
      time--;
    }
    else{
        clearInterval(timer);
        pbtm.innerHTML =`<h1>Game Over </h1>`;    
    }
  }, 1000);
}

function getNewHit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rn;
}

pbtm.addEventListener("click", function(dets){
   var clickNum = Number(dets.target.textContent);
   if(rn === clickNum)
   {
    updateScore();
    getNewHit();
    makeBubble();
   }
})

// updateScore();
runTimer();
makeBubble();
getNewHit();