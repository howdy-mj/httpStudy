import net from 'net';

// TCP 서버 생성
const server = net.createServer( (socket) => {
  socket.end('hello world');
})

// 네트워크 에러 처리
server.on('error', err => {
  console.log(err);
})

server.listen(9000, () => {
  console.log('listen', server.address());
})