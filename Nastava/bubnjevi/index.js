// let zvuk = {"crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"}

for (let i = 0; i < document.querySelectorAll(".drum").length;i++ ){
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        let but = this.innerHTML;
        makeSound(but);
        BtananAnamation(but);
    });

}

document.addEventListener("keydown",function (event){
    makeSound(event.key);
    BtananAnamation(event.key);
});


function makeSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
         case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
         case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
         case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
         case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
         case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
         case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

    }

}

function BtananAnamation(currentKey){
    let curb = document.querySelector("." + currentKey);
    curb.classList.add("pressed");
    setTimeout(function() {
        curb.classList.remove("pressed");
    },200)
}