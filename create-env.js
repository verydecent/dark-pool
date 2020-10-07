const fs = require('fs');
fs.writeFileSync('./.env', `API_URL=${process.env.API_URL}`, function (err) {
  console.log('===> writeFileSync Err');
  if (err) throw err;
});