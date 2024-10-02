/*
Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]

1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
3) Crear un div por cada variable e insertar el valor de dicha variable en el div
4) insertar estos divs en el body del html
*/
const array = ["Joaquin", 1, ["Hola","Adios"], true];
//1
for (let i = 0; i < array.length; i++) {
    localStorage.setItem("variable" + i, JSON.stringify(array[i]));//variable + posicion, valor
}
//2
for (let i = 0; i < array.length; i++) {
   console.log(JSON.parse(localStorage.getItem("variable" + i)));
}
//3
for (let i = 0; i < array.length; i++) {
    const variable =JSON.parse(localStorage.getItem("variable" + i));
    const div = document.createElement("div");
    div.textContent = variable;
    //4
    document.body.appendChild(div);
}
