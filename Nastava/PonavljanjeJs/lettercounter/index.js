let duzina=0;

let a = document.querySelector("#ulaz");


document.querySelector("#ulaz").addEventListener("input", function(){
    duzina = a.value.length;
    document.querySelector("#rez").textContent = "Letter count:" + duzina;
});
