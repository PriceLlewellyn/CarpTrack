FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the app (compiles TypeScript to JavaScript)
RUN npm run build

# Start the app in development mode with hot-reloading
CMD ["npm", "run", "start:dev"]