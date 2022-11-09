FROM node:16-alpine AS prep

WORKDIR /app

COPY package.json package-lock.json ./

# muted the version change
RUN npm version --allow-same-version 0.0.0

FROM node:16-alpine as builder

WORKDIR /app

COPY --from=prep /app/package.json /app/package-lock.json ./

# Install deps
RUN npm ci

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "index.js" ]