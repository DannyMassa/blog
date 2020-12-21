FROM node:alpine AS build
WORKDIR ./blog/
COPY package.json yarn.lock ./blog/
RUN yarn install
COPY . .
EXPOSE 4200
CMD yarn run start
