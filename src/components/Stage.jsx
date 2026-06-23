const missions = [
  {
    titre: "Site vitrine HTML/CSS",
    desc: "Création d'un site professionnel pour une petite entreprise cliente de Lys Conseil. J'ai fait le choix de travailler en HTML/CSS pur plutôt que WordPress — c'était possible parce que Barbara m'a laissé choisir. Avantage : contrôle total sur le design. Inconvénient : plus long. J'ai géré la structure, le design, l'intégration des textes fournis, et les tests responsive sur ordinateur et téléphone.",
    tags: ["HTML", "CSS", "Responsive"],
    competences: ["Réaliser", "Collaborer"],
  },
  {
    titre: "Base de données WordPress",
    desc: "Conception d'une base de données intégrée à WordPress via l'extension Fluent Form, pour collecter et organiser les données de clients de Lys Conseil. C'est là que j'ai découvert qu'on peut faire de la gestion de données sans SQL directement — et que WordPress peut faire bien plus que des blogs.",
    tags: ["WordPress", "Fluent Form", "BDD"],
    competences: ["Gérer", "Réaliser"],
  },
  {
    titre: "Site Wix pour une association",
    desc: "Création complète d'un site pour une association via Wix, de la maquette à la mise en ligne. Première fois que j'utilisais Wix sérieusement — j'ai trouvé ça limité par rapport au HTML/CSS mais beaucoup plus rapide pour un client qui veut pouvoir modifier lui-même son site.",
    tags: ["Wix", "Design"],
    competences: ["Réaliser"],
  },
  {
    titre: "Application React Native",
    desc: "Contribution à une page d'une application web développée en React Native, en collaboration avec Binta Tandian, étudiante de 3e année. Ma contribution était limitée (une page), mais ça m'a exposé à React Native que je ne connaissais pas du tout. Binta m'a beaucoup aidé à comprendre l'organisation du code.",
    tags: ["React Native", "Collaboration"],
    competences: ["Réaliser", "Collaborer"],
  },
];

const apprentissages = [
  {
    titre: "Travailler seul pour de vrai",
    texte:
      "J'étais le seul stagiaire pendant 7 semaines. Pas d'équipe pour se donner des coups de main, pas de quelqu'un pour valider chaque décision. J'ai dû apprendre à m'organiser seul, à chercher les réponses moi-même, et surtout à avancer même quand je n'étais pas sûr. C'est inconfortable, et c'est pour ça que c'est formateur.",
  },
  {
    titre: "La relation client, c'est autre chose",
    texte:
      "Voir une cliente venir aux réunions, observer comment Barbara lui parlait, comprendre ses attentes sans qu'elle les formule toujours clairement — c'est une dimension que les SAÉ ne répliquent pas vraiment. J'ai appris à présenter mon travail de façon plus accessible, à reformuler les besoins avant de les coder.",
  },
  {
    titre: "S'autoformer sur le tas",
    texte:
      "WordPress, je l'avais appris en vidéo YouTube avant même de commencer le stage, parce que je savais que Lys Conseil l'utilisait. Cette habitude d'anticiper et d'apprendre par moi-même avant d'avoir besoin — c'est quelque chose que le stage a renforcé. On n'attend pas qu'on nous enseigne.",
  },
  {
    titre: "La communication informelle est professionnelle",
    texte:
      "Toute la communication avec Barbara passait par WhatsApp. C'est informel en apparence, mais les échanges étaient structurés : je présentais mon avancement, elle donnait ses retours, je corrigeais. Ce rythme m'a appris à formuler précisément ce que j'avais fait et ce qui restait à faire.",
  },
];

export default function Stage() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Stage — Lys Conseil</h2>
        <p className="text-zinc-400 text-sm">8 semaines · Lys Conseil</p>
      </div>

      {/* Présentation entreprise */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-medium">Lys Conseil</h3>
            <p className="text-sm text-zinc-400 mt-0.5">Conseil et communication · Deuil-la-Barre (93)</p>
          </div>
          <div className="text-right text-xs text-zinc-500">
            <p>Maître de stage : Barbara Ezelis</p>
            <p>Tuteur : Louis-Antony Martinez</p>
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Cabinet de conseil qui accompagne des entrepreneurs — création de sites web, communication, réseaux sociaux, formation. Leur particularité : un accompagnement spécifique aux femmes entrepreneures. J'ai découvert une structure à taille humaine où les projets sont très variés et les délais serrés.
        </p>
      </div>

      {/* Missions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Missions accomplies</h2>
        <div className="space-y-3">
          {missions.map((m, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-medium">{m.titre}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{m.desc}</p>
              <div className="flex flex-wrap gap-2 items-center">
                {m.tags.map((t) => (
                  <span key={t} className="text-xs bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full">{t}</span>
                ))}
                <span className="text-zinc-700 text-xs mx-1">·</span>
                {m.competences.map((c) => (
                  <span key={c} className="text-xs bg-indigo-900/40 text-indigo-300 border border-indigo-800 px-2.5 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Découverte monde pro */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Ce que j'ai découvert du monde pro</h2>
        <p className="text-zinc-400 text-sm mb-4">Bilan sur les soft skills et les méthodes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apprentissages.map((a, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
              <h3 className="text-sm font-medium text-zinc-100">{a.titre}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{a.texte}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Environnement */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-medium">Conditions de travail</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Espace de coworking à Deuil-la-Barre, avec 2 jours de télétravail par semaine. Le télétravail m'a forcé à être plus rigoureux dans ma gestion du temps — quand personne ne vous voit travailler, il faut le montrer autrement, par des livrables. J'ai utilisé mon ordinateur personnel pour tout : code, tests, communication.
        </p>
      </div>
    </div>
  );
}
