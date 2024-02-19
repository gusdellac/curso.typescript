//typescript es compilado
//typescript es transpilado a javascript para que puede entenderlo el navegador

let a = "hola" //string
console.log(typeof a);
//a = true; // booelan , no se puede reasignar otro tipo a al variable si fue inicializada con otro tipo

//se pueden indicar los tipos de los parámetros de una función
function suma (a: number, b: number): number {
    return a + b;
}

let result = suma(3 , 2);
console.log(result);