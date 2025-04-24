
# Projet Front et Back Strapi

Ce projet comprend un front-end et un back-end utilisant Strapi. Le front-end est construit avec Next.js, tandis que le back-end utilise Strapi pour gérer les données. Ce guide explique comment configurer et lancer les deux parties du projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optionnel pour exécuter Strapi dans un conteneur)

### Étape 1 : Cloner les dépôts

Clonez les deux dépôts pour récupérer le code source :

```bash
# Clonez le dépôt front-end
git clone https://github.com/VGabin/front-strapi.git
cd front-strapi

# Clonez le dépôt back-end
git clone https://github.com/VGabin/back-strapi.git
cd back-strapi
```

### Étape 2 : Configurer le back-end (Strapi)

1. **Installez les dépendances du back-end :**

   Allez dans le dossier `back-strapi` et installez les dépendances avec npm ou yarn :

   ```bash
   cd back-strapi
   npm install
   # ou
   yarn install
   ```

2. **Créer le fichier `.env.local` :**

   Dans le dossier `back-strapi`, créez un fichier `.env.local` à la racine du projet. Ajoutez-y la ligne suivante pour définir l'URL de l'API Strapi :

   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

3. **Lancer Strapi :**

   Maintenant, vous pouvez lancer votre back-end Strapi en utilisant la commande suivante :

   ```bash
   npm run develop
   # ou
   yarn develop
   ```

   Cela démarrera le serveur Strapi sur `http://localhost:1337`.

### Étape 3 : Configurer le front-end (Next.js)

1. **Installez les dépendances du front-end :**

   Allez dans le dossier `front-strapi` et installez les dépendances avec npm ou yarn :

   ```bash
   cd front-strapi
   npm install
   # ou
   yarn install
   ```

2. **Lancer Next.js :**

   Une fois les dépendances installées, lancez l'application front-end :

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   Cela démarrera le serveur front-end Next.js sur `http://localhost:3000`.

### Étape 4 : Vérification

1. Ouvrez votre navigateur et allez sur `http://localhost:3000` pour voir l'interface front-end.
2. Vous devriez être capable de communiquer avec votre back-end Strapi à `http://localhost:1337`.

### Étape 5 : Développement et tests

- Vous pouvez maintenant commencer à développer et tester les deux parties du projet. Le front-end consommera les données via l'API de Strapi.
- Vous pouvez ajouter, modifier et supprimer des données directement dans le back-end via l'interface d'administration de Strapi accessible à `http://localhost:1337/admin`.

## Problèmes connus

- Si vous avez des problèmes de connexion entre le front-end et le back-end, assurez-vous que les deux applications sont bien en cours d'exécution sur les bons ports (`localhost:3000` pour le front-end et `localhost:1337` pour le back-end).
- Vérifiez que le fichier `.env.local` est correctement configuré avec l'URL de Strapi.

## Licences

- Le projet utilise une licence MIT. Consultez les fichiers LICENSE des deux dépôts pour plus de détails.
