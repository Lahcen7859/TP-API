// Importation du module Router d'Express pour gérer les routes
//Importe la classe Router depuis le module express. Cette classe est essentielle pour créer un objet qui va gérer un ensemble de routes spécifiques (ici, les routes liées aux utilisateurs).
import { Router } from 'express';

// Importation des contrôleurs qui gèrent la logique métier pour les utilisateurs
//Importe deux fonctions contrôleurs, getUsers et addUser, depuis le fichier qui gère la logique métier des utilisateurs (user.controller.ts)
//Ces fonctions seront appelées lorsqu'une route spécifique sera atteinte.
import { getUsers, addUser } from '../controllers/user.controller';

// Création d'un routeur Express
//Instancie un nouvel objet Routeur d'Express. Toutes les routes définies ci-dessous seront attachées à cet objet
const router = Router();

/**
* Route GET /users
* Description : Récupère la liste des utilisateurs
* Contrôleur associé : getUsers (défini dans user.controller.ts)
*/
//Définit une route qui répond aux requêtes HTTP GET sur le chemin /. Lorsque cette route est atteinte, elle exécute la fonction contrôleur getUsers pour récupérer et renvoyer la liste des utilisateurs.
router.get('/', getUsers);

/**
* Route POST /users
* Description : Ajoute un nouvel utilisateur
* Contrôleur associé : addUser (défini dans user.controller.ts)
*/
//Définit une route qui répond aux requêtes HTTP POST comme pour GET et lorsque cette route est atteinte, elle exécute la fonction contrôleur addUser pour traiter les données du corps de la requête et créer un nouvel utilisateur.
router.post('/', addUser);

// Exportation du routeur pour l'utiliser dans index.ts
//Exporte l'objet router configuré. Cela permet à un autre fichier (comme index.ts ou app.ts) de l'importer et de l'utiliser pour monter ces routes d'utilisateur sur le serveur Express principal.
export default router;