FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

FROM nginx:alpine

COPY nginx.conf /etc/nginx/

COPY --from=build /app/build /usr/share/nginx/html