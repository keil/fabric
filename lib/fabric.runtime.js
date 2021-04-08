import {
    start,
    stop,
    show,
    register
} from './runtime/fabric.server.js'

//export * from './runtime/fabric.server.js';

export default {

    // add: runtime version number
    // add: helper methods
    // add: runtime status

    // add: method for loading custim properties
    
    // prevent using show before stop
    // list registered cases
    // unregister callback (?)
    

    start: start,
    stop: stop,
    show: show,
    register: register

};