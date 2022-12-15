rm -rf dist &&
npm install &&
npm run build &&
cp ecosystem.config.js ./dist &&
pm2 reload ecosystem.config.js
