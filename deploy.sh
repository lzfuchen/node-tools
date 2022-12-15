git pull &&
npm install &&
rm -rf dist &&
npm run build &&
cp ecosystem.config.js ./dist/ &&
cd dist &&
pm2 startOrReload ecosystem.config.js
