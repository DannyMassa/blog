FROM node:alpine AS build
WORKDIR ./
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 4200
CMD yarn run start
