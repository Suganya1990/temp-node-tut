const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page.')
  }
  if (req.url === '/about') {
    res.end('here is our short history')
  }
  res.end(`
 <h1>
OOps!</h1>
<p> We cant seem to find the page your are looking for</p>
<a href="/">Click to Return Home</a>
 `)
})

server.listen(5000)
