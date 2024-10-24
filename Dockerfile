FROM oven/bun:latest

WORKDIR /app
COPY . .

RUN bun install --no-save
RUN bun run build

CMD ["bunx", "serve", "-s", "dist", "-l", "6666"]
