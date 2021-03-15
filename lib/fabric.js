/**
 * Copyright (c) by Matthias Keil. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import Server from './fabric.server.js';

// start application server
Server.start();

// TODO
// create global application object that enables to ceontrol the application
// and which contain meta data, like the port (e.g. process)


export * from './fabric.convinience.js';

