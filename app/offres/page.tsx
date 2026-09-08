const offres = [
  {
    id: "demarrer",
    nom: "DÉMARRER",
    prix: "5 000 FCFA",
    description:
      "Pour comprendre les bases du e-commerce et poser les premières fondations de ton activité.",
    points: [
      "Fondamentaux du e-commerce",
      "Choisir son modèle",
      "Trouver une idée de produit",
      "Premières étapes pour se lancer",
    ],
    action: "Commencer",
  },
  {
    id: "construire",
    nom: "CONSTRUIRE",
    prix: "25 000 FCFA",
    description:
      "Pour construire une véritable activité e-commerce avec une méthode claire et structurée.",
    points: [
      "Formation complète",
      "Construction de la boutique",
      "Choix et validation des produits",
      "Méthodes de vente et acquisition",
    ],
    action: "Construire mon activité",
  },
  {
    id: "accelerer",
    nom: "ACCÉLÉRER",
    prix: "75 000 FCFA",
    description:
      "Pour avancer plus vite avec un accompagnement personnalisé et un plan d'action concret.",
    points: [
      "Formation complète",
      "Accompagnement personnalisé",
      "Analyse de ton projet",
      "Plan d'action et suivi",
    ],
    action: "Être accompagné",
  },
];

export default function Offres() {
  return (
    <main>
      <section>
        <p>SodyEcom-Intelligencia</p>

        <h1>Choisis ton parcours</h1>

        <p>
          Que tu partes de zéro ou que tu aies déjà une activité,
          choisis le niveau d'accompagnement qui correspond à ta situation.
        </p>
      </section>

      <section>
        {offres.map((offre) => (
          <article key={offre.id}>
            <h2>{offre.nom}</h2>

            <h3>{offre.prix}</h3>

            <p>{offre.description}</p>

            <ul>
              {offre.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a href={`/paiement?offre=${offre.id}`}>
              {offre.action}
            </a>
          </article>
        ))}
      </section>
    </main>
  );
            }
