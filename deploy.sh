git pull &&
npm install &&
rm -rf dist &&
npm run build &&
cp ecosystem.config.js ./dist/ &&
pm2 startOrReload ./dist/ecosystem.config.js
