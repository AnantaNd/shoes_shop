FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# production
# FROM node:latest
# RUN npm i -g serve
# WORKDIR /app
# COPY --from=build /app/build/ .
# CMD ["serve", "-p", "80", "-s", "."]
