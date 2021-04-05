export class S {

    constructor() {
        let x = {};
        Object.defineProperty(this, "x", {
            get() { 
                console.log("call get");
                return x;
            },
            set(x) { 
                console.log("call set");
                return x = x;
            },
          });

        /*Object.assign(this, {
            set x(x) {
                console.log("call set");
                return content.x = x;
            },
            get x() {
                console.log("call get");
                return content.x;
            }
        });*/

    }

}

/*
let s = new S();
console.log(s.content);
console.log(s.x);
console.log(s.x = 4711);
console.log(s.x);
*/


class X {

    constructor() {
        let c = [];

        Object.assign(this, {
            push(x) {
                console.log("call push");
                return c.push(x);
            },
            pop() {
                console.log("call pop");
                return c.pop(x);
            }
        });
    }

    get x() {
        console.log("call get");
        return this.pop();
    }

    set x(x) {
        console.log("call set");
        return this.push(x);
    }

}


let x = new X();

console.log(x.x);
console.log(x.x = 4711);
console.log(x.x);

console.log("-------------------------")

class A extends X {

    get a() {
        console.log("call get");
        return this.pop();
    }

    set a(a) {
        console.log("call set");
        return this.push(a);
    }

}

let a = new A();

console.log(a.a);
console.log(a.a = 4711);
console.log(a.a);

console.log(a.a = 4712);

console.log(a.c);

console.log(a.pop);
console.log(a.push);












/*

class A {
    o = 134234;

    constructor() {
        this.x = 1234567890;
    }

    get x() {
        console.log("call get");
        //return this.x;
        return "oIo";
    }

    set x(x) {
        console.log("call set");
        return this.x = x;
    }


}





let a = new A();


console.log(a.x);

//console.log(a.x = 4711);

console.log(a.x);


*/