import express from 'express';

const application = express();
const defaultPort = process.env.PORT || 8088;

/**
 * 
 * @param {*} port 
 */
export function start(port = defaultPort) {
    application.listen(port, () => {
        console.debug(`Application listening on port ${port}!`);
    });
}

/**
 * 
 * @param {*} page 
 */
export function main(page) {
    console.debug("Show Application");
    application.get('/', (req, res) => res.send(page.render()));
}

/**
 * 
 * @param {*} id 
 * @param {*} callback 
 */
export function callback(id, callback) {
    // TODO returned element must be element of show-ablde
    console.debug(`Register ${id} for callback!`);
    application.get('/' + id, (req, res) => res.send(callback(req.query).render()));
}

export default {
    start,
    main,
    callback
};