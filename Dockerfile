# Этап сборки
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Этап продакшна с nginx
FROM nginx:alpine

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]