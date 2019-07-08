FROM node:10.15.3-alpine

# Fix for bcrypt ( since this is an alpine image )
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python  

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./yarn.lock package.json /usr/src/app/

RUN yarn add node-gyp --dev

RUN yarn install && apk del native-deps

COPY ./ /usr/src/app

# Build the Angular dashboard
RUN yarn ng build --prod

# Babel JavaScript Transcompile
RUN yarn build:server

# Pack to binary with pkg
RUN yarn server:pack

# Remove Source Code - Dashboard & Server
# RUN rm -v !("app.bin") // TODO:


ENV PORT 3000
EXPOSE 3000

CMD ["./app.bin"]