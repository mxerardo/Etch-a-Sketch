let mycontainer = document.querySelector(".container");

// Función para crear el grid inicial
let createGrid = function(squaresPerSide) {
    // Limpia el contenido actual del contenedor
    mycontainer.innerHTML = "";

    // Ajusta el tamaño de cada celda para que el grid se mantenga dentro del contenedor
    let size = 800 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let createDiv = document.createElement("div");
        createDiv.classList.add("newDiv");
        createDiv.style.width = `${size}px`;
        createDiv.style.height = `${size}px`;
        mycontainer.appendChild(createDiv);
    
        // Evento para colorear cada celda individualmente
        createDiv.addEventListener("mousemove", function() {
            createDiv.style.backgroundColor = "#ffcc00";
        });
    }
}

// Crea el grid inicial de 16x16
createGrid(16);

// Botón para modificar el grid
let onlyButton = document.querySelector(".myButton");

onlyButton.addEventListener("click", function() {
    let userChoose = Number(prompt("Select a number of squares per side for the new grid (up to 100): "));
    
    if (userChoose > 100) {
        alert("You have to write a number under 100");
    } else if (userChoose > 0) {
        createGrid(userChoose);  // Llama a createGrid con el nuevo valor
    } else {
        alert("Please enter a valid positive number");
    }
});
