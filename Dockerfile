# get node image
FROM node:21.2

# set /app as the workdir
WORKDIR /app

# copy package manager 
COPY package*.json ./

# install dependencies
RUN npm install express

# copy src code to the workdir
COPY . .

# expose the server port 
EXPOSE 3000

# run the server
CMD ["node", "index.js"]
