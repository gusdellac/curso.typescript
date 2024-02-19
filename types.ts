//inferencia de tipos
let cincoNumber = 5; //number
let cincoString = "cinco"; //string
let booleanValue = true; //boolean

const persona = {
    name : "Pepe",
    age : 30,
}

console.log(typeof persona);
console.log(typeof persona.name);
console.log(typeof persona.age);

//asignación explícita de tipos
const nombre: string = "Miguel";
console.log(typeof nombre);
const number: number = 2
console.log(number);
const booleanValueConst: boolean = true;
console.log(booleanValueConst);


//Se puede definir la estructura de un objeto utilziando interfaces o tipos
interface ObjType {
    name : string;
    age: number;
}

//le indicamos al obj que implemente la interface ObjType creada anteriormente
//de esta forma declaramos los tipos que manejara el objeto
const personaObjType: ObjType = {
    name : "Pepe",
    age : 30,
}
console.log(typeof personaObjType);

//declaramos una función con los tipos de sus parámetros y con el tipo de retorno
function sumar (a: number, b: number): number {
    return a + b;
}

const resultSuma = sumar(10, 5);
console.log(resultSuma);
console.log(typeof sumar);


//variable con multiples tipos
let resultado: number | string;
resultado = 10;
console.log(resultado);
console.log(typeof resultado);

resultado = "Éxito";
console.log(resultado);
console.log(typeof resultado);

//tipos de arrays
let numeros : number[] = [1, 2, 3, 4, 5];
let palabras : Array<string> = ["Hola", "Mundo"];






// let hola = "hola"
// let aaaa = null
// let b: undefined = undefined

// //con any le decimos a ts que ignore el tipo (evitar usar any)
// let anyValue: any = "any"

// //con unknown le decimos a ts que nosabemos cual es el tipo
// let unknownValue: unknown = "unknown"

