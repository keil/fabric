import express from 'express';

/**
 * 
 */
const application = express();

/**
 * Default server port.
 * @private
 */
const defaultPort = process.env.PORT || 8088;

/**
 * 
 */
let server;

/**
 * 
 * @param {*} port 
 */
export function start(port = defaultPort) {
    server = application.listen(port, () => {
        console.debug(`Application listening on port ${port}!`);
    });
    application.use(express.static('public'));
}

/**
 * 
 */
export function stop() {
    console.debug(`Stop Application!`);
    server.close();
}

/**
 * 
 * @param {*} page 
 */
export function show(page) {
    // TODO, element must be of type HTML element
    console.debug("Show Application");
    application.get('/', (req, res) => res.send(page.render()));
}

/**
 * 
 * @param {*} id 
 * @param {*} callback 
 */
export function register(id, callback) {
    // TODO returned element must be element of show-able (has method render())
    console.debug(`Register ${id} for callback!`);
    application.get('/' + id, (req, res) => res.send(callback(req.query).render()));
}