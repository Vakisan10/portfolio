import { useState } from "react";

const saes = [
  {
    id: "jupiter",
    label: "S3 & S4 · Projet phare",
    titre: "SAÉ, application de gestion",
    contexte: "Groupe de 5 · Semestres 3 et 4",
    objectif:
      "Concevoir et développer une application complète de gestion en Java/Spring Boot avec base de données intégrée, sur deux semestres : d'abord une première version en S3, puis une version améliorée en S4.",
    organisation:
      "Équipe de 5 étudiants. J'ai coordonné l'équipe en S4 tout en contribuant au développement back-end. On utilisait Git avec des branches par fonctionnalité, ce qui a évité pas mal de conflits.",
    role: "Coordination de l'équipe, développement back-end, gestion du dépôt Git.",
    difficultes: [
      {
        pb: "Conflits Git à répétition en S3",
        sol: "Mise en place de branches par fonctionnalité, avec une règle de merge uniquement après relecture",
      },
      {
        pb: "Intégration de la base de données dans l'application",
        sol: "Documentation des modèles en amont, puis tests progressifs avant intégration complète",
      },
      {
        pb: "Coordination d'une équipe avec des niveaux différents",
        sol: "Points réguliers, découpage clair des tâches, aide aux bloqués sans faire le travail à leur place",
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
    titre: "SAÉ S104, Bases de données et langage SQL",
    contexte: "Individuel · Semestre 1 · PostgreSQL",
    objectif:
      "Concevoir de A à Z une base de données sur les libertés politiques dans le monde. Trois parties : script SQL manuel avec modèle entités-associations et schéma relationnel, modélisation via AGL (logigramme comparatif), et peuplement des tables depuis un fichier CSV.",
    organisation:
      "Travail entièrement individuel. J'ai d'abord construit le modèle EA (4 entités : REGION, COUNTRY, FREEDOM, STATUS), puis le schéma relationnel avec les clés étrangères, puis le script SQL. Ensuite j'ai refait la même base avec un AGL pour comparer les deux approches. Enfin, le peuplement via une table temporaire et des INSERT conditionnels.",
    role: "Travail entièrement individuel.",
    difficultes: [
      {
        pb: "Comprendre la différence entre script SQL manuel et généré par AGL",
        sol: "Comparaison point par point : le script AGL ajoute systématiquement NOT NULL, sépare les ALTER TABLE des CREATE TABLE, et nomme les contraintes. Plus rigoureux, mais moins lisible en première lecture.",
      },
      {
        pb: "Peuplement depuis un CSV avec plusieurs tables interdépendantes",
        sol: "Création d'une table temporaire contenant toutes les colonnes du CSV, puis INSERT sélectifs avec NOT EXISTS pour chaque table cible, ce qui évite les doublons et respecte les contraintes de clés étrangères.",
      },
      {
        pb: "Choisir entre association fonctionnelle et maillée pour l'illustration AGL",
        sol: "Les cardinalités de la SAÉ ne produisaient pas d'association fonctionnelle naturelle. J'ai adapté une partie du modèle pour illustrer les deux cas, en le justifiant dans le rapport.",
      },
    ],
    competences: [
      { label: "Gérer", avant: "SQL intuitif sans modélisation formelle", apres: "Modélisation EA complète → schéma relationnel → SQL → peuplement depuis CSV" },
      { label: "Optimiser", avant: "Pas de notion de normalisation", apres: "Conscience des clés étrangères, NOT NULL, et de leur impact sur les requêtes" },
    ],
    perspectives:
      "Aller plus loin sur les requêtes complexes (jointures multiples, agrégats). Découvrir les procédures stockées et les index pour l'optimisation.",
    preuves: [
      { label: "Rapport SAÉ S104 (PDF)", url: "https://github.com/Vakisan10/portfolio/raw/main/public/Mathignanasingam_Vakisan_sae.pdf" },
    ],
  },
  {
    id: "calculatrice",
    label: "S2 · BUT 1",
    titre: "SAÉ Calculatrice, Programmation Orientée Objet Java",
    contexte: "Individuel · Semestre 2 · Java",
    objectif:
      "Concevoir une calculatrice en Java en utilisant les principes de la POO : hiérarchie de classes, héritage, polymorphisme. Résultat : une calculatrice capable d'évaluer des expressions arithmétiques complexes imbriquées, représentées sous forme d'arbre d'expressions.",
    organisation:
      "Travail individuel. J'ai d'abord modélisé la hiérarchie avant d'écrire une seule ligne de code : Expression (abstraite) → Nombre (feuille) et Operation (abstraite) → Addition, Soustraction, Multiplication, Division.",
    role: "Conception de l'architecture et développement complet.",
    difficultes: [
      {
        pb: "Comprendre le polymorphisme appliqué à un arbre d'expressions",
        sol: "La méthode valeur() est abstraite dans Expression. Chaque classe concrète l'implémente différemment. Java appelle automatiquement la bonne version selon le type réel de l'objet : c'est ça le polymorphisme.",
      },
      {
        pb: "Représenter ((17 - 2) / (2 + 3)) comme un objet",
        sol: "Chaque opération prend deux Expression en paramètre, qui peuvent elles-mêmes être des opérations. On construit un arbre, l'évaluation se fait récursivement.",
      },
    ],
    code: `abstract class Expression {
    public abstract double valeur();
}

class Nombre extends Expression {
    private double valeur;
    public Nombre(double valeur) { this.valeur = valeur; }
    public double valeur() { return this.valeur; }
    public String toString() { return Double.toString(this.valeur); }
}

abstract class Operation extends Expression {
    protected Expression operande1, operande2;
    public Operation(Expression op1, Expression op2) {
        this.operande1 = op1; this.operande2 = op2;
    }
}

class Division extends Operation {
    public Division(Expression op1, Expression op2) { super(op1, op2); }
    public double valeur() { return operande1.valeur() / operande2.valeur(); }
    public String toString() { return "(" + operande1 + " / " + operande2 + ")"; }
}

// Test : ((17.0 - 2.0) / (2.0 + 3.0)) = 3.0
Expression d = new Division(
    new Soustraction(new Nombre(17), new Nombre(2)),
    new Addition(new Nombre(2), new Nombre(3))
);
System.out.println(d + " = " + d.valeur()); // 3.0`,
    competences: [
      { label: "Réaliser", avant: "Code procédural, pas de conception objet", apres: "Architecture OOP : héritage + polymorphisme + encapsulation" },
      { label: "Optimiser", avant: "Duplication de logique par type d'opération", apres: "Chaque classe encapsule sa logique, code extensible sans modifier l'existant" },
    ],
    perspectives:
      "Ajouter la gestion d'erreurs (division par zéro). Implémenter un parser pour lire des expressions depuis une chaîne texte. Ajouter des fonctions mathématiques (puissance, racine carrée).",
    preuves: [],
  },
  {
    id: "gestion",
    label: "S2 · BUT 1",
    titre: "SAÉ 2.05, Gestion de projet",
    contexte: "Binôme · Semestre 2",
    objectif:
      "Appliquer les méthodes de gestion de projet sur un cas fictif : réaménager une chambre pour la louer. Définir les enjeux, contraintes, WBS, Gantt, objectifs SMART, analyse des risques.",
    organisation:
      "Binôme. Répartition des tâches : analyse des besoins et rédaction des objectifs SMART d'un côté, construction du Gantt et tableau des ressources de l'autre. Points réguliers pour aligner les réponses.",
    role: "Analyse des besoins et contraintes, objectifs SMART, analyse des risques.",
    difficultes: [
      {
        pb: "Estimer les durées des tâches sans expérience réelle de chantier",
        sol: "S'appuyer sur les informations du sujet et décomposer les tâches au maximum pour réduire l'incertitude",
      },
      {
        pb: "Trouver des objectifs SMART cohérents avec le cas",
        sol: "Repartir du besoin client plutôt que d'inventer des objectifs abstraits, ce qui a rendu le SMART plus ancré",
      },
    ],
    competences: [
      { label: "Conduire", avant: "Aucune méthode formelle de gestion", apres: "Gantt, WBS, SMART, analyse des risques avec plan d'action" },
      { label: "Collaborer", avant: "Travail en binôme informel", apres: "Organisation structurée avec répartition claire des tâches" },
    ],
    perspectives:
      "Appliquer ces méthodes sur un projet informatique réel. Découvrir des outils comme Jira ou Trello pour suivre l'avancement en temps réel.",
    preuves: [],
  },
  {
    id: "reseau",
    label: "S2 · BUT 1",
    titre: "SAÉ S203, Installation de services réseau",
    contexte: "Semestre 2 · Apache2 · Virtualisation",
    objectif:
      "Installer et configurer un serveur web Apache2, puis mettre en place la communication réseau entre une machine virtuelle et la machine hôte.",
    organisation:
      "Mise en place d'une VM dédiée au serveur, configuration des fichiers httpd.conf et des règles .htaccess, puis vérification de l'accès au serveur depuis la machine hôte.",
    role: "Installation et configuration du serveur, manipulation de la VM, mise en place de la communication réseau hôte/VM.",
    difficultes: [
      {
        pb: "Comprendre la structure de httpd.conf et son impact sur le comportement du serveur",
        sol: "Modification progressive des directives une par une, en testant l'effet de chaque changement avant de passer à la suivante",
      },
      {
        pb: "Restreindre ou autoriser l'accès à certains répertoires via .htaccess",
        sol: "Tests successifs des règles depuis la machine hôte pour vérifier qu'elles produisaient bien le comportement attendu",
      },
      {
        pb: "Établir la communication réseau entre la VM et la machine hôte",
        sol: "Vérification de la configuration réseau de la VM (adressage, mode de connexion) jusqu'à obtenir un accès stable au serveur depuis l'hôte",
      },
    ],
    competences: [
      { label: "Administrer", avant: "Notions théoriques sur les serveurs web", apres: "Installation et configuration réelle d'Apache2 (httpd.conf, .htaccess)" },
      { label: "Administrer", avant: "Pas de pratique de la virtualisation", apres: "Manipulation de VM et configuration de la communication réseau hôte/VM" },
    ],
    perspectives:
      "Approfondir la sécurisation d'un serveur web (HTTPS, droits d'accès plus fins). Découvrir d'autres serveurs (Nginx) et les comparer à Apache2.",
    preuves: [],
  },
];

export default function SAE() {
  const [ouvert, setOuvert] = useState("jupiter");

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold mb-1 tracking-tight">SAÉ</h2>
        <p className="text-zinc-500 text-sm">Situations d'apprentissage et d'évaluation, analyse réflexive de chaque projet</p>
      </div>

      <div className="space-y-3">
        {saes.map((s) => (
          <div key={s.id} className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden card-hover">
            <button
              className="w-full text-left p-5 hover:bg-zinc-800/30 transition-all"
              onClick={() => setOuvert(ouvert === s.id ? null : s.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs text-indigo-400 font-mono">{s.label}</span>
                  <h3 className="text-base font-medium mt-0.5 text-zinc-100">{s.titre}</h3>
                  <p className="text-xs text-zinc-500 mt-1">{s.contexte}</p>
                </div>
                <span className="text-zinc-600 text-xs shrink-0 mt-1 border border-zinc-700 rounded px-1.5 py-0.5">
                  {ouvert === s.id ? "▲" : "▼"}
                </span>
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
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Organisation</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{s.organisation}</p>
                  </div>
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Mon rôle</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{s.role}</p>
                  </div>
                </div>

                {/* Difficultés */}
                {s.difficultes.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Difficultés & solutions</p>
                    <div className="space-y-3">
                      {s.difficultes.map((d, i) => (
                        <div key={i} className="bg-zinc-800/50 rounded-lg p-4 space-y-1.5 border border-zinc-700/50">
                          <p className="text-sm text-zinc-300 font-medium">{d.pb}</p>
                          <p className="text-sm text-zinc-400">{d.sol}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bloc code si présent */}
                {s.code && (
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Extrait de code, architecture principale</p>
                    <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto text-xs text-zinc-300 font-mono leading-relaxed">
                      {s.code}
                    </pre>
                  </div>
                )}

                {/* Compétences */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Compétences mobilisées</p>
                  <div className="space-y-3">
                    {s.competences.map((c, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-xs bg-indigo-900/40 text-indigo-300 border border-indigo-800/60 px-2.5 py-0.5 rounded-full shrink-0">
                          {c.label}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-zinc-500 text-xs flex-wrap">
                          <span className="text-zinc-500">{c.avant}</span>
                          <span className="text-zinc-600">→</span>
                          <span className="text-zinc-300">{c.apres}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preuves */}
                {s.preuves && s.preuves.length > 0 && (
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
