const bgBody = document.querySelector("body");
const IMG_NUMBER=4;

function paintImage(imgNumber){
  const img = new Image();
  img.src=`./images/${imgNumber+1}.jpg`;
  img.classList.add("bgImage");
  bgBody.prepend(img);
}


function genRandom(){
  const number =Math.floor(Math.random()*IMG_NUMBER);
  return number;

}
function init(){
const randomNumber=genRandom();
paintImage(randomNumber);

}
init();
