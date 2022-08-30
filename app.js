const http = require('http');
const server = http.createServer((req, res) => {
    res.write('wellcome to my home page')
    res.end()

})
server.listen(5000);