// init express framework
const express = require('express')

// creating app using express
const app = express()
// register view emgine 
app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create')
})


// handling errors routing
app.use((req, res) => {
    res.status(404).render('404')
})