let a = Math.floor((Math.random()*6 ) +1)
let b = Math.floor((Math.random()*6 ) +1)

console.log(a);

let c="./images/dice"+a+".png";
let d="./images/dice"+b+".png";

document.querySelector(".img1").setAttribute("src",c);
document.querySelector(".img2").setAttribute("src",d);

if(a > b){
    document.querySelector("h1").innerHTML = " 🎉Player 1 wins ";
}
else if(a === b){
      document.querySelector("h1").innerHTML = " Draw";
}
else{
      document.querySelector("h1").innerHTML = " 🎉Player 2 wins ";
}