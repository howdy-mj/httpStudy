const http = require('http');

// HTTP 서버 인스턴스 생성
const server = http.createServer( (req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/plain'
  });
  res.end('hello world');
});

// 서버에 포트 할당
server.listen(8000);