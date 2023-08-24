FROM node:18-slim

RUN apt-get update && apt-get install -y openssl 

WORKDIR /home/node/desafio/app

COPY . .

RUN npm install && npx prisma generate

ENTRYPOINT ["tail", "-f", "/dev/null"]

