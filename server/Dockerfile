FROM alpine:latest

# Install necessary dependencies
RUN apk add --no-cache nodejs npm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040

CMD ["node", "src/index.js"]