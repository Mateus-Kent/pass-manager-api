# Estágio 1: Compilar a aplicação
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Estágio 2: Executar a aplicação
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/dist ./dist

RUN npm ci

EXPOSE 3000

CMD ["node", "./dist/index.js"]
