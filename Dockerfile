FROM node:latest

WORKDIR /app
RUN npm install typescript -g
COPY tsconfig.json tsconfig.json
RUN npm install @types/node
