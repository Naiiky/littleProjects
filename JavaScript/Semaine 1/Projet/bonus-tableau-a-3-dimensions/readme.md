### Manipulation de Tableaux et Objets en 3 Dimensions
### Énoncé :

Vous êtes un développeur travaillant sur une application de gestion de données géospatiales pour un projet scientifique. Les données sont organisées en plusieurs niveaux : des pays, des régions dans ces pays, et des villes dans ces régions. Chaque ville a plusieurs propriétés comme le nom, la population, et une liste des principales industries.

Votre tâche est de parcourir ces données structurées de manière complexe (tableaux et objets en 3 dimensions) et d'afficher certaines informations de manière formatée.


### Tâches :

1) Parcourir et Afficher les Informations :

    Parcourez les données pour chaque pays.
    Pour chaque pays, parcourez toutes les régions et affichez le nom de la région.
    Pour chaque région, parcourez toutes les villes et affichez les informations suivantes :
    Nom de la ville
    Population de la ville
    Liste des industries principales de la ville

2) Formatage de l'Affichage :

    Les informations doivent être affichées avec des indentations appropriées pour refléter la hiérarchie des données (pays -> région -> ville).


### Exemple de Sortie Attendue :
```yaml
Pays: France
  Région: Île-de-France
    Ville: Paris
      Population: 2148327
      Industries: Tourism, Fashion, Finance
    Ville: Versailles
      Population: 85671
      Industries: Tourism, Historical sites
  Région: Provence-Alpes-Côte d'Azur
    Ville: Marseille
      Population: 861635
      Industries: Shipping, Tourism, Petrochemical
    Ville: Nice
      Population: 342522
      Industries: Tourism, Technology

Pays: Japan
  Région: Kanto
    Ville: Tokyo
      Population: 13929286
      Industries: Finance, Technology, Manufacturing
    Ville: Yokohama
      Population: 3726167
      Industries: Shipping, Technology
  Région: Kansai
    Ville: Osaka
      Population: 2711536
      Industries: Manufacturing, Finance, Retail
    Ville: Kyoto
      Population: 1474570
      Industries: Tourism, Education, Technology

```

### Contraintes :
    Interdiction d'utiliser des fonctions : Vous devez accomplir la tâche sans définir ou appeler des fonctions. Utilisez uniquement des boucles et des conditions pour parcourir et afficher les données.
    Utilisation de for...of : Utilisez des boucles for...of pour parcourir les tableaux.

### Solution :
    Commencez par écrire votre solution dans un fichier JavaScript et testez-la pour vous assurer que les informations sont affichées correctement et formatées comme décrit.

Bonne chance !