//inferencia de tipos
var cincoNumber = 5; //number
var cincoString = "cinco"; //string
var booleanValue = true; //boolean
var persona = {
    name: "Pepe",
    age: 30,
};
console.log(typeof persona);
console.log(typeof persona.name);
console.log(typeof persona.age);
//asignación explícita de tipos
var nombre = "Miguel";
console.log(typeof nombre);
var number = 2;
console.log(number);
var booleanValueConst = true;
console.log(booleanValueConst);
//le indicamos al obj que implemente la interface ObjType creada anteriormente
//de esta forma declaramos los tipos que manejara el objeto
var personaObjType = {
    name: "Pepe",
    age: 30,
};
console.log(typeof personaObjType);
//declaramos una función con los tipos de sus parámetros y con el tipo de retorno
function sumar(a, b) {
    return a + b;
}
var resultSuma = sumar(10, 5);
console.log(resultSuma);
console.log(typeof sumar);
//variable con multiples tipos
var resultado;
resultado = 10;
console.log(resultado);
console.log(typeof resultado);
resultado = "Éxito";
console.log(resultado);
console.log(typeof resultado);
//tipos de arrays
var numeros = [1, 2, 3, 4, 5];
var palabras = ["Hola", "Mundo"];
// let hola = "hola"
// let aaaa = null
// let b: undefined = undefined
// //con any le decimos a ts que ignore el tipo (evitar usar any)
// let anyValue: any = "any"
// //con unknown le decimos a ts que nosabemos cual es el tipo
// let unknownValue: unknown = "unknown"
