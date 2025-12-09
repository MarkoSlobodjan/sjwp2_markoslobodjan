let a;
let b;

function zbroj() {
    a = Number(document.getElementById("prvi").value); 
    b = Number(document.getElementById("drugi").value); 
    document.getElementById("rez").textContent = a + b;
}

function oduzmi() {
    a = Number(document.getElementById("prvi").value); 
    b = Number(document.getElementById("drugi").value); 
    document.getElementById("rez").textContent = a - b;
}

function div() {
    a = Number(document.getElementById("prvi").value); 
    b = Number(document.getElementById("drugi").value); 
    document.getElementById("rez").textContent = a / b;
}

function mnoz() {
    a = Number(document.getElementById("prvi").value); 
    b = Number(document.getElementById("drugi").value); 
    document.getElementById("rez").textContent = a * b;
}

function clear() {
    window.location.reload()
}
