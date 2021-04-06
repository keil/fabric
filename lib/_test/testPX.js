
import { S } from '@testP.js';

class Foo {
    #height = 0;
    #width;
    constructor(x) {
        this.#height = x;
    }
    get height() {
        return this.#height;
    }
    set height(x) {
        return this.#height = x;
    }
}







let f = new Foo(2345);

console.log("&&& " + f.height);
f.height = 4711;
console.log("&&& " + f.height);


console.log("----------------------------------")



function test() {}

console.log("======> " + (test instanceof Function))

let oIo = "";
let oIo2 = new String(new String(62435));

console.log("======> " + (oIo2 instanceof String))
console.log(oIo2)


function define(name, object, descriptor) {
    Object.defineProperty(object, name, descriptor);
}


class A {
    constructor(x) {
        
        /*
        define("x", this, {
            get() { 
                console.log("--> get CONTRACT");

                return x;
            },
            set(value) { 
                console.log("--> set CONTRACT");
                return x = value;
            },
          }) */

          //
          
            this.x = x;

            Object.freeze(this);
    }

    /*get x() {
        return this.x;
    }
    set x(x) {
        return this.x = x;
    }*/

}

//let x = 4711;
let x = {foo:'bar'};

let a = new A(x);
console.log("--> " + a.x);
console.log("--> " + a.x.foo);

a.x.foo = 4711;
//console.log("--> "  + (a.x = "oIo"));
a.z = "oIo"

console.log("--> " + a.x);
console.log("--> " + a.x.foo);

console.log("--> " + x);
console.log("--> " + x.foo);


console.log("__> " + a.y);


