# Use the official Node.js 22 image as a base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Install the new Expo CLI and ngrok globally
RUN npm install -g expo @expo/ngrok

# Copy the local frontend files
COPY . .

# Install project dependencies
RUN npm install

# Expose the Expo port (8081 for Metro bundler)
EXPOSE 8081

# Start the Expo server with tunnel support
CMD ["npx", "expo", "start", "--tunnel"]
