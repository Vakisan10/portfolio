import { useState } from "react";

const saes = [
  {
    id: "jupiter",
    label: "S3 & S4 · Projet phare",
    titre: "SAÉ Jupiter — Application de gestion",
    contexte: "Groupe de 5 · Semestres 3 et 4",
    objectif:
      "Concevoir et développer une application complète de gestion en Java/Spring Boot avec base de données intégrée, sur deux semestres — d'abord une première version en S3, puis une version améliorée en S4.",
    organisation:
      "Équipe de 5 étudiants. J'ai coordonné l'équipe en S4 tout en contribuant au développement back-end. On utilisait Git avec des branches par fonctionnalité — ce qui a évité pas mal de conflits.",
    role: "Coordination de l'équipe, développement back-end, gestion du dépôt Git.",
    difficultes: [
      {
        pb: "Conflits Git à répétition en S3",
        sol: "Mise en place de branches par fonctionnalité + règle de merge uniquement après relecture",
      },
      {
        pb: "Intégration de la base de données dans l'application",
        sol: "Documentation des modèles en amont, tests progressifs avant intégration complète",
      },
      {
        pb: "Coordination d'une équipe de 5 avec des niveaux différents",
        sol: "Points réguliers, découpage clair des tâches, aide aux bloqués sans faire à leur place",
      },
    ],
    competences: [
      { label: "Réaliser", avant: "Scripts isolés", apres: "Architecture complète avec API + BDD" },
      { label: "Collaborer", avant: "Git individuel", apres: "Git collaboratif maîtrisé (branches, merge)" },
      { label: "Gérer", avant: "SQL basique", apres: "BDD intégrée dans une app réelle" },
      { label: "Conduire", avant: "Pas de coordination formelle", apres: "Coordination d'équipe sur plusieurs semaines" },
    ],
    perspectives:
      "Ajouter des tests unitaires (on n'en avait aucun). Améliorer la documentation du code. Découvrir comment déployer l'application sur un serveur plutôt que de la faire tourner seulement en local.",
    preuves: [
      { label: "GitHub S3", url: "https://github.com/At9ph/SAE_Jupiter_D" },
      { label: "GitHub S4", url: "https://github.com/Vakisan10/SAES401_Jupiter5" },
    ],
  },
  {
    id: "bdd",
    label: "S1 · BUT 1",
    titre: "SAÉ S104 — Bases de données et langage SQL",
    contexte: "Individuel · Semestre 1",
    objectif:
      "Concevoir une base de données sur les libertés dans le monde : modélisation entités-associations, schéma relationnel, scripts SQL de création manuelle et via AGL, peuplement à partir d'un fichier CSV.",
    organisation:
      "Travail individuel. La SAÉ était découpée en trois parties : script manuel, modélisation AGL avec comparaison, puis peuplement des tables.",
    role: "Travail entièrement individuel.",
    difficultes: [
      {
        pb: "Différence entre script SQL manuel et généré par AGL",
        sol: "Comparaison point par point : le script AGL ajoute NOT NULL partout et sépare les ALTER TABLE — plus rigoureux mais moins lisible au premier coup d'œil",
      },
      {
        pb: "Peuplement depuis un CSV avec plusieurs tables liées",
        sol: "Utilisation d'une table temporaire + INSERT conditionnels avec NOT EXISTS pour éviter les doublons",
      },
    ],
    competences: [
      { label: "Gérer", avant: "SQL intuitif sans modélisation", apres: "Modélisation EA → schéma → SQL → données" },
    ],
    perspectives:
      "Aller plus loin sur les requêtes complexes (jointures multiples, agrégats). Découvrir les procédures stockées et les index pour l'optimisation.",
    preuves: [],
  },
  {
    id: "gestion",
    label: "S2 · BUT 1",
    titre: "SAÉ 2.05 — Gestion de projet",
    contexte: "Binôme avec Hakan Turkmen · Semestre 2",
    objectif:
      "Appliquer les méthodes de gestion de projet sur un cas fictif : réaménager une chambre pour la louer. Définir les enjeux, contraintes, WBS, Gantt, objectifs SMART, risques.",
    organisation:
      "Binôme. Répartition des tâches entre analyse des besoins (plutôt moi) et construction du Gantt et du tableau des ressources (plutôt Hakan). Points réguliers pour aligner nos réponses.",
    role: "Analyse des besoins et contraintes, objectifs SMART, analyse des risques.",
    difficultes: [
      {
        pb: "Estimer les durées des tâches sans expérience réelle de chantier",
        sol: "S'appuyer sur les informations du sujet et décomposer les tâches au maximum pour réduire l'incertitude",
      },
      {
        pb: "Trouver des objectifs SMART cohérents avec le cas",
        sol: "Repartir du besoin client plutôt que d'inventer des objectifs en l'air",
      },
    ],
    competences: [
      { label: "Conduire", avant: "Aucune méthode formelle de gestion", apres: "Gantt, WBS, SMART, analyse des risques opérationnelle" },
      { label: "Collaborer", avant: "Travail en binôme informel", apres: "Organisation structurée avec répartition claire" },
    ],
    perspectives:
      "Appliquer ces méthodes sur un projet informatique réel plutôt qu'un cas fictif. Découvrir des outils comme Jira ou Trello pour suivre l'avancement en temps réel.",
    preuves: [],
  },
  {
    id: "expression",
    label: "S1 · BUT 1",
    titre: "SAÉ Expression",
    contexte: "BUT 1 · Semestre 1",
    objectif:
      "Production de documents écrits structurés et présentation orale. Travailler la communication écrite et orale en contexte professionnel.",
    organisation: "Travail en groupe.",
    role: "Rédaction et contribution à la présentation.",
    difficultes: [],
    competences: [
      { label: "Collaborer", avant: "Communication informelle", apres: "Structuration d'un document pro, prise de parole en groupe" },
    ],
    perspectives: "Continuer à travailler la prise de parole en public, notamment en présentation technique.",
    preuves: [],
  },
];

