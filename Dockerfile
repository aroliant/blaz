FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

ENV PORT 3000
EXPOSE 3000

CMD ["npm" , "start"]