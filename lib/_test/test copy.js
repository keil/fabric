let fibonacci = require("../../fibonacci.js");
let Webcore = require("./../index.js");
let Document = require("./../lib/page.js");

Webcore.initialize(3000);

let label = new Document.Label("Number:", "number");
let text = new Document.Text("number");
let button = new Document.Button("Calculate", function(parameters) {

    let n = parameters.number;
    let r = fibonacci(n);

    let paragraph = new Document.Paragraph("Fibonacci number of " + n + " is " + r + ".");
    let back = new Document.Button("Back", function(parameters) {
        return page;
    });
    let form = new Document.Form([back]);
    let result = new Document.Page("Fibonacci", [paragraph, form]);

    return result;
});

let form = new Document.Form([label, text, button]);
let page = new Document.Page("Fibonacci", [form]);

Webcore.show(page);



----
lib
+-- application (server)
+-- component
    +-- block-layout
    +-- simple-layout
    +-- view

+-- template (html temlates)
+-- util









lib
+-- core
+-- convenience
    +-- BlockLayout
    +-- SimpleForm
    +-- SimpleTable
    +-- StackLayout
    +-- View
+-- template







---

// load fabric
let fabric = require('@keil/fabric');

let View = require('@keil/fabric/convinience/View');
let StackLayout = require('@keil/fabric/convinience/StackLayout');

// or

let Application = fabric.Application;
let View = fabric.View




let core = fabric.Core;

// initialize server port 
let app = new fabric.Abblication(3000);


// create new view
let view = new Document.View("Page Title");

let layout = new Document.BlockLayout();








let fabric = require('fabric');


let Application = new fabric.Application();


let Cluster = fabric.initialize();




let view = new fabric.View();

view



view.show();

