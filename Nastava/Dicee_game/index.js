function rand(){
      return Math.floor((Math.random()*6 ) +1);
}


let a = rand();
let b = rand();

let a2 = rand();
let b2 = rand();

console.log(a);
console.log(b);
console.log(a2);
console.log(b2);


let e = a+b;
let f = a2+b2;

let c="./images/dice"+a+".png";
let d="./images/dice"+b+".png";
let c2 ="./images/dice"+a2+".png";
let d2 ="./images/dice"+b2+".png";

c


document.querySelector(".img1").setAttribute("src",c);
document.querySelector(".img2").setAttribute("src",d);
document.querySelector(".img3").setAttribute("src",c2);
document.querySelector(".img4").setAttribute("src",d2);


console.log(e);
console.log(f);
document.querySelector(".ispis1").innerHTML = e;
document.querySelector(".ispis2").innerHTML = f;



if(e > f){
    document.querySelector("h1").innerHTML = " 🎉Player 1 wins ";
}
else if(e === f){
      document.querySelector("h1").innerHTML = " Draw";
}
else{
      document.querySelector("h1").innerHTML = " 🎉Player 2 wins ";
}