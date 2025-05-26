const elements = [];
const addItemBtn = document.querySelector("#addItemBtn");
const liste = document.querySelector("#liste");

addItemBtn.addEventListener("click", function(e) {
        elements.push(`Élément X`);
        console.log(elements);
        let elementsLi = document.createElement("li");
        elementsLi.textContent = `Élément ${elements.length}`;
        liste.append(elementsLi);

}) 