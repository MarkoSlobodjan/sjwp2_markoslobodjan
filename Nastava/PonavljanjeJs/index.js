document.querySelector("#tipka").addEventListener("click",function (){

    let a = "#"+ Math.floor(Math.random()* 0xffffff).toString(16)
    document.querySelector("body").style.background = a;
});





// document.addEventListener("keydown",function (event){
//     makeSound(event.key);
//     BtananAnamation(event.key);
// });
