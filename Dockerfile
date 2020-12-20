FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install yarn -g
RUN yarn install
COPY . .
EXPOSE 4200
RUN npm run build
