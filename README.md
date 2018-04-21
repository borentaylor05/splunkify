## splunkify - Log utility for creating Splunk friendly logs

## Usage:
```javascript
const {splunkify} = require('splunkify');

console.log(splunkify(['info', '/users'], {
    env: 'dev', 
    userId: 1, 
    location: 'Austin,TX'
}))

// Will log:
// [info][/users] env=dev userId=1 location=Austin,TX
```

Or as a logger:
```javascript
const {Logger} = require('splunkify');
const logger = new Logger(console); // pass your desired logger to constructor

logger.info('/users', {
    env: 'dev', 
    userId: 1, 
    location: 'Austin,TX'
});

// Will log:
// [info][/users] env=dev userId=1 location=Austin,TX
```

