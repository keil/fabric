import { HTMLElement } from './lib/fabric.html.js';


import { View } from './lib/fabric.js';

let view = new View("Test", "<p>A new start is born ...</p>");
console.log(view.render());
view.show();





