# Use the official Node.js 22 image as a base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Initialize a new package.json
RUN npm init -y

# Install backend dependencies
RUN npm install express mongoose body-parser dotenv

# Create a .env file with a placeholder MongoDB URI
RUN echo "MONGO_URI=mongodb://mongodb:27017/swiftcartdb" > .env

# Expose the backend port
EXPOSE 3000

# Placeholder entry point (will fail until index.js is added)
CMD ["node", "index.js"]
