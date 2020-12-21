FROM node:alpine AS build
WORKDIR ./
RUN yarn install
COPY . .
EXPOSE 4200
CMD yarn run start
