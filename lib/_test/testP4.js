
function define(name, object, descriptor) {
    Object.defineProperty(object, name, descriptor);
}


class S {

    constructor(title) {
        //Private("title", this);

        //let _private;
        //let title;
        define("title", this, {
            get() { 
                return title;
            },
            set(value) { 
                return title = value;
            },
          })



        /*let _title;
        Object.defineProperty(this, "title", {
            get() { 
                console.log("call get");
                return _title;
            },
            set(title) { 
                console.log("call set");
                return _title = title;
            },
          });*/

    }

}

let x = 47133241234;

let s = new S(x);
console.log(s.title);
console.log(s.title = 4711);
console.log(s.title = 4712);
console.log(s.title);

console.log(x);


