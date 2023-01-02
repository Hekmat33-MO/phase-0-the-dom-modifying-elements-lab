// Write your code here!
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
const myName = "Hekmat";
newHeader.textContent = `${myName} is the champion`;