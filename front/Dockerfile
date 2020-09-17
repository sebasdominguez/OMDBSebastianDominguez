FROM node:alpine
WORKDIR /app

COPY ./package.json package.json
COPY ./.env .env

RUN ["npm", "install"]

COPY ./src src
COPY ./webpack.config.js webpack.config.js

EXPOSE 8080

RUN ["npm", "run", "build"]
CMD ["npm", "start"]