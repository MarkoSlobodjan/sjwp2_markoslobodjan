let prviUnos;
let drugiUnos;

function odabir(od) {
       
    if(od === 1){
        prviUnos = document.querySelector("#unosOdbair1").innerHTML = "Unesi R1 (Ω)):";
        drugiUnos = document.querySelector("#unosOdbair2").innerHTML = "Unesi R2 (Ω)):";
    }
    else if(od === 2){
        prviUnos = document.querySelector("#unosOdbair1").innerHTML = "Unesi R1 (Ω)):";
        drugiUnos = document.querySelector("#unosOdbair2").innerHTML = "Unesi R2 (Ω)):";
    }
    else if(od === 3){
        prviUnos = document.querySelector("#unosOdbair1").innerHTML = "Unesi C1 (µF)):";
        drugiUnos = document.querySelector("#unosOdbair2").innerHTML = "Unesi C2 (µF)):";
    }
    else if(od === 4){
        prviUnos = document.querySelector("#unosOdbair1").innerHTML = "Unesi C1 (µF)):";
        drugiUnos = document.querySelector("#unosOdbair2").innerHTML = "Unesi C2 (µF)):";
    }

}