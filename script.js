function gridDisplay(makeDivs) {
    const container = document.querySelector('.container');

    for (let i = 0; i < makeDivs; i++) {
        const div = document.createElement('div');
        div.style.cssText = " height: 16px; width: 16px";
        div.className = "boxes";
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "#454545";
        });
    }
    container.style.width = "256px";
    container.style.height = "256px";


}

gridDisplay(256);

function createGrid() {
    const gridSize = parseInt(prompt("How much Grid Size do you want? (Max: 100)"));
    const container = document.querySelector('.container');
    container.style.width = "500px";
    container.style.height = "500px";
    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            const div = document.createElement('div');
            const val = parseInt(container.style.width) / gridSize;
            div.style.width = `${val}px`;
            div.style.height = `${val}px`;
            console.log(div.style.width);
            console.log(parseInt(container.style.width));
            div.style.height = (container.style.width) / gridSize;
            div.className = "boxes";
            container.appendChild(div);
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "#454545";
            });
        }
    }

}
const button = document.getElementById('change');

button.addEventListener('click', () => {
    let divs = document.querySelectorAll('.boxes');
    divs.forEach(divs => {
        divs.remove();
    });
    createGrid();
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    const divs = document.querySelectorAll('.boxes');
    divs.forEach(divs => {
        divs.style.backgroundColor = "white";
    });
});

