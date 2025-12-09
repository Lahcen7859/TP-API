import { Request, Response } from 'express'; //Importe les interfaces Request et Response d'Express. Ces types sont utilisés pour typer de manière stricte les objets reçus et envoyés par le serveur

//Déclare un tableau constant nommé users. Le type TypeScript lui indique qu'il contiendra des objets ayant une propriété name (de type string) et une propriété email (de type string aussi)
const users: { name: string; email: string }[] = []; // Stockage en mémoire

//Définit et exporte la fonction getUsers. Elle recoit l'objet de requête req (information recue du client) et l'objet de réponse res (outils pour envoyer la réponse au client)
export const getUsers = (req: Request, res: Response) => {
    res.json({ users }); //Utilise l'objet res pour envoyer une réponse au client
};

//Définit et exporte la fonction addUser qui gère la logique d'ajout d'utilisateur
export const addUser = (req: Request, res: Response) => {
    const { name, email } = req.body; //On extrait les propriétés name et email du corps de la requête req.body

    //Si la validation échoue, cette ligne arrête l'exécution de la fonction (return), définit le statut HTTP à 400 et renvoi un message d'erreur
    if (!name || !email) {
        return res.status(400).json({ message: "Nom et email requis" });
    }

    //Si la validation réussit, le nouvel objet { name, email } est ajouté au tableau users en mémoire
    users.push({ name, email }); // Ajout en mémoire

    //Affiche une information de journalisation dans la console du serveur
    console.log("🛠 Utilisateur ajouté :", { name, email });

    //Envoie une réponse de succès au client
    res.json({ message: `Utilisateur ${name} ajouté avec succès !`, email });
};
