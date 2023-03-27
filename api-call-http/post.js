const http = require('https');

const options = {
  hostname: 'reqres.in',
  port: 443,
  path: '/api/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

const data = JSON.stringify({
  "email": "eve.holt@reqres.in",
  "password": "pistol"
});

req.write(data);
req.end();
