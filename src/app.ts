import { Server } from './models/Server'
import dotenv from 'dotenv'

dotenv.config();

const server = new Server;
server.listen();





// ---

// import { genCategories } from "./helpers/genCategories";
// import { genSuppliers } from "./helpers/genSuppliers";
// import { genProducts } from "./helpers/genProducts";
// import { genSales } from "./helpers/genSales";
// import { genTenants } from "./helpers/genTenants";
// import { genDiscounts } from "./helpers/genDiscounts";

// let firstName: string;
// let age: number;
// let isNumber: boolean = true;

// firstName = 'Jeferson';
// age = 23;

// console.log(firstName, age, isNumber);
// console.log(typeof firstName, typeof age, typeof isNumber);
// console.log(typeof age === 'number');


// let arr: number[] | string[] = ['1', '2', '3'];
// console.log(arr);
// console.log(typeof arr);


// let port: number | string = '3000';
// console.log(+port);

// type Person = {
//   firstName: string,
//   age: number,
//   isActive: boolean
// }
// let objPerson: Person = {
//   firstName: 'Jeferson',
//   age: 5,
//   isActive: true
// };

// interface IPerson {
//   firstName: string,
//   age?: number,
//   isActive: boolean
// }
// const objIPerson: IPerson = {
//   firstName: 'Jeferson',
//   // age: 5,
//   isActive: true
// }

// console.log(objIPerson);

// console.log('CATEGORIES');
// console.log(genCategories());
// console.log('SUPPLIERS');
// console.log(genSuppliers());
// console.log('PRODUCTS');
// console.log(genProducts());
// console.log('SALES');
// console.log(genSales());
// console.log('TENANTS');
// console.log(genTenants());
// console.log('DISCOUNTS');
// console.log(genDiscounts());




// abstract class ParentClass {
//   // (encapsulamiento)
//   private _privAtt: string; //solo funciona dentro de parent class
//   protected protAtt: string; //solo funciona dentro de parent class y en los hijos que los hereda
//   public pubAtt : string; //esto funciona en todo lado

//   constructor() {
//     this._privAtt = 'Private Attribute Parent';
//     this.protAtt = 'Protected Attribute Parent';
//     this.pubAtt = 'Public Attribute Parent';
//     console.log(this._privAtt);
//   }

//   get privAtt(): string {
//     return this._privAtt;
//   }
  
//   set privAtt(value: string) { //no se define lo que retorna el set (void)
//     this._privAtt = value;
//   }

//   //el padre define sus métodos abstractos (eventos), lo cual lo convierte en una clase abstracta. Estos métodos se definen en el padre, pero se implementan en los hijos (polimorfismo & abstract)
//   protected abstract onPrintError(error: string | null | undefined): string | undefined;

//   // el anterior se llama evento y este de acá, acción
//   public printError(error?: string | null | undefined): void {
//     const message: string | null = this.onPrintError(error) || null;
//     console.log({ msg: `Error message: ${message ? message : 'Nothing to show'}` });
//   }
// }

// class ChildClass extends ParentClass { //(herencia)
//   constructor() {
//     super(); //(herencia), leyo todo el constructor del padre
//     console.log('-');
//     console.log(this.protAtt);
//     console.log('-');
//   }

//   protected onPrintError(error: string | null | undefined): string | undefined {
//     if (error) return `Exists one error: ${error}`;
//     return undefined;
//   }
// }

// const childClass: ChildClass = new ChildClass();
// console.log(childClass.pubAtt);
// childClass.printError('Page not found');
// childClass.printError();

// //esto se puede realizar luego de haber definidos el get y set
// childClass.privAtt = 'Hello';
// console.log(childClass.privAtt)




// setTimeout(() => {
//   console.log('El huevo');
// }, 1000);
// console.log('La gallina');

// //promesa
// const setValueN = (value: number): Promise<number> => { //promesa que devuelve un número
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(true) resolve((++value) * 3); //++value es como value = value + 1
//       else reject('Some error');
//     }, 1000)
//   });
// }

// let n: number = 0;

// //1ra forma de ejecutar las promesas
// setValueN(n)
//   .then((value) => {
//     const m = value * 10;
//     console.log(m);
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// //2da forma
// const printValue = async () => {
//   let n: number = 1;
//   try {
//     const m = await setValueN(n) * 10; //se espera el resultado de la promesa
//     console.log(m);
//   } catch (error) {
//     console.log(error);
//   }
// }
// printValue();