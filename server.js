const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const body = req.url === '/style.css'
    ? fs.readFileSync('./public/style.css')
    : fs.readFileSync('./public/index.html', 'utf8')
    res.end(body)
})

const port = process.env.PORT || 3100
server.listen(port)

console.log(`Server start on port ${port}`)