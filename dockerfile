# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .



# Expose the port on which your Express app runs
EXPOSE 3001

# Command to run your application
CMD ["node", "index.js"]
