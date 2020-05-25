var bollar = [];
bollar[bollar.length] =["hej", "då"];
console.log(bollar[0][0]);





function BackgroundColor (color){
  if(document.body.style.background == color){
    document.body.style.background = "green";
  }else{
    document.body.style.background = color;
  }
}

function skapaBoll(){
  var bollar = [];
  bollar[bollar.length] =["hej", "då"];
  console.log(bollar[0][0]);
  /*alert(bollar.length);
  alert(document.body.clientWidth);*/
}
