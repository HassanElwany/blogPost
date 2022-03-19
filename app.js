// init express framework
const express = require('express')
const morgan = require('morgan')

// creating app using express
const app = express()
// register view emgine 
app.set('view engine', 'ejs')

app.listen(3000)


app.use(express.static('public'))

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Study', snippet: 'studding about node and fucking js :)'},
        {title: 'Study', snippet: 'studding about node and fucking js :)'},
        {title: 'Study', snippet: 'studding about node and fucking js :)'}
    ]
    res.render('index', { title: 'Home', blogs})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'creat a new Blog'})
})


// handling errors routing
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})