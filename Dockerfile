# Use a base Node.js image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Initialize a new package.json file (if needed)
RUN npm init -y

# Copy package.json and package-lock.json
COPY /package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Expose the port used by React Native
EXPOSE 8081

# Start the Expo server
CMD ["npx", "expo", "start", "--tunnel"]
