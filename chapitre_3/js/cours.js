
let lan = document.getElementById('langages').innerHTML += '<li id="c">C</li>';
//console.log(lan);
//document.getElementById('langages').innerHTML = "";
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
//document.querySelector("h1").setAttribute("id", "titre");

//document.querySelector("h1").setAttribute("id", "lala");
//console.log(document.querySelector('h1').classList.remove("debut"));
//console.log(document.querySelector('h1').classList.add("newClass"));
//console.log(document.querySelector('h1'));
//document.querySelector('h1').setAttribute("style", "color: teal;");

let para = document.createElement("p");
para.textContent = "yolo les gars";
para.id = "para";
document.getElementById("contenu").appendChild(para);

let link = document.createElement("a");
link.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"
link.textContent = " c'est sacha";
document.getElementById("para").appendChild(link);

//document.getElementById("contenu");