let container = document.querySelector(".container");

//Limitar altura y anchura del container a 20 veces la del cuadrado. Se le suma dos para contrarestar el borde del container.
container.style.width = 16 * 20 + 2 + "px";
container.style.height = 16 * 20 + 2 + "px";

//Crear squares
let numberSquares = 16*16;
let created = 0;

while(created < numberSquares){
    let square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    created++;
}

let hoverSquare = document.querySelectorAll(".square");

//Se convierte en array ya que el querySelectoAll devuelve un listNode.
Array.from(hoverSquare).forEach(element => {
    element.addEventListener("mouseover", rellenarBackground);

    function rellenarBackground(){
        element.style.backgroundColor = "black";
    }
});


