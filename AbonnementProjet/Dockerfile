# Utilisez une image Node.js basée sur Alpine Linux
FROM node:16.13.0-alpine

# Créez un répertoire de travail pour votre application
WORKDIR /app

# Installez Nest.js en global
RUN npm install -g @nestjs/cli

# Copiez d'abord les fichiers de dépendances pour tirer parti de la mise en cache
COPY package*.json ./
COPY tsconfig*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste de votre application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application Nest.js fonctionne
EXPOSE 5000

# Générez la version de production de l'application
RUN npm run build

# Commande pour démarrer l'application en mode développement
CMD ["npm", "run", "start:dev"]
