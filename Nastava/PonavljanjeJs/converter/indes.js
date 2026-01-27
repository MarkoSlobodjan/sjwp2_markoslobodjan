


let input = document.querySelector("#ulaz");



document.querySelector("#tipka").addEventListener("click",function (){

    let a = input.value;
    document.querySelector("#pound").textContent = a *2.20462;
    document.querySelector("#ounce").textContent = a * 35.274;
    document.querySelector("#gram").textContent = a * 1000;
    
});

