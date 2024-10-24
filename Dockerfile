FROM node:alpine-lts

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

CMD ["npx", "serve", "-s", "dist", "-l", "6666"]