// init express framework
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const { result } = require('lodash')



// creating app using express
const app = express()

//connecting mongodb databases 

const dburl = `mongodb+srv://hassan07:hend1440@blogpost.bxn2o.mongodb.net/BlogPost?retryWrites=true&w=majority`
mongoose.connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true}).then ((result)=> app.listen(3000)).catch((err)=> console.log(err))
// register view engine 
app.set('view engine', 'ejs')




app.use(express.static('public'))
app.use(morgan('dev'))

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
})

//blog route 
app.get('/blogs', (req, res )=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
       res.render('index', {title: 'All Blogs', blogs: result}) 
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'creat a new Blog'})
})


// handling errors routing
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})