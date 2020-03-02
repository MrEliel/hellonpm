const http = require('http');

http.createServer((requ, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html: charset=utf-8' });
    res.end('Hello World');
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço pressione Crtl + C');