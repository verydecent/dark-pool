const fs = require('fs');
fs.writeFileSync('./.env', `API_URL=${process.env.API_URL}\nNODE_ENV=production`, function (err) {
  console.log('===> writeFileSync Err');
  if (err) throw err;
});