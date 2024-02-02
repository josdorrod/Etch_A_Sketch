let container = document.querySelector(".container");
let containerStyle = getComputedStyle(container);



//Get container width
let containerH = parseFloat(container.offsetWidth);
let containerV = parseFloat(container.offsetHeight);
let containerBorderH = parseFloat(containerStyle.borderLeftWidth) + parseFloat(containerStyle.borderRightWidth);
let containerBorderV = parseFloat(containerStyle.borderTopWidth) + parseFloat(containerStyle.borderBottomWidth);
let containerWidth = containerH-containerBorderH;
let containerHeight = containerV-containerBorderV;

//Create squeares
let button = document.querySelector("button");
button.addEventListener("click", createSquares);

function createSquares(){

    let numberSquares = prompt("Introduce cantidad de cuadrados por línea y columna");
    numberSquares = numberSquares**2;

    //Eliminar grid existente
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    //Establecer max de 100 cuadrado por linea y columna
    if(numberSquares >10000) alert("La cantidad introducida debe ser menor o igual a 100");

    else{
        let created = 0;
        while(created < numberSquares){
            let square = document.createElement("div");
            square.style.width = (parseFloat(containerWidth)/Math.sqrt(numberSquares)) + "px";
            square.style.height = (parseFloat(containerHeight)/Math.sqrt(numberSquares)) + "px";
            square.className = "square";
            container.appendChild(square);
            created++;
        }

        //Hover Cuadrados
        let hoverSquare = document.querySelectorAll(".square");
        //Se convierte en array ya que el querySelectoAll devuelve un listNode.
        Array.from(hoverSquare).forEach(element => {
            element.addEventListener("mouseover", rellenarBackground);

            function rellenarBackground(){
                element.style.backgroundColor = "black";
            }
        });
    }
    //let numberSquares = 16*16;
}




