FROM node:latest

COPY package*.json ./

RUN npm i -g nodemon

RUN npm install

EXPOSE 3020

CMD [ "npm", "start" ]

