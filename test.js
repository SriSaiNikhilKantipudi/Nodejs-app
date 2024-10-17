const names = 'nikhil';
console.log(names);

global.setTimeout(() => {
    console.log(names);
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log('in the interval');
}, 1000)

console.log(__dirname);
console.log(__filename);