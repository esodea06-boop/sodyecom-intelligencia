const etapes = [
  {
    numero: "01",
    titre: "Comprendre le e-commerce",
    description:
      "Découvre comment fonctionne une activité e-commerce et les éléments indispensables avant de commencer.",
  },
  {
    numero: "02",
    titre: "Choisir ton modèle",
    description:
      "Identifie le modèle e-commerce le plus adapté à tes moyens, ton marché et tes objectifs.",
  },
  {
    numero: "03",
    titre: "Trouver une idée de produit",
    description:
      "Apprends à rechercher et sélectionner une idée de produit avec un vrai potentiel commercial.",
  },
  {
    numero: "04",
    titre: "Préparer ton lancement",
    description:
      "Mets en place les premières actions nécessaires pour passer de l'idée à un projet concret.",
  },
];

export default function Demarrer() {
  return (
    <main>
      <section>
        <p>SodyEcom-Intelligencia</p>

        <h1>Parcours DÉMARRER</h1>

        <p>
          Tu pars de zéro ? Ce parcours t'aide à comprendre les bases,
          choisir ta direction et préparer ton lancement étape par étape.
        </p>

        <div>
          <strong>Progression</strong>
          <p>0 / 4 étapes terminées</p>
        </div>
      </section>

      <section>
        <h2>Ton parcours</h2>

        <div>
          {etapes.map((etape) => (
            <article key={etape.numero}>
              <span>{etape.numero}</span>

              <h3>{etape.titre}</h3>

              <p>{etape.description}</p>

              <a href={`/demarrer/${etape.numero}`}>
                Commencer cette étape →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Objectif du parcours</h2>

        <p>
          À la fin, tu dois être capable de comprendre ton marché,
          choisir un modèle, sélectionner une idée de produit et préparer
          les premières actions de ton activité.
        </p>

        <a href="/offres">← Retour aux offres</a>
      </section>
    </main>
  );
}
