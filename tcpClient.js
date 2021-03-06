import net from 'net';

const options = {
  port: 9000,
  host: "127.0.0.1",
}

const client = net.connect(options, () => {
  console.log('connected');
})

client.on('data', data => {
  console.log(data.toString());
})

client.on('error', err => {
  console.log(err);
})

client.on('end', () => {
  console.log('disconnected')
})