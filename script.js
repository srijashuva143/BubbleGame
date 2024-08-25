
var score=0;
var getrn=0;
var bgcolor ='#' + Math.floor(Math.random()*16777215).toString(16);
var mains=document.getElementById("main");
    mains.style.backgroundColor=bgcolor;
var score=0;
function increaseScore(){
    score+=10;
    document.querySelector('#scoreval').textContent=score;
}

function GetHit(){
     getrn=Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=getrn;
}
function MakeBubble(){
    var clutter='';
    let width = window.innerWidth;
    if(width<600){
        for (let i = 0; i < 60; i++) {
            color='#' + Math.floor(Math.random()*16777215).toString(16);
            n=Math.floor(Math.random() *10);
          clutter+=`<div class="bbl" style="background-color:${color}">${n}</div>`; 
        }
    }
        else {
    
        for (let i = 0; i < 234; i++) {
            color='#' + Math.floor(Math.random()*16777215).toString(16);
              n=Math.floor(Math.random() *10);
                clutter+=`<div class="bbl" style="background-color:${color}">${n}</div>`; 
                }
        }
document.getElementById('pbtm').innerHTML=clutter;
}
var timer=60;
function RunTimer(){
 var timeint=setInterval(()=>{
        if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent=timer;
    }
    else{
        clearInterval(timeint)
        document.querySelector('#pbtm').innerHTML=`Game Over! <br/><br/> Your Score is ${score} <br/> <br/> Refresh The Page To Start Again...`;
    }
    },1000);
    
}

document.querySelector('#pbtm').addEventListener('click',function(details){
  var nn =Number(details.target.textContent);
  
if(getrn===nn){
    increaseScore();
    MakeBubble();
    GetHit();
}
else{
    MakeBubble();
    GetHit();
}
})
RunTimer();
GetHit();
MakeBubble();

