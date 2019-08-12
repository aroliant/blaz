FROM node:10.16.2-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./yarn.lock package.json /usr/src/app/

RUN yarn install

COPY ./ /usr/src/app

# Build the Angular dashboard
RUN yarn ng build --prod

# Babel JavaScript Transcompile
RUN yarn server:build

# Pack to binary with pkg
RUN yarn server:pack

# Remove Source Code - Dashboard & Server
RUN find ! -name 'app.bin' -type f -exec rm -f {} + && find -mindepth 1 -maxdepth 1 -type d -exec rm -r {} \;

# RUN ls -l

ENV PORT 3000
EXPOSE 3000

CMD ["./app.bin"]