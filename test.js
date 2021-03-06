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

/*import {
    start,
    show
} from './lib/runtime/fabric.server.js'*/

import runtime from './lib/fabric.runtime.js'
 
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
        ], {class:"content"})
    ])
);

console.log(page.render());

//start();
runtime.start(8080);
runtime.show(page);