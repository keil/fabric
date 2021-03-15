const fs = require('fs');
const path = require("path");

const Mustache = require('Mustache');
const Webcore = require("./../index.js");

// helper functions

const basedir = "./templates/";
function loadTemplate(name) {
    let template = fs.readFileSync(path.resolve(__dirname, basedir + name)).toString();
    console.log(name + "@" + template);
    return template;
    ;
}



// super class fo all documents
class Document {
}

class Element {
}



class Page extends Document {
    constructor(title, content, properties) {
        super();
        this.title = title;
        this.content = content; // array
    }
    render() {
        let content = "";
        this.content.forEach((element) => {
            content += element.render() + "\n";
        });
        let view = {
            title: this.title,
            content: content
        };
        return Mustache.render(loadTemplate(Page.template), view);
    }
}
Page.template = "page.mustache";



class Paragraph extends Element {
    constructor(value, properties) {
        super();
        this.value = value;
    }
    render() {
        let view = {
            value: this.value
        };
        return Mustache.render(loadTemplate(Paragraph.template), view);
    }
}
Paragraph.template = "paragraph.mustache";


class Form extends Element {
    constructor(content, properties) {
        super();
        this.content = content;
    }
    render() {
        let content = "";
        this.content.forEach((element) => {
            content += element.render() + "\n";
        });
        let view = {
            content: content
        };
        return Mustache.render(loadTemplate(Form.template), view);
    }
}
Form.template = "form.mustache";


class Button extends Element {
    constructor(value, callback, properties) {
        super();
        this.value = value;
        this.callback = callback;
        console.log(Webcore.register);
        Webcore.register(value, callback);
    }
    render() {
        let view = {
            value: this.value,
            action: this.value
        };
        return Mustache.render(loadTemplate(Button.template), view);
    }
}
Button.template = "button.mustache";


class Text extends Element {
    constructor(number, properties) {
        super();
        this.number = number;
    }
    render() {
        let view = {
            number: this.number
        };
        return Mustache.render(loadTemplate(Text.template), view);
    }
}
Text.template = "text.mustache";


class Label extends Element {
    constructor(content, forID, properties) {
        super();
        this.content = content;
        this.forID = forID;
    }
    render() {
        let view = {
            content: this.content,
            for: this.forID
        };
        return Mustache.render(loadTemplate(Label.template), view);
    }
}
Label.template = "label.mustache";




module.exports = {
    "Button": Button,
    "Text": Text,
    "Label": Label,

    "Paragraph": Paragraph,
    "Form": Form,

    "Page": Page
}