export default function SAE() {
  const [ouvert, setOuvert] = useState("jupiter");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-1">SAÉ</h2>
        <p className="text-zinc-400 text-sm">Situations d'apprentissage et d'évaluation — toutes les SAÉ archivées avec analyse</p>
      </div>

      <div className="space-y-3">
        {saes.map((s) => (
          <div key={s.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <button
              className="w-full text-left p-5 hover:bg-zinc-800/40 transition-all"
              onClick={() => setOuvert(ouvert === s.id ? null : s.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs text-indigo-400 font-mono">{s.label}</span>
                  <h3 className="text-base font-medium mt-0.5">{s.titre}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{s.contexte}</p>
                </div>
                <span className="text-zinc-600 text-sm shrink-0 mt-1">{ouvert === s.id ? "▲" : "▼"}</span>
              </div>
            </button>

            {ouvert === s.id && (
              <div className="border-t border-zinc-800 p-5 space-y-6">
                {/* Objectif */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Objectif de la SAÉ</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{s.objectif}</p>
                </div>

                {/* Organisation + rôle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Organisation du travail</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{s.organisation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Mon rôle</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{s.role}</p>
                  </div>
                </div>

                {/* Difficultés */}
                {s.difficultes.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Difficultés rencontrées & solutions</p>
                    <div className="space-y-3">
                      {s.difficultes.map((d, i) => (
                        <div key={i} className="bg-zinc-800/50 rounded-lg p-4 space-y-2">
                          <p className="text-sm text-rose-300 font-medium">Problème : {d.pb}</p>
                          <p className="text-sm text-emerald-300">Solution : {d.sol}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compétences */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Compétences mobilisées</p>
                  <div className="space-y-3">
                    {s.competences.map((c, i) => (
                      <div key={i} className="space-y-1.5">
                        <span className="text-xs bg-indigo-900/40 text-indigo-300 border border-indigo-800 px-2.5 py-0.5 rounded-full">{c.label}</span>
                        <div className="flex gap-3 text-sm ml-1">
                          <span className="text-zinc-500">Avant : <span className="text-zinc-400">{c.avant}</span></span>
                          <span className="text-zinc-600">→</span>
                          <span className="text-zinc-400">Après : <span className="text-zinc-200">{c.apres}</span></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preuves */}
                {s.preuves.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Preuves</p>
                    <div className="flex flex-wrap gap-3">
                      {s.preuves.map((p) => (
                        <a key={p.url} href={p.url} target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 border border-zinc-700 hover:border-indigo-700 rounded-lg px-3 py-2 transition-all">
                          <span>↗</span> {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Perspectives */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Perspectives d'amélioration</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.perspectives}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
