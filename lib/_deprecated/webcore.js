const { version } = require('./../package.json');

let express = require('express');

const app = express();

function initialize(port) {
    //app.get('/', (req, res) => res.send(`JavaScript WebCore ${version}!`))
    app.listen(port, () => console.log(`WebCore application listening on Port ${port}!`));
}

function show(page) {
    let html = page.render();
    console.log(html);
    app.get('/', (req, res) => res.send(html));
}

function register(id, callback) {
    console.log("=====> register : " + id);
    app.get('/' + id, (req, res) => res.send(callback(req.query).render()));
}

module.exports = {
    initialize : initialize,
    show : show,
    register : register
}