class S {

    constructor() {
        let _title;
        Object.assign(this, {
            getTitle() { 
                console.log("call get");
                return _title;
            },
            setTitle(title) { 
                console.log("call set");
                return _title = title;
            },
          });
    }

    get title() {
        return this.getTitle();
    }

    set title(title) {
        return this.setTitle(title);
    }

}


let s = new S();
console.log(s.title);
console.log(s.title = 4711);
console.log(s.title = 4712);
console.log(s.title);

console.log(s.foobar);

