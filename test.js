import {
    Doctype,
    Html,
    Head,
    Title,
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
    new Head([new Title("fabric Demo Application")]),
    new Body([
        new H1Heading([
            "fabric Demo Application"
        ]),
        new Paragraph([
            "A new star is born ..."
        ])
    ])
);

start();
main(page);