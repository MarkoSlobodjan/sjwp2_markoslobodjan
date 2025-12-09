//document.query



//1
document.getElementById("title").textContent="Pozdrav";

//2
document.getElementById("second").style.color ="blue"

//3
const checkbox = document.querySelector("input[type='checkbox']");
const isChecked = checkbox.checked;
console.log("Checkbox je označen:", isChecked);

//4
document.querySelector(".btn").classList.add("active");

//5
document.querySelector("li a").setAttribute("href", "https://www.bing.com");
//6
document.getElementsByTagName("li")[0].textContent = "Promjena";

//7
document.getElementsByTagName("li")[1].classList.remove("list");

//8
document.querySelectorAll("a")[1].setAttribute("href", "https://yahoo.com");

//9
let a =document.querySelectorAll("a #list2")[1].getAttribute("href");
console.log(a);
//10
document.querySelector("a").setAttribute("title", "Web stranica");
//11
document.getElementsByClassName(".list2")[1].classList.remove("list2");
//12
document.querySelectorAll("li #list2")[2];
//13
document.getElementsByTagName("h2")[0].style.backgroundColor ="yellow";
//14
document.querySelector("ol #list2").innerHTML ="";
//15
document.getElementsByClassName("btn").textContent("Kliklunto");
//16
document.getElementsByTagName("a")[0].style.color = "green"
//17
document.getElementsByClassName("list")[0].style.fontSize = "20px";
//18
document.querySelector("#list2 li")[0].textContent ="Novi tekst";
//19
document.getElementsByTagName("input")[0].setAttribute("checked", "true");
//20
document.querySelectorAll("li .list")[1].style.backgroundColor = "blue";
