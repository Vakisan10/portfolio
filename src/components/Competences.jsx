import { useState } from "react";

const competences = [
  {
    id: "realiser",
    num: "C1",
    titre: "Réaliser",
    desc: "Développer des applications qui répondent à un besoin",
    couleur: "indigo",
    experiences: [
      "SAÉ S3 & S4 — application Java/Spring en groupe de 5",
      "Stage Lys Conseil — site vitrine HTML/CSS livré à un client réel",
      "Contribution à une page React Native en stage",
    ],
    preuves: [
      { label: "SAÉ S4 — GitHub", url: "https://github.com/Vakisan10/SAES401_Jupiter5" },
      { label: "SAÉ S3 — GitHub", url: "https://github.com/At9ph/SAE_Jupiter_D" },
    ],
    analyse:
      "Avant cette SAÉ, je savais coder des petits programmes seul. Ce projet m'a obligé à penser une architecture — comment les composants communiquent, comment la BDD s'intègre, comment plusieurs personnes peuvent travailler sur le même repo sans tout casser. En stage, créer un site pour un vrai client a ajouté une dimension que les SAÉ ne donnent pas : quelqu'un attend le résultat, et ce résultat va être utilisé.",
    niveau: { avant: "Débutant", apres: "Intermédiaire confirmé" },
    ameliorer: "Aller plus loin sur les tests automatisés et l'architecture front-end moderne (Next.js, TypeScript).",
    tags: ["Java", "Spring", "HTML", "CSS", "React Native"],
  },
  {
    id: "optimiser",
    num: "C2",
    titre: "Optimiser",
    desc: "Améliorer les performances ou la qualité d'une application",
    couleur: "violet",
    experiences: [
      "SAÉ S4 — reprise et amélioration complète du projet S3",
      "Site vitrine en stage — tests responsive sur mobile et desktop",
      "SAÉ S104 — comparaison script SQL manuel vs généré par AGL",
    ],
    preuves: [
      { label: "SAÉ S4 — GitHub", url: "https://github.com/Vakisan10/SAES401_Jupiter5" },
    ],
    analyse:
      "L'itération entre S3 et S4, c'est l'exemple le plus concret que j'ai d'optimisation. On a regardé ce qui ne fonctionnait pas bien, ce qui était mal structuré, et on a reconstruit certaines parties. Ce n'est pas très spectaculaire à montrer mais c'est l'exercice le plus formateur : relire son propre code avec un regard critique après plusieurs mois.",
    niveau: { avant: "Pas de recul critique", apres: "Capable de relire et itérer" },
    ameliorer: "Apprendre à mesurer les performances (profiling, benchmarks) plutôt que d'optimiser à l'instinct.",
    tags: ["Refactoring", "Responsive", "SQL"],
  },
  {
    id: "administrer",
    num: "C3",
    titre: "Administrer",
    desc: "Administration Linux, réseau, virtualisation, déploiement",
    couleur: "emerald",
    experiences: [
      "SAÉ S203 — installation et configuration d'un serveur web Apache2 (httpd.conf, .htaccess)",
      "SAÉ S203 — manipulation de machines virtuelles et mise en place de la communication réseau hôte/VM",
      "Hébergement de sites web sur Hostinger (stage)",
    ],
    preuves: [],
    analyse:
      "La SAÉ S203 m'a fait passer de la théorie réseau vue en cours à une configuration réelle. Installer Apache2, c'est une chose ; comprendre ce que chaque directive de httpd.conf change concrètement, ou pourquoi une règle .htaccess bloque ou autorise un accès, c'est différent. La partie la plus formatrice a été de faire communiquer la VM avec la machine hôte : ça m'a obligé à comprendre l'adressage et la configuration réseau plutôt que de la subir.",
    niveau: { avant: "Notions théoriques de réseau", apres: "Configuration réelle d'un serveur Apache2 et d'une communication hôte/VM" },
    ameliorer: "Aller plus loin sur la sécurisation d'un serveur (HTTPS, droits d'accès), Docker, et le déploiement d'une application complète sur un VPS.",
    tags: ["Linux", "Réseau", "Apache2", "Virtualisation"],
  },
  {
    id: "gerer",
    num: "C4",
    titre: "Gérer",
    desc: "Concevoir et exploiter des bases de données",
    couleur: "amber",
    experiences: [
      "SAÉ S104 — modèle EA, schéma relationnel, scripts SQL, peuplement depuis CSV",
      "Comparaison script manuel vs généré par AGL (logigramme, clés primaires/étrangères)",
      "BDD intégrée dans l'application développée en SAÉ S3 & S4",
      "Base de données WordPress via Fluent Form (stage Lys Conseil)",
    ],
    preuves: [],
    analyse:
      "La SAÉ S104 m'a vraiment appris à modéliser avant de coder. Avant, je faisais des tables SQL un peu au hasard. Après, je comprends pourquoi on normalise, pourquoi les clés étrangères existent, et comment la structure de la base impacte les requêtes. La comparaison manuel/AGL était intéressante : le script généré est plus rigoureux (NOT NULL partout, ALTER TABLE séparés) mais moins lisible au premier coup d'œil.",
    niveau: { avant: "SQL basique sans modélisation", apres: "Modélisation EA + implémentation PostgreSQL" },
    ameliorer: "Procédures stockées, optimisation de requêtes complexes, introduction aux bases NoSQL.",
    tags: ["PostgreSQL", "SQL", "Modèle EA", "WordPress"],
  },
  {
    id: "conduire",
    num: "C5",
    titre: "Conduire",
    desc: "Piloter un projet informatique",
    couleur: "rose",
    experiences: [
      "SAÉ 2.05 — Gantt, WBS, objectifs SMART, analyse des risques (binôme) — rapport complet",
      "SAÉ S3 & S4 — coordination d'une équipe de 5 sur plusieurs semaines",
      "Stage — gestion en autonomie avec points réguliers maître de stage",
    ],
    preuves: [{ label: "Rapport SAÉ 2.05 — Gestion de projet (PDF)", url: "https://github.com/Vakisan10/portfolio/raw/main/public/Gestion_de_projet_compte_rendue__2_.pdf" }],
    analyse:
      "La SAÉ 2.05 m'a donné les outils formels (Gantt, WBS, SMART). La SAÉ S3 & S4 m'a appris que la gestion de projet en vrai c'est surtout gérer les humains : qui fait quoi, quand, et comment on rattrape quand quelqu'un est bloqué. En stage, c'était différent encore : gérer ses propres priorités sans équipe, juste avec des deadlines et une cliente qui attend.",
    niveau: { avant: "Aucune méthode formelle", apres: "Maîtrise des outils de base, expérience en groupe réel" },
    ameliorer: "Utiliser Jira ou Trello dans un contexte pro réel, apprendre les méthodes agiles (Scrum).",
    tags: ["Gantt", "WBS", "SMART", "Analyse des risques", "Gestion d'équipe"],
  },
  {
    id: "collaborer",
    num: "C6",
    titre: "Collaborer",
    desc: "Travailler dans un contexte professionnel",
    couleur: "cyan",
    experiences: [
      "SAÉ S3 & S4 — Git collaboratif en groupe de 5 (branches, merges, conflits)",
      "Stage — relation client réelle, communication par WhatsApp, validation progressive",
      "Collaboration avec une étudiante de 3e année sur React Native",
    ],
    preuves: [
      { label: "SAÉ S3 — GitHub", url: "https://github.com/At9ph/SAE_Jupiter_D" },
      { label: "SAÉ S4 — GitHub", url: "https://github.com/Vakisan10/SAES401_Jupiter5" },
    ],
    analyse:
      "Git en groupe, c'est quelque chose qui s'apprend en le faisant. Les premiers conflits de merge font peur, après on comprend que c'est juste de la logique. Ce que le stage a ajouté : la collaboration avec une personne qui n'est pas étudiant, qui a ses propres contraintes et qui attend des résultats concrets. J'ai appris à formuler mes questions différemment, à présenter mon travail de façon plus professionnelle.",
    niveau: { avant: "Travail en groupe informel", apres: "Git maîtrisé, communication pro en contexte réel" },
    ameliorer: "Contribuer à un projet open source. Travailler dans une équipe avec des rituels agiles.",
    tags: ["Git", "Communication", "Travail en équipe"],
  },
];

