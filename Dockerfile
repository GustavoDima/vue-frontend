FROM node:lts-alpine as build-stage
LABEL maintainer-name="Rafael Pereira"
LABEL maintainer-email="rafael.informa@gmail.com"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
