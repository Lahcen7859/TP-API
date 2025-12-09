# TP API Node.js

Ce projet vise à initialiser et développer une API REST en utilisant Node.js avec le support de TypeScript et le framework Express.
L'API implémente une gestion en mémoire de la ressource /users pour la récupération et l'ajout d'utilisateurs.

##  Technologies utilisées
- `Node.js`: Environnement d'exécution côté serveur
- `TypeScript (.ts)`: Langage typé pour améliorer la qualité et la robustesse du code
- `Express`: Framework web minimaliste pour la création de l'API
- `ts-node`: Exécute les fichiers TypeScript directement sans compilation préalable en développement
- `nodemon`: Surveille les modifications des fichiers sources et redémarre automatiquement le serveur en développement
- `dotenv`: Charge les variables d'environnement depuis le fichier .env

## Structure du projet
api-node-ts/

├── src/

│   ├── controllers/

│   │   └── user.controller.ts // Logique métier (getUsers, addUser)

│   ├── routes/

│   │   └── user.routes.ts   // Définition des chemins d'accès (GET/POST /users)

│   └── index.ts             // Point d'entrée du serveur Express

├── .env                    // Variables d'environnement (PORT=4000)

├── package.json              // Dépendances et scripts de lancement

├── tsconfig.json             // Configuration du compilateur TypeScript

└── nodemon.json              // Configuration du redémarrage automatique

## Installation et lancement
1. Cloner et initialiser le projet
```bash
  git clone https://github.com/Lahcen7859/TP-API.git
```
2. Installer les dépendances
```bash
  # Initialise le projet Node.js
  npm init -y
  # Installe les dépendances principales (Express, dotenv)
  npm install express dotenv
  # Installe les dépendances de développement
  npm install -D typescript ts-node @types/node @types/express nodemon
```
3. Lancer en mode développement
```bash
  npm run dev
```
Le serveur devrait démarrer et afficher : Serveur démarré sur http://localhost:4000 (ou sur le port défini dans .env)

## Auteurs

Ce projet a été réalisé par Lahcen IDLAHCEN dans le cadre d'un projet en technologie du web.
