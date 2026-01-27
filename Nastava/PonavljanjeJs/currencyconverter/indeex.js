

document.querySelector("#tipka").addEventListener("click",function (){

    let a = document.querySelector("#ulaz").value;
    document.querySelector("#usd").textContent = a * 73675.22 + " Usd";
    document.querySelector("#eur").textContent = a * 87925.75 + " Eur";

});