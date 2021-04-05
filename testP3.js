
function Private(name, object) {
    let _private;
    Object.defineProperty(object, name, {
        get() { 
            console.log("call get");
            return _private;
        },
        set(value) { 
            console.log("call set");
            return _private = value;
        },
      });
}


class S {

    constructor() {
        Private("title", this);
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


let s = new S();
console.log(s.title);
console.log(s.title = 4711);
console.log(s.title = 4712);
console.log(s.title);

console.log(s._title);


