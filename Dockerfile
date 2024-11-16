# Use an official Node.js image
FROM node:18.17.0

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Set environment variable
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
