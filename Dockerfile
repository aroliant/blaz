FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./yarn.lock package.json /usr/src/app/

RUN npm i yarn -g && yarn install

COPY ./ /usr/src/app

RUN yarn ng build --prod

ENV PORT 3000
EXPOSE 3000

CMD ["npm" , "start"]