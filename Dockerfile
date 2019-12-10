# Use an official Node runtime as a parent image
FROM node:12.13.0-alpine

# Set the working directory inside the container to be the same name as our app on our local machine
WORKDIR '/carousel'

# Copy package.json to the working directory
COPY package.json .

# Install any needed packages specified in package.json
RUN npm install

# Copying the rest of the code to the working directory
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run index.js when the container launches
CMD ["npm", "run", "server_start"]
