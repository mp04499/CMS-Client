FROM node:alpine as build

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=build /app/build .

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-l", "8080"]