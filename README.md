+Dans le fichier writeDirectoryPath.js, il y a deux fonctions : 
 +La fonction getDirPath pour afficher le dossier courant en utilisant la méthode process.cwd().
 +et la fonction createDirIfNotExist pour créer le dossier "monDossier" qui n'existe pas déjà en utilisant mkdirSync de fs.
 +
 +Avant la création de ce dossier, on vérifie s'il existe ou pas avec la méthode existsSync de fs.
 +
 +Dans le fichier index.js, on appelle les deux fonctions.
 +
 +Pour exécuter  le programme , on ouvre une console dans le dossier où se trouve le fichier index.js et on entre la commande : 
 +node index.js.
 +
 +Pour utiliser le module "fs" il suffit de taper la commande npm install fs.
