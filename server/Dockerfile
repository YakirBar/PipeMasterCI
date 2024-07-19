FROM alpine:latest

# Install necessary dependencies
RUN apk add --no-cache nodejs

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040

CMD ["npm", "start"]