## Something wrong with this image
# FROM node:10-buster

FROM node:14-alpine


WORKDIR /usr/src/app

COPY  package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "buildrun" ]