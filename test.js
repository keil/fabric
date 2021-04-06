import {
    Doctype,
    Html,
    Head,
    Title,
    Meta,
    Body,
    H1Heading,
    Paragraph
} from './lib/core/fabric.core.js'

import {
    start,
    main
} from './lib/runtime/fabric.server.js'

let page = new Html(
    new Doctype(),
    new Head([
        new Meta({}),
        new Title("fabric Demo Application")
    ]),
    new Body([
        new H1Heading([
            "fabric Demo Application"
        ]),
        new Paragraph([
            "A new star is born ..."
        ])
    ])
);

console.log(page.render());

start();
main(page);