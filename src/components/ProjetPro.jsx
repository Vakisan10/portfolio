const competencesADev = [
  { label: "Développement mobile", niveau: 25, desc: "React Native — découvert en stage, à approfondir" },
  { label: "Développement web moderne", niveau: 55, desc: "React, écosystèmes front-end actuels — à pousser plus loin" },
  { label: "Architecture back-end", niveau: 45, desc: "API REST, microservices — base posée avec Spring" },
  { label: "Développement web", niveau: 65, desc: "HTML/CSS + React — confirmé en stage et SAÉ" },
  { label: "Bases de données SQL", niveau: 72, desc: "PostgreSQL, modélisation — maîtrisé depuis S104" },
];

const objectifs = [
  {
    periode: "BUT 3",
    items: [
      "Trouver une alternance en développement web ou logiciel pour accumuler de l'expérience sur la durée",
      "Approfondir le développement web moderne (React, écosystèmes front-end actuels) et me lancer sérieusement sur le mobile",
      "Travailler dans une équipe avec des rituels agiles (Scrum, sprints)",
      "Contribuer à un projet open source, même modestement",
    ],
  },
  {
    periode: "Après le BUT",
    items: [
      "Travailler dans une équipe produit sur une application à fort impact utilisateur, web ou mobile",
      "Continuer à monter en compétences sur le développement web et mobile : architecture, performance, expérience utilisateur",
      "Peut-être une spécialisation progressive vers le mobile selon ce que les alternances m'apportent",
    ],
  },
];

export default function ProjetPro() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Projet professionnel</h2>
        <p className="text-zinc-400 text-sm">Où je veux aller et pourquoi</p>
      </div>

      {/* Secteur */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <div>
          <span className="text-xs text-indigo-400 font-mono">Secteur visé</span>
          <h3 className="text-lg font-medium mt-1">Développement logiciel & web</h3>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Mon intérêt pour l'informatique n'est pas né d'un coup. En STI2D, je concevais des systèmes sur papier. En BUT, je les fais tourner. Le stage chez Lys Conseil a confirmé ce que je ressentais depuis S3 : j'aime le cycle complet — comprendre un besoin, concevoir une solution, la coder, la livrer à quelqu'un qui va vraiment l'utiliser.
        </p>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Je ne dis pas "développeur" parce que c'est vague. Ce qui m'attire concrètement : le back-end, la logique des systèmes, la façon dont les données circulent. Le front-end m'intéresse aussi, mais comme moyen de rendre quelque chose accessible, pas comme fin en soi.
        </p>
      </div>

      {/* Métiers */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Métiers qui m'intéressent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-medium">Développeur full-stack</h3>
            <p className="text-sm text-zinc-400">Concevoir et maintenir des applications web de bout en bout — front et back. C'est ce que ma SAÉ d'application de gestion en groupe m'a donné un premier aperçu de faire.</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-medium">Développeur back-end</h3>
            <p className="text-sm text-zinc-400">API, bases de données, performance, architecture. C'est là où je me sens le plus à l'aise et où j'ai le plus envie de progresser.</p>
          </div>
        </div>
      </div>

      {/* Compétences à développer */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Compétences à développer</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
          {competencesADev.map((c, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-200">{c.label}</span>
                <span className="text-xs text-zinc-500">{c.niveau}%</span>
              </div>
              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${c.niveau}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Objectifs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Objectifs</h2>
        <div className="space-y-4">
          {objectifs.map((o) => (
            <div key={o.periode} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
              <span className="text-xs font-mono text-indigo-400">{o.periode}</span>
              <ul className="space-y-2">
                {o.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-indigo-500 mt-0.5 shrink-0">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lien avec ce qui précède */}
      <div className="bg-zinc-900 border border-zinc-800 border-l-2 border-l-indigo-500 rounded-xl p-5 space-y-2">
        <h3 className="text-sm font-medium">En lien avec mon parcours</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Ce projet pro n'est pas sorti de nulle part. Le BUT 1 m'a donné les bases. La SAÉ d'application de gestion en groupe m'a montré que je pouvais coordonner un projet complexe et le livrer. Le stage m'a exposé à un environnement professionnel réel. Chaque étape a confirmé que le développement logiciel est le bon chemin — et que j'ai encore beaucoup à apprendre, ce qui est exactement là où je veux être.
        </p>
      </div>
    </div>
  );
}
