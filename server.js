const http = require('http')
const fs = require('fs')
const _ = require('lodash')



 const server = http.createServer((req, res) => {


    // lodash
    const mun = _.random(0, 20)
    console.log(mun)

     //setting the header content type
     res.setHeader('content-type', 'text/html')

     // made specific path page as a responses 
    let path  = './views/'
    
    if (req.url === '/') {
        path += 'index.html'
        res.statusCode = 200;
    }else if (req.url === '/about') {
        path += 'about.html'
        res.statusCode = 200;
    }else {
        path += '404.html'
        res.statusCode = 404;
    }

     //response with request by html pages
     fs.readFile(path, (err, data) => {
         if(err) {
             console.log(err)
             res.end()
         } else {
             res.end(data)
         }
     })

 })

 server.listen('3000', () => {
     console.log (`server is listening on port: 3000` )
 })