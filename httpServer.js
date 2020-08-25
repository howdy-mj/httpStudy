import http from 'http';

// HTTP 서버 인스턴스 생성
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html', host: 'kmj' });
    res.write(
      '<html><body><p>Homepage</p><img src="https://kdydesign.github.io/2017/07/15/nodejs-npm-tutorial/cover.png"/></body></html>'
    );
    res.end(console.log('end of homepage'));
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>Admin page</p></body></html>');
  } else if (req.url == '/data') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify({ message: 'Hello World' }));
    res.end();
  } else {
    res.end('Invalid Request');
  }
});

// 서버에 포트 할당
server.listen(80);
