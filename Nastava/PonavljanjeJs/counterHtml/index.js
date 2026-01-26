let broj = 0;

document.querySelector("#rez").innerHTML = broj;

document.querySelector("#minus").addEventListener("click", function(){
    broj = broj -1;
    document.querySelector("#rez").innerHTML = broj;
});

document.querySelector("#plus").addEventListener("click", function(){
    broj = broj +1;
    document.querySelector("#rez").innerHTML = broj;
});

