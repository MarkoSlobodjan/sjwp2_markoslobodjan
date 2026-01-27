

document.querySelector("#tipka").addEventListener("click",function (){

    let a = document.querySelector("#ulaz").value;
    document.querySelector("#usd").textContent = ((a * 9/5) +32 )+ " F";
    document.querySelector("#eur").textContent = (a*1 + 271*1) +" K";

});