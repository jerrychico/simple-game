FROM node:11.13.0-alpine

# creation du repertoire de destination
RUN mkdir -p /usr/src/simple-game
WORKDIR /usr/src/simple-game

# la mise a jour des dependences
RUN apk update && apk upgrade
RUN apk add git

# copier les données vers le repertoire sélectionner
COPY . /usr/src/simple-game
RUN npm install
RUN npm run build

# Esposition du port depuis exterieur
EXPOSE 3000

# Definition des variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Lancement de l'application
CMD [ "npm", "start" ]

