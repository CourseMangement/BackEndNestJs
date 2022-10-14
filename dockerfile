#base image node.js
FROM node:alpine
#crear app directory 
WORKDIR /usr/src/app

COPY package*.json .

#install app source 
RUN npm install
#
COPY . .

RUN npm run build
CMD ["npm", "run", "start:prod"]