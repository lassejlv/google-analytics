FROM oven/bun:latest

WORKDIR /app

# Copy only package files to cache dependencies
COPY package*.json bun.lockb ./

# Install dependencies and cache the layer
RUN bun install --no-save

# Copy the rest of your project files
COPY . .

# Build the project
RUN bun run build

# Start the server
CMD ["bunx", "serve", "-s", "dist", "-l", "6666"]
