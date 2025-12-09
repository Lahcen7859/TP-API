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
│   │   └── user.controller.ts  // Logique métier (getUsers, addUser)
│   ├── routes/
│   │   └── user.routes.ts      // Définition des chemins d'accès (GET/POST /users)
│   └── index.ts              // Point d'entrée du serveur Express
├── .env                      // Variables d'environnement (PORT=4000)
├── package.json              // Dépendances et scripts de lancement
├── tsconfig.json             // Configuration du compilateur TypeScript
└── nodemon.json              // Configuration du redémarrage automatique
