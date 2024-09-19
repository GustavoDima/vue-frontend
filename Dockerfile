FROM node:lts-alpine as build-stage
LABEL maintainer-name="Rafael Pereira"
LABEL maintainer-email="rafael.informa@gmail.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
