import {
    Doctype,
    Html,
    Head,
    Title,
    Meta,
    Link,
    Body,
    H1Heading,
    Paragraph
} from './lib/core/fabric.core.js'
 
// Superclass of view


class View {

    #title;
    #content = new Array();

    constructor(title = "", content) {
        this.title = title; // TODO, getter+setter
        this.cotent = content;
    }

}




let page = new Html(
    new Doctype(),
    new Head([
        new Meta({charset:"UTF-8"}),
        new Meta({name:"author",content:"Matthias Keil"}),
        new Meta({name:"keywords",content:"fabric, JavaScript, Toolkit"}),
        new Meta({name:"description",content:"fabric Demo Application"}),
        new Title("fabric - Advanced JavaScript Widget Toolkit"),
        new Link({rel:"stylesheet", href:"css/core.fabric.css"})
    ], {lang:"en"}),
    new Body([
        new H1Heading([
            "fabric - Advanced JavaScript Widget Toolkit"
        ]),
        new Paragraph([
            "A new star is born ..."
        ])
    ])
);

console.log(page.render());

//start();
runtime.start(8080);
runtime.show(page);



let view = new View("Fibonacci Calculator", [
    new SimpleForm([
        new Label(),
        new Text(),
    ])
]);

// view and form must also be flow content
// elements must be html elements? - where render does something different
// server render only accepts showable elements (views, html/tags)