const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafoClase = document.querySelector(".parrafo-clase");
const parrafoId = document.querySelector("#parrafo-id");
const input = document.querySelector("input");
//querySelectorAl("p") nos muestra todos los elementos p
//getElementsByClassName("parrafo-clase") nos selecciona todas las clases
//getElementById("parrafo-id") nos selecciona el id

console.log(h1);
console.log(input.value)
//llenar el input y ejecutar la linea de arriba nuevamente y nos dara el valor de input.value
console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    input,
});

//En innerHTML se puede añadir codigo y en innerText solo se puede añadir texto
h1.innerHTML = "Manipulando desde js"

//Tambien podemos leer atributos de las etiquetas del HTML en el js
//Esto se puede hacer con getAttribute y setAttribute
let atributoH1=h1.getAttribute("pantalla")
console.log(atributoH1)
//Tambien se puede leer clases, solo hay que mandar a llamar en el getAttribute "class"
//let atributoClase=h1.getAttribute("class");
//console.log(atributoClase)

//Para cambiarle un atributo por ejemplo la clase a una etique utilizamos setAttribute
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'nuevaClaseH1');

//Si lo que deseamos es modificar especificamente las clases podemos utilizar ha.classList.add("nuevaClase")
h1.classList.add("SegundaNuevaClaseH1")
//Para quitar una clase se puede utilizar  h1.classList.remove("nuevaClaseH1")
h1.classList.remove("nuevaClaseH1")
//h1.classList.toggle("") nos ayuda a colocar o quitar clases
//h1.classList.contains("") Nos ayuda a crear una especie de condicional dependiendo si nuestro elemento tiene o no la clase que se pregunta

//En un input.value="nuevo valor del input" se puede cambiar directamente el vamor a diferencia del getAttribute y setAttibute
input.value="abc"


//Tambien se puede crear nuevos elementos
const img= document.createElement('img')
img.setAttribute('src', 'https://static.platzi.com/media/workshop/Badge-EJ.png')
parrafoId.append(img);

//Si lo que necesitamos es borrar todo lo que hay en el parrafo-id
parrafoId.innerHTML=""
parrafoId.append(img);
//Se coloca un innerHTML="" Vacio, con eso borramos lo que esta con aterioridad


const h1E=document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult= document.querySelector('#result');

//Number(combierte el valor a numeros)
function btnOnclick() {
    const sumaInputs =Number(input1.value) + Number(input2.value);
    pResult.innerText= "Resultado "+ sumaInputs;
    
}

//Mismo ejercicio con addEventListener
const h1aEL=document.querySelector('h1aEL');
const form=document.querySelector('#form');
const input3= document.querySelector('#calculo3');
const input4= document.querySelector('#calculo4');
const btn2 = document.querySelector('#btnCalcular2');
const pResult2= document.querySelector('#result2');

form.addEventListener('submit', btnOnclick2); 

function btnOnclick2(event) {
    //El mismo ejercicio con los botones afuera del form en el html nos evita bloquear recargar la pagina con event.preventDefault();
    //console.log({event});
    event.preventDefault();
    const sumaInputs =Number(input3.value) + Number(input4.value);
    pResult2.innerText= "Resultado "+ sumaInputs;
    
}


//fin