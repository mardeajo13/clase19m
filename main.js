//solucion Tarea e clase anterior: 
//teniamos que crear una fx que se llame ``contar letras´´ e iba a recibir como 1 parametro (abccc..) => {a:1, b:2, c:3, d:4, e:5}

//let contarLetras = 'abbcccddddeeeee';
//let letras = contarLetras.split('');
//let cantidadLetras = letras.reduce((contadorLetra, letra) => {
//    contadorLetra[letra] = (contadorLetra[letra] || 0) + 1;
//    return contadorLetra;
//}, {});

console.log('-------- TAREA-------\n');
//otra manera para resolverlo: hecho por el profe:
const contarLetras = (string) => {
    return [...string].reduce((acc, value) => {
        return {
            ...acc,
            [value]: acc[value] ? ++acc[value] : 1,   
        };
    }, {});
};

//console.log(contarLetras('abbcccddddeeeee'));
console.log(contarLetras('abbcccddddeeeeeaaaa'));

//REPASO término: SPREAD (los objetos no son tan iterables pero se pueden expandir x las propiedades. En el caso e los ARRAYS y String los expande completamente)

let mistring = "abbcccddddeeeeeaaaa";
let toArray = [...mistring];
console.log(...toArray);

let obj = {
    prop: 'lala' ,
    pro2: 'lolo' ,
};

let obj2 = {
    ...obj,
    miprop: 'lele' ,
};
console.log(obj2);


console.log('\n');
console.log('-------- MeTOdOS-------\n');
//1) Metodos (44min): son fx que estan metidas dentro de 1 
// ANOTACION: cuando trabajamos con metoos , no usamos arrow function ( => )
const doMath = {
    multiplicar: function (a, b) {
        return a * b;
    },
    sumar: function (a, b) {
        return a + b; 
    },
    restar: function (a, b) {
        return a - b; 
    },
    dividir: function (a, b) {
        return a / b; 
    },
};
console.log(doMath.multiplicar(5, 5));
console.log('\n')

//la versión + corta para hacer lo mismo:
const doMathV2 = {
    multiplicar(a, b) {
        return a * b;
    },
    sumar(a, b) {
        return a + b; 
    },
    restar(a, b) {
        return a - b; 
    },
    dividir(a, b) {
        return a / b; 
    },
};
console.log(doMathV2.multiplicar(5, 5));
console.log('\n')

//2) THIS - es una palabra reservada - 
// Hace referencia al scope de su contexto de ejecucion
// A veces hace referencia al scope GLOBAL (browser = window / Node = GLobal), pero
// otras veces no es asi, sino que hace referencia a el objeto que lo contiene
//Peroooo tampoco esto es una regla general, sino que puee cambiar dependiendo el contexto de ejecución
//console.log(global);

//1:13: En una fx declarada THIS apunta al objeto Windows
function hola() {
    console.log(this);
}

//Con los objetos la cosa se pone interesante cuando creamos un metodo dentro del objeto, THIS va hacer referencia al mismo objeto
//Esto no siempre es asi, pero para los casos que vamos a ver si lo es.  (1:15 hs)
//const perrito = {
  //  sonido: 'GUAUF!',
    //ladrar() {
      //  console.log(this);
    //},
//};
//el resultao se ve en el NAVEGAOR

//const alumno = {
  //  nombre: 'Luis',
   // apellido:'Casella',
   // nombreCompleto() {
   //     console.log(`El Alumno es: ${this.nombre} ${this.apellido}`);
    //},
//};
//el resultao se ve en el NAVEGAOR 1:22HS

//3.A) REPASO: destructuracion/destructuring de arrays y objetos

let array = [1, 2];
let [uno, dos] = array;

console.log(uno, dos);

let objlala = {
    prop1: 'lala',
    prop2: 'lolo',
};
let {prop1, prop2} = objlala;
console.log(prop1, prop2);

//3B) como convertir valores de un objeto a un array: + nuevas sintaxis-codigo-

const alumno = {
    nombre: 'Luis',
    apellido:'Casella',
    notas: {
        algebra: 10,
        fisica: 8,
        quimica: 10,
    },
    nombreCompleto() {
        let { nombre, apellido } = this; //en este caso THIS es el objeto -alumno
        return `${nombre} ${apellido}`;
    },
    promedio() {
        let materias = Object.keys(this.notas);
        //traduccion: ["algebra", "fisica", "quimica"]
        return (
            materias
             .map((materia) => {   
            //alumno.notas['algebra']
            return this.notas[materia];
            //[10,8,10] - Resultao Final e toas las iteraciones
             })
            .reduce((acc, val) => acc + val) / materias.length //acc = acumulaor  y val = valor
        );
    },
    printPresentacion() {
        console.log(this);
        console.log(
            `El alumno ${this.nombreCompleto()} tiene un promedio de ${this.promedio()}`
        );
    },
};