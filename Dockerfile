FROM node:16.5.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
CMD [ "npm", "run", "babel" ] 