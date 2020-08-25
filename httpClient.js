import http from 'http';

// 호출할 페이지 정보 설정
const options = {
  host: '127.0.0.1',
  port: 80,
  path: '/',
};

// 페이지 호출
const req = http.request(options, (res) => {
  let data = '';

  // 서버에서 받아온 데이터 수신
  res.on('data', (chunk) => {
    data += chunk;
  });

  // 수신 완료하면 console 출력
  res.on('end', () => {
    console.log(data);
  });
});

req.end();
