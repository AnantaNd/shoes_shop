# Dockerfile# base image
FROM node:6.9.0
WORKDIR /appCOPY package*.json ./# install dependencies
RUN yarn install# copy source files
COPY . .
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["serve"]