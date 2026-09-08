"use client";

import { useState } from "react";

const etapes = [
  {
    numero: "01",
    titre: "Comprendre le e-commerce",
    description:
      "Comprends les bases : comment fonctionne une activité e-commerce, comment un client achète et où se crée la marge.",
    objectifs: [
      "Comprendre le fonctionnement du e-commerce",
      "Identifier les différents modèles",
      "Comprendre les coûts et la marge",
    ],
  },
  {
    numero: "02",
    titre: "Choisir ton modèle",
    description:
      "Détermine le modèle le plus adapté à ta situation : produit physique, digital, service ou autre modèle en ligne.",
    objectifs: [
      "Identifier ton modèle économique",
      "Définir ton client cible",
      "Évaluer tes ressources disponibles",
    ],
  },
  {
    numero: "03",
    titre: "Trouver une idée de produit",
    description:
      "Apprends à rechercher des produits intéressants et surtout à vérifier leur potentiel avant de dépenser ton argent.",
    objectifs: [
      "Rechercher des idées de produits",
      "Analyser la demande",
      "Éviter les mauvais produits",
    ],
  },
  {
    numero: "04",
    titre: "Valider ton idée",
    description:
      "Ne construis pas une boutique au hasard. Vérifie d'abord si ton idée peut réellement intéresser des clients.",
    objectifs: [
      "Analyser la concurrence",
      "Étudier le prix du marché",
      "Estimer la rentabilité",
    ],
  },
  {
    numero: "05",
    titre: "Préparer ton lancement",
    description:
      "Mets en place les éléments essentiels avant de commencer à vendre : offre, prix, communication et organisation.",
    objectifs: [
      "Construire ton offre",
      "Définir ton prix",
      "Préparer ton lancement",
    ],
  },
];

export default function Demarrer() {
  const [etapeActive, setEtapeActive] = useState(0);

  const etape = etapes[etapeActive];
  const progression = Math.round(
    ((etapeActive + 1) / etapes.length) * 100
  );

  return (
    <main className="parcours">
      <section className="hero">
        <p className="badge">SodyEcom-Intelligencia</p>

        <h1>Parcours DÉMARRER</h1>

        <p className="intro">
          Tu pars de zéro ? Avance étape par étape pour comprendre,
          choisir et préparer ton activité e-commerce avant d'investir.
        </p>
      </section>

      <section className="progression">
        <div className="progression-top">
          <strong>Ta progression</strong>
          <span>
            Étape {etapeActive + 1} / {etapes.length}
          </span>
        </div>

        <div className="progress-bar">
          <div style={{ width: `${progression}%` }} />
        </div>

        <small>{progression}% du parcours</small>
      </section>

      <section className="etapes">
        {etapes.map((item, index) => (
          <button
            key={item.numero}
            className={`etape ${
              index === etapeActive ? "active" : ""
            } ${index < etapeActive ? "terminee" : ""}`}
            onClick={() => setEtapeActive(index)}
          >
            <span className="numero">{item.numero}</span>

            <span className="etape-info">
              <strong>{item.titre}</strong>
              <small>
                {index < etapeActive
                  ? "✓ Terminée"
                  : index === etapeActive
                  ? "En cours"
                  : "À venir"}
              </small>
            </span>
          </button>
        ))}
      </section>

      <section className="contenu">
        <div className="contenu-header">
          <span>ÉTAPE {etape.numero}</span>
          <h2>{etape.titre}</h2>
        </div>

        <p className="description">{etape.description}</p>

        <h3>À la fin de cette étape, tu dois savoir :</h3>

        <ul>
          {etape.objectifs.map((objectif) => (
            <li key={objectif}>✓ {objectif}</li>
          ))}
        </ul>

        <div className="navigation">
          <button
            className="btn secondaire"
            disabled={etapeActive === 0}
            onClick={() =>
              setEtapeActive((ancienne) => Math.max(0, ancienne - 1))
            }
          >
            ← Précédent
          </button>

          {etapeActive < etapes.length - 1 ? (
            <button
              className="btn principal"
              onClick={() =>
                setEtapeActive((ancienne) =>
                  Math.min(etapes.length - 1, ancienne + 1)
                )
              }
            >
              Valider et continuer →
            </button>
          ) : (
            <a className="btn principal" href="/offres">
              Parcours terminé ✓
            </a>
          )}
        </div>
      </section>

      <section className="avertissement">
        <strong>Notre règle :</strong>
        <p>
          Ne dépense pas ton argent avant d'avoir validé ton idée.
          Le but de ce parcours est de réduire les erreurs coûteuses
          avant de passer à la construction de ton activité.
        </p>
      </section>
    </main>
  );
    }
