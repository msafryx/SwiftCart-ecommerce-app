# Use the official Node.js 22 image as a base
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Install the new Expo CLI globally
RUN npm install -g expo @expo/ngrok

# Create a new Expo app non-interactively
RUN npx create-expo-app . --template blank --yes

# Install project dependencies
RUN npm install \
 && npm install metro@0.75.10 \
 && npm install typescript@~5.8.3 @types/react@~19.0.10 --save-dev

# Expose the Expo port (8081 for Metro bundler)
EXPOSE 8081

# Start the Expo server with tunnel support
CMD ["npx", "expo", "start", "--tunnel"]
