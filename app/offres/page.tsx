export default function Offres() {
  const offres = [
    {
      nom: "DÉMARRER",
      description:
        "Pour comprendre les bases du e-commerce et savoir par où commencer.",
      points: [
        "Fondamentaux du e-commerce",
        "Choisir son modèle",
        "Trouver une idée de produit",
        "Premières étapes pour se lancer",
      ],
      action: "Commencer",
    },
    {
      nom: "CONSTRUIRE",
      description:
        "Pour construire une activité e-commerce avec une méthode structurée.",
      points: [
        "Formation complète",
        "Construction de la boutique",
        "Choix et validation des produits",
        "Méthodes de vente et acquisition",
      ],
      action: "Construire mon activité",
    },
    {
      nom: "ACCÉLÉRER",
      description:
        "Pour avancer plus vite avec une stratégie et un accompagnement personnalisé.",
      points: [
        "Formation complète",
        "Accompagnement personnalisé",
        "Analyse de ton projet",
        "Plan d'action et suivi",
      ],
      action: "Être accompagné",
    },
  ];

  return (
    <main>
      <section>
        <p>SodyEcom-Intelligencia</p>

        <h1>Choisis ton parcours</h1>

        <p>
          Que tu partes de zéro ou que tu aies déjà commencé,
          choisis le niveau d'accompagnement adapté à ton objectif.
        </p>
      </section>

      <section>
        {offres.map((offre) => (
          <article key={offre.nom}>
            <h2>{offre.nom}</h2>

            <p>{offre.description}</p>

            <ul>
              {offre.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a href="/paiement">{offre.action}</a>
          </article>
        ))}
      </section>
    </main>
  );
          }
