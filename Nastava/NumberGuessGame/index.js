let count =0;

let number = Math.floor((Math.random()*100 ) +1);
let pog = document.getElementById("#numbId");

let inp = document.getElementById("#try");
let mes = document.getElementById("#msg");
let lab = document.getElementById("#trxLb");

function guess(event){
    let value1 = parseInt(pog.value);
    event.preventDefault();
    if(number === pog){
      mes.innerHTML ="Pogodio si!"
    }
    else if(pog > number){
        mes.innerHTML = "Manji broj!"
        count=count+1;
        lab.innerHTML = "Pokušaji: "+ count;
    }
        else if(pog < number){
        mes.innerHTML = "Vecći broj!"
        count=count+1;
        lab.innerHTML = "Pokušaji: "+ count;
    }

}


function NewGame(){
    count =0;
    lab.innerHTML = "Pokušaji: 0!"
}
