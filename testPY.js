

class A {

    #x;

    constructor(x) {
        this.x = x;
    }

    get x() {
        console.debug("@get");
        return this.#x;
    }

    set x(x) {
        console.debug("@set");
        return this.#x = x
    }


}

let a = new A(4711);

console.log("---> " + a.x);
console.log("---> " + (a.x = 4712));
console.log("---> " + a.x);

class B extends A {
    constructor(x) {
        super(x);
    }
}

let b = new B(4711);

console.log("---> " + b.x);
console.log("---> " + (b.x = 4712));
console.log("---> " + b.x);