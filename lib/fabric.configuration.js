

const SERVER_PORT = "Server.Port";



const config = require('config');
//...
const dbConfig = config.get('Customer.dbConfig');
db.connect(dbConfig, ...);