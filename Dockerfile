FROM node:alpine

WORKDIR /usr/src/opensdcp-website

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 5000

RUN npm run build

CMD [ "npm", "start" ]