const etapes = [
  {
    periode: "2023 – aujourd'hui",
    titre: "BUT Informatique — IUT de Villetaneuse",
    sous: "Sorbonne Paris Nord · 2e année",
    texte:
      "Formation en 3 ans couvrant le développement, les bases de données, les réseaux et la gestion de projet. Ce qui m'a marqué entre le BUT 1 et le BUT 2 : la montée en complexité des projets. En S1 je faisais des scripts seul. En S3 je coordonnais une équipe de 5 sur une application Java avec BDD. Ce n'est pas la même chose.",
    couleur: "indigo",
    badge: "En cours",
  },
  {
    periode: "2020 – 2023",
    titre: "Bac STI2D",
    sous: "Sciences et Technologies de l'Industrie et du Développement Durable",
    texte:
      "Bac technologique, pas général. La différence c'est qu'on apprend à concevoir des systèmes — électronique, mécanique, numérique — avant de les construire. Ce rapport entre la théorie et le concret, je le retrouve dans ma façon d'aborder le code : je comprends d'abord avant de coder.",
    couleur: "zinc",
    badge: "Obtenu",
  },
];

const evolution = [
  {
    periode: "BUT 1",
    couleur: "zinc",
    titre: "Découverte des bases",
    items: [
      "Scripts simples, algorithmes fondamentaux",
      "Initiation à SQL et aux bases de données",
      "HTML/CSS, premiers projets web",
      "Travail en binôme sur la gestion de projet",
    ],
  },
  {
    periode: "BUT 2",
    couleur: "indigo",
    titre: "Projets réels, équipe, entreprise",
    items: [
      "Application complète en Java/Spring (groupe de 5)",
      "Première expérience en entreprise (8 semaines)",
      "Architecture logicielle, API, BDD intégrée",
      "Git collaboratif, gestion des conflits de code",
    ],
  },
];

export default function Parcours() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div>
        <h2 className="text-2xl font-semibold mb-1 tracking-tight">Parcours</h2>
        <p className="text-zinc-500 text-sm">Formation et diplômes</p>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {etapes.map((e, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div
                className={`w-3 h-3 rounded-full mt-2 shrink-0 border-2 ${
                  e.couleur === "indigo"
                    ? "bg-indigo-500 border-indigo-400"
                    : "bg-zinc-700 border-zinc-600"
                }`}
              />
              {i < etapes.length - 1 && (
                <div className="w-px flex-1 mt-2 mb-0" style={{ background: 'linear-gradient(to bottom, #3730a3, #27272a)' }} />
              )}
            </div>
            <div className="pb-8 space-y-2 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xs text-zinc-500 font-mono">{e.periode}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    e.couleur === "indigo"
                      ? "bg-indigo-900/40 text-indigo-300 border border-indigo-800/60"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {e.badge}
                </span>
              </div>
              <h3 className="text-base font-medium text-zinc-100">{e.titre}</h3>
              <p className="text-xs text-indigo-400">{e.sous}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-2">{e.texte}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BUT 1 vs BUT 2 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-lg font-semibold">Évolution BUT 1 → BUT 2</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {evolution.map((e) => (
            <div
              key={e.periode}
              className={`bg-zinc-900/80 border rounded-xl p-5 space-y-4 card-hover ${
                e.couleur === "indigo" ? "border-indigo-900/50" : "border-zinc-800"
              }`}
            >
              <div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-md font-mono font-medium ${
                    e.couleur === "indigo"
                      ? "bg-indigo-900/40 text-indigo-300"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {e.periode}
                </span>
                <h3 className="text-sm font-medium mt-3 text-zinc-200">{e.titre}</h3>
              </div>
              <ul className="space-y-2">
                {e.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        e.couleur === "indigo" ? "bg-indigo-500" : "bg-zinc-600"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pourquoi l'info */}
      <div
        className="rounded-xl p-6 space-y-3 border border-indigo-900/40"
        style={{ background: 'linear-gradient(135deg, #0f0f1e 0%, #0d0d14 100%)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-indigo-500 text-xs">▸</span>
          <h2 className="text-sm font-medium text-zinc-200">Pourquoi l'informatique ?</h2>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Pas par passion du code en tant que tel — ce mot ne veut pas dire grand chose. Plutôt parce que l'informatique est le seul endroit où je peux construire quelque chose d'utile avec très peu de moyens. En STI2D on réfléchissait à des systèmes sur papier, on dessinait des schémas. En info, on les fait vraiment tourner. C'est ce passage du plan à l'exécution qui me motive.
        </p>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Ce que le BUT m'a confirmé : je ne suis pas là par défaut. Chaque SAÉ a renforcé ce choix, même les plus difficiles — surtout les plus difficiles.
        </p>
      </div>
    </div>
  );
}
