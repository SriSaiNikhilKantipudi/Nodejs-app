const os = require('os');
const {people, ages} = require('./people')

console.log(people, ages, os.platform(), os.homedir());