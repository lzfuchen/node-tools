FROM node:16-alpine as builder

MAINTAINER "fuchen"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --registry=https://registry.npmmirror.com/

COPY . .

RUN npm run build


FROM node:16-alpine 

WORKDIR /usr/src/app 

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY --from=builder /usr/src/app/dist .

EXPOSE 3000

CMD ["node", "app.js"]

