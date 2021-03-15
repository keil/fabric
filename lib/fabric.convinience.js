/*const {
    Category,
    categoryOf
} = require("./fabric.category"); */

import { 
    load
} from './fabric.load.js';

import {
    assert
} from './fabric.assert.js';

//const Assert = require('./fabric.assert');

import Mustache from 'Mustache';


import {
    main
} from './fabric.server.js';



class Document {

    constructor() {        
    }

    /**
     * 
     * @param {*} template 
     * @param {*} scope 
     */
    render(template, scope) {
        return Mustache.render(load(template), scope);
    }




}

/**
 * Class View.
 */
class View extends Document {

    /**
     * 
     */
    context = {};
    
    /**
     * 
     * @param {*} title 
     * @param {*} content 
     */
    constructor(title="", content) {
        super();
        this.title = title;
        this.content = content;
        this.action = "/";

        // TODO: register action request
    }

    get titleX() {
        return this.context.title;
    }

    set titleX(title="") {
        // this.context.title = assert(isTextContent, title);
        /*
         * Expect {content} to be a text content.
         */   
        //Assert.textContent(title);
        this.context.title = title;
    }

    get contentX() {
        return this.content;
    }

    set contentX(content) {
        //Assert.flowContent(content);
        
        //this.Context.set({content});
        //this.context.content = content;
    }
    
    render() {
        return super.render('view.mustache', this);
    }

    show() {
        main(this);
    }
}


export { 
    Document, 
    View 
};