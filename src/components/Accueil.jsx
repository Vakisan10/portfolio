export default function Accueil() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-4">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-indigo-900 flex items-center justify-center text-xl font-semibold text-indigo-200 shrink-0">
            VM
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Vakisan Mathignanasingam</h1>
            <p className="text-indigo-400 mt-1 text-base">Étudiant en 2e année de BUT Informatique — IUT de Villetaneuse, Sorbonne Paris Nord</p>
            <p className="text-zinc-400 text-sm mt-1">À la recherche d'une alternance en développement logiciel / web</p>
          </div>
        </div>
      </div>

      {/* Texte perso */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-medium">En quelques mots</h2>
        <p className="text-zinc-300 leading-relaxed text-sm">
          J'ai fait un bac STI2D, pas un bac général. Ce n'est pas un détail : ça veut dire que j'ai appris à penser des systèmes avant d'apprendre à les coder. Quand j'ai commencé le BUT info, j'avais déjà le réflexe de décomposer un problème avant de me lancer.
        </p>
        <p className="text-zinc-300 leading-relaxed text-sm">
          Ce qui me caractérise dans mon travail, c'est la rigueur — pas au sens rigidité, mais au sens de finir ce que j'ai commencé, de vérifier ce que je produis, de ne pas livrer quelque chose que je ne comprends pas moi-même. En stage chez Lys Conseil, j'étais seul stagiaire pendant 7 semaines. J'ai appris à prendre des décisions sans filet, et à les assumer.
        </p>
        <p className="text-zinc-300 leading-relaxed text-sm">
          Je vise le développement web et logiciel parce que c'est là où je progresse le plus vite et où j'ai envie d'aller plus loin.
        </p>
      </div>

      {/* Infos rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-1">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Contact</p>
          <p className="text-zinc-200 text-sm">vakisanmathi10@gmail.com</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Formation</p>
          <p className="text-zinc-200 text-sm">BUT Informatique — 2e année</p>
          <p className="text-zinc-400 text-xs">IUT Villetaneuse · Sorbonne Paris Nord</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Expérience récente</p>
          <p className="text-zinc-200 text-sm">Webmaster — Lys Conseil</p>
          <p className="text-zinc-400 text-xs">Juil. – Août 2025 · 8 semaines</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Stack principale</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {["HTML/CSS", "SQL", "Java", "React", "Git", "WordPress"].map((t) => (
              <span key={t} className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub rapide */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="https://github.com/Vakisan10/SAES401_Jupiter5"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 border border-zinc-800 rounded-lg px-4 py-2 hover:border-indigo-800 transition-all"
        >
          <span>↗</span> SAÉ Jupiter S4 — GitHub
        </a>
        <a
          href="https://github.com/At9ph/SAE_Jupiter_D"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 border border-zinc-800 rounded-lg px-4 py-2 hover:border-indigo-800 transition-all"
        >
          <span>↗</span> SAÉ Jupiter S3 — GitHub
        </a>
      </div>
    </div>
  );
}
