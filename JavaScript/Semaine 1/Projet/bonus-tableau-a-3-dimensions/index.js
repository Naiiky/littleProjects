// Voici la structure de vos données :
const data = [
  {
    country: "France",
    regions: [
      {
        regionName: "Île-de-France",
        cities: [
          {
            cityName: "Paris",
            population: 2148327,
            industries: ["Tourism", "Fashion", "Finance"],
          },
          {
            cityName: "Versailles",
            population: 85671,
            industries: ["Tourism", "Historical sites"],
          },
        ],
      },
      {
        regionName: "Provence-Alpes-Côte d'Azur",
        cities: [
          {
            cityName: "Marseille",
            population: 861635,
            industries: ["Shipping", "Tourism", "Petrochemical"],
          },
          {
            cityName: "Nice",
            population: 342522,
            industries: ["Tourism", "Technology"],
          },
        ],
      },
    ],
  },
  {
    country: "Japan",
    regions: [
      {
        regionName: "Kanto",
        cities: [
          {
            cityName: "Tokyo",
            population: 13929286,
            industries: ["Finance", "Technology", "Manufacturing"],
          },
          {
            cityName: "Yokohama",
            population: 3726167,
            industries: ["Shipping", "Technology"],
          },
        ],
      },
      {
        regionName: "Kansai",
        cities: [
          {
            cityName: "Osaka",
            population: 2711536,
            industries: ["Manufacturing", "Finance", "Retail"],
          },
          {
            cityName: "Kyoto",
            population: 1474570,
            industries: ["Tourism", "Education", "Technology"],
          },
        ],
      },
    ],
  },
];

// Ce bloc de code parcourt une structure de données complexe (un tableau d'objets, chaque objet représentant un pays)
for (let pays of data) {
  // Affiche le nom du pays
  document.write(`<h1>Pays: ${pays.country}</h1>`);
  // Parcourt les régions de chaque pays
  for (let région of pays.regions) {
    // Affiche le nom de la région
    document.write(`  <h2>Région: ${région.regionName}</h2>`);
    // Parcourt les villes de chaque région
    for (let ville of région.cities) {
      // Affiche le nom de la ville
      document.write(`    <h3>Ville: ${ville.cityName}</h3>`);
      // Affiche la population de la ville
      document.write(`      <p>Population: ${ville.population}</p>`);
      // Affiche les industries principales de la ville, séparées par des virgules
      document.write(`      <p>Industries: ${ville.industries.join(", ")}</p>`); // le .join me permet d'afficher toutes les donner du tableau en chaine de caractere a la suite
    }
  }
}
