const fs = require('fs');
fs.writeFileSync('./.env', `API_URL=${process.env.API_URL}\nNODE_ENV=production`)
console.log(fs);