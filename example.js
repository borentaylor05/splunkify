const {splunkify} = require('./index');
const {Logger} = require('./index');

const logger = new Logger(console);

console.log(splunkify(['info', '/users'], {
    env: 'dev', 
    userId: 1, 
    location: 'Austin,TX'
}));

logger.info('/users', {
    env: 'dev', 
    userId: 1, 
    location: 'Austin,TX'
});