## splunkify - Log utility for creating Splunk friendly logs

## Usage:
```javascript
console.log(splunkify(['info', '/users'], {
    env: 'dev', 
    userId: 1, 
    location: 'Austin,TX'
}))

// Will log:
// [info][/users] env=dev userId=1 location=Austin,TX
```