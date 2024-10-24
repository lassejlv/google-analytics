FROM node:lts-alpine

WORKDIR /app
COPY . .

RUN npm install --force
RUN npm run build

CMD ["npx", "serve", "-s", "dist", "-l", "6666"]
