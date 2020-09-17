FROM node:alpine

WORKDIR /src

COPY ./package.json package.json
COPY ./server.js server.js
COPY ./config config
COPY ./models models
COPY ./routes routes
COPY ./public public

RUN ["npm", "install"]
CMD ["npm", "start"]

EXPOSE 3000