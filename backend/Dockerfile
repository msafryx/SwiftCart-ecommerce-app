# Use the official Node.js image as a base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Initialize package.json automatically (use npm init -y)
RUN npm init -y

# Install necessary backend dependencies
RUN npm install express mongoose body-parser dotenv

# Copy the backend source code into the container
COPY . ./

# Expose the backend port (3000 in this case)
EXPOSE 3000

# Start the backend application
CMD ["node","index.js"]

