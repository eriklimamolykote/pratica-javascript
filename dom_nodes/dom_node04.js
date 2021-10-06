const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("Isto é novo.");
para.appendChild(node);
parent.replaceChild(para, child);