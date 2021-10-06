const para = document.createElement("p");
const node = document.createTextNode("Isto é novo.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);