const app = document.getElementById("app");
const sectionFranca = document.createElement("section");
const divAzul = document.createElement("div");
const divBranca = document.createElement("div");
const divVermelha = document.createElement("div");

document.body.style.backgroundColor = "#999";

sectionFranca.style.margin = "50px";
sectionFranca.style.float = "left";

divAzul.style.backgroundColor = "blue";
divAzul.style.width = "75px";
divAzul.style.height = "150px";
divAzul.style.float = "left";

divBranca.style.backgroundColor = "white";
divBranca.style.width = "75px";
divBranca.style.height = "150px";
divBranca.style.float = "left";

divVermelha.style.backgroundColor = "red";
divVermelha.style.width = "75px";
divVermelha.style.height = "150px";
divVermelha.style.float = "left";

sectionFranca.appendChild(divAzul);
sectionFranca.appendChild(divBranca);
sectionFranca.appendChild(divVermelha);

app.appendChild(sectionFranca);
