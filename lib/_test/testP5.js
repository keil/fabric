
function define(name, object, descriptor) {
    Object.defineProperty(object, name, descriptor);
}


class A {
    constructor(x) {
        

        define("x", this, {
            get() { 
                console.log("--> get CONTRACT");

                return x;
            },
            set(value) { 
                console.log("--> set CONTRACT");
                return x = value;
            },
          })

          //this.x = x;
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
console.log("--> "  + (a.x = "oIo"));
console.log("--> " + a.x);
console.log("--> " + x);
