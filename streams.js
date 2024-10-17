const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs1.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blogs2.txt');

//reading and writing
readStream.on('data', (chunk) => {
    console.log('......New Chunk.......')
    console.log(chunk);
    writeStream.write(chunk);

})

//piping
readStream.pipe(writeStream);