const couleurs = {
  indigo: "bg-indigo-900/40 text-indigo-300 border-indigo-800",
  violet: "bg-violet-900/40 text-violet-300 border-violet-800",
  emerald: "bg-emerald-900/40 text-emerald-300 border-emerald-800",
  amber: "bg-amber-900/40 text-amber-300 border-amber-800",
  rose: "bg-rose-900/40 text-rose-300 border-rose-800",
  cyan: "bg-cyan-900/40 text-cyan-300 border-cyan-800",
};

const dotCouleurs = {
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  cyan: "bg-cyan-500",
};

export default function Competences() {
  const [filtre, setFiltre] = useState("all");
  const [recherche, setRecherche] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [ouvert, setOuvert] = useState(null);

  const handleSearch = (val) => {
    setRecherche(val);
    if (!val) { setSuggestions([]); return; }
    const s = competences.filter(
      (c) =>
        c.titre.toLowerCase().includes(val.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(val.toLowerCase())) ||
        c.desc.toLowerCase().includes(val.toLowerCase())
    );
    setSuggestions(s);
  };

  const choisirSuggestion = (c) => {
    setFiltre(c.id);
    setRecherche("");
    setSuggestions([]);
  };

  const filtrees = competences.filter((c) => filtre === "all" || c.id === filtre);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Compétences</h2>
        <p className="text-zinc-400 text-sm">Les 6 compétences du BUT Informatique — preuves, analyse et auto-évaluation</p>
      </div>

      {/* Recherche */}
      <div className="relative">
        <input
          type="text"
          value={recherche}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher par technologie, compétence..."
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-600"
        />
        {suggestions.length > 0 && (
          <div className="absolute top-full mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-lg z-10 overflow-hidden">
            {suggestions.map((s) => (
              <button
                key={s.id}
                onClick={() => choisirSuggestion(s)}
                className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 flex items-center gap-3"
              >
                <span className="text-zinc-500 font-mono text-xs">{s.num}</span>
                <span>{s.titre}</span>
                <span className="text-zinc-600 text-xs ml-auto">{s.tags.join(", ")}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFiltre("all")}
          className={`px-3 py-1.5 rounded-full text-xs border transition-all ${filtre === "all" ? "bg-zinc-700 text-zinc-100 border-zinc-600" : "text-zinc-400 border-zinc-700 hover:border-zinc-500"}`}
        >
          Toutes
        </button>
        {competences.map((c) => (
          <button
            key={c.id}
            onClick={() => setFiltre(c.id)}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all ${filtre === c.id ? `${couleurs[c.couleur]} border` : "text-zinc-400 border-zinc-700 hover:border-zinc-500"}`}
          >
            {c.num} — {c.titre}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {filtrees.map((c) => (
          <div key={c.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            {/* Header */}
            <button
              className="w-full text-left p-5 flex items-start gap-4 hover:bg-zinc-800/50 transition-all"
              onClick={() => setOuvert(ouvert === c.id ? null : c.id)}
            >
              <div className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${dotCouleurs[c.couleur]}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${couleurs[c.couleur]}`}>{c.num}</span>
                  <h3 className="text-base font-medium">{c.titre}</h3>
                </div>
                <p className="text-sm text-zinc-400 mt-1">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <span className="text-zinc-600 text-sm shrink-0">{ouvert === c.id ? "▲" : "▼"}</span>
            </button>

            {/* Détail */}
            {ouvert === c.id && (
              <div className="border-t border-zinc-800 p-5 space-y-5">
                {/* Arbre compétences */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Expériences associées</p>
                  <div className="space-y-2">
                    {c.experiences.map((exp, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotCouleurs[c.couleur]}`} />
                        <p className="text-sm text-zinc-300">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preuves */}
                {c.preuves.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Preuves</p>
                    <div className="flex flex-wrap gap-3">
                      {c.preuves.map((p) => (
                        <a
                          key={p.url}
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 border border-zinc-700 hover:border-indigo-700 rounded-lg px-3 py-2 transition-all"
                        >
                          <span>↗</span> {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Analyse réflexive */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Analyse réflexive</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{c.analyse}</p>
                </div>

                {/* Niveau avant/après */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-800/60 rounded-lg p-3">
                    <p className="text-xs text-zinc-500 mb-1">Avant</p>
                    <p className="text-sm text-zinc-300">{c.niveau.avant}</p>
                  </div>
                  <div className={`rounded-lg p-3 ${couleurs[c.couleur]} bg-opacity-20`}>
                    <p className="text-xs opacity-70 mb-1">Après</p>
                    <p className="text-sm">{c.niveau.apres}</p>
                  </div>
                </div>

                {/* À améliorer */}
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Ce qu'il me reste à améliorer</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{c.ameliorer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
