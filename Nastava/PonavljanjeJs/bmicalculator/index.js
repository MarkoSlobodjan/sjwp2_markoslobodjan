
let pUnos1 = document.querySelector("#prvi");
let pUnos2 = document.querySelector("#drugi");

document.querySelector(".izracunaj").addEventListener("click", function (){
    let a = pUnos1.value;
    let b = pUnos2.value;

    const bmi = b / (a * a);
    return bmi.toFixed(2); 
  
    document.querySelector("#rez").innerHTML = bmi;
});