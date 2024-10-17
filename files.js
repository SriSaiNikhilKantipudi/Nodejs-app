//File System
const fs = require('fs');

//read
fs.readFile('./docs/blogs.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());

})

//write
fs.writeFile('./docs/blogs.txt', 'hello, world', () => {
    console.log('file written');
})

//directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) => {
    if(err) {console.log(err)};
    console.log('folder created');

});
} else {
    fs.rmdir('./assets', ()=> {
        if(err) {console.log(err);}
        console.log('folder deleted')
    })
}

//deleting files
if(fs.existsSync('./docs/blogs.txt')) {
    fs.unlink('./docs/blogs.txt', (err)=> {
        if(err){console.log(err);}
        console.log('file deleted');
    })
}