// let hello = "world";

// const getFullName = (name:String,surname:String):String => {
//     return name + " " + surname;
// }
// console.log(getFullName("Brayan","Bertan"));


// interface IUser{
//     name:string;
//     age?:number;
//     teste():string
// }


// let user:IUser = {
//     name : 'Kyo',
//     teste() {return 'Hello' + this.name}
// }

// console.log(user.name);


// interface UserInterface {
//     name:String
//     surname:String
// }

// let user: UserInterface | null = null;

// let username: string = "Kyo";

// let pageName: string | number = "1";

// let errorMessage: string | null = null;


// type ID = string;
// type MaybePopularTag = ID | null;

// const doSomething = ():void => console.log('a');

// let a:string = '1';

// let b:number = a as number;

// const someElement = document.querySelector('.test') as HTMLInputElement;

// console.log('test');
// // someElement.addEventListener('blur', (event) => {
// //     const target = event.target as HTMLInputElement;
// //     console.log(target.value)
// // });


// interface IUser {
//     teste():string;
// }
// class User implements IUser{
//     private name:string;
//     private surname:string;
//     readonly unchangableName:String;
//     static readonly maxAge = 50;
//     constructor(name:string,surname:string){
//         this.name = name;
//         this.surname = surname;
//         this.unchangableName = name;
//     }
//     get fullName():string { 
//         return this.name + ' ' + this.surname;
//     }

//     teste():string { 
//         return this.name + ' ' + this.surname;
//     }

// }


// class Admin extends User{
//     private editor:string;

//     get editorG():string { 
//         return this.editor;
//     }

//     set editorS(editor:string){
//         this.editor = editor;
//     }
        
// }




// const addId = <T>(obj:T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id
//     }
// }


// const addId = <T extends object>(obj:T) => {
//     const id = Math.random().toString(16);
//     return {
//         ...obj,
//         id
//     }
// }
// interface IUser<T>{
//     name: string;
//     data: T;
// }

// const user:IUser<{meta:string}> = {
//     name: 'Kyo',
//     data:{
//         meta:"foo",
//     }
// }

// const user1:IUser<string[]> = {
//     name: 'Kyo',
//     data:['a']
// }

// const result = addId(user);
// console.log(result);

// enum ExemploEnum {
//     Um,
//     Dois,
//     Tres
// }

// let arrayAssociativo2 = [1, 'string', false];
// console.log(arrayAssociativo2);



// (function() {

//     function soma(a: number | string, b: string | number): string | number {
//         if (typeof a === 'number' && typeof b === 'number') {
//             return (a + b);
//         } 
//         // else {
//         //     return `${a}${b}`;
//         // }
//         if (typeof a === 'string' && typeof b === 'string') {
//             return (a + b);
//         } 
//     }

//     console.log(soma(3, 4));
//     console.log(soma('1', 'a'));
    
// })();


// function rolandGarros(
//     { typeMatch, typeLabel, round, roundLabel, courtName, durationInMinutes }: { typeMatch?: number; typeLabel?: string; round?: number; roundLabel?: string; courtName?: string; durationInMinutes?: number; } = {}) {
//         return console.log(typeMatch, typeLabel, round, roundLabel, courtName, durationInMinutes);
//     };

//     rolandGarros({typeMatch:3});


// const testeFunc = (param):string => '';


// class Teste{

//     private nome:string;

//     constructor(nome:string){
//         this.nome = nome;
//     }

//     get nomeG():string {
//         return this.nome;
//     }
// }

// let obj = new Teste('a');
// console.log(obj.nomeG)



// const test = (nome:string) =>{
//     return {
//         nome
//     }
// }

// console.log(test('b'));





// (function() {

//     enum DiasSemana {
//         SEG,
//         TER,
//         QUA,
//         QUI,
//         SEX,
//         SAB,
//         DOM
//     }

//     let dia: DiasSemana;
//     console.log(dia);
//     console.log(DiasSemana);    

//     dia = DiasSemana.SEG;
//     console.log(dia);
//     console.log(dia === DiasSemana.SEG);
// })();


const echo = <T>(valor : T) : T => valor;

console.log(echo<string>('b'));

