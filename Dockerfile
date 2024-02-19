# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Command to run the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0"]
