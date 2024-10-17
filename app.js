const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();

//connection to mongodb
const dbURI = 'mongodb+srv://nikhilk:Nikhil517@nodecourse.aawlt.mongodb.net/';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err)=> console.log('failed db connection'))


//register view engine
app.set('view engine', 'ejs');

//listen for requests
//app.listen(3000);

//middleware module && static files
//app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded());

//middle ware
app.use((req,res, next) => {
    console.log('in the next middleware');
    next();
})


app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });
    
    blog.save()
        .then((result) => {
            console.log('sent to db')
            res.send(result);
        })
        .catch((err)=> {
            console.log(err);
        })
})

app.get('/all-blogs', (req, res)=> {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err)=> {
            console.log(err);
        })
})

app.get('/single-blog', (req, res)=> {
    Blog.findById('67114aef56878487d4ed6e9c')
    .then((result) => {
        res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    })
})

app.get('/', (req,res)=> {
    //res.send('<p>Home Page</>');
    //res.sendFile('./views/index.html', {root: __dirname});
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    //   res.render('index', { title: 'Home', blogs });
    res.redirect('/blogs');
});

app.get('/about', (req,res)=> {
    //res.send('<p>About Page</>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', { title: 'About' });
});


//redirects
app.get('/about-us', (req, res)=> {
    res.redirect('/about');
})

//blogRoutes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res)=> {
    res.status(404).render('404', { title: '404' });
})