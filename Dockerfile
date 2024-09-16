# Use Node.js as the base image
FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

ARG ENV_FILE
COPY ${ENV_FILE} .env

# Build the Next app
RUN npm run build

# Serve the production build
CMD ["npm", "run", "start"]