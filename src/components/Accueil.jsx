export default function Accueil() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="animate-fade-in">
        <div
          className="rounded-2xl p-7 sm:p-10 border border-indigo-900/40 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0f0f23 0%, #13101f 60%, #0d0d14 100%)',
          }}
        >
          {/* Décoration de fond */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)',
            }}
          />

          <div className="relative flex items-start gap-5 sm:gap-7">
            {/* Avatar */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-white border border-indigo-500/30"
              style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
            >
              VM
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono text-indigo-400/80 tracking-widest uppercase mb-2">Portfolio · 2025</p>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50">
                Vakisan Mathignanasingam
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 mt-1.5 leading-relaxed">
                Étudiant en BUT Informatique · IUT Villetaneuse, Sorbonne Paris Nord
              </p>

              {/* Badge disponibilité */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  En recherche d'alternance
                </span>
                <span className="text-xs text-zinc-600">·</span>
                <span className="text-xs text-zinc-500">Développement logiciel & web</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texte perso */}
      <div className="animate-fade-in-delay bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 space-y-3 card-hover">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">En quelques mots</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>
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
      <div className="animate-fade-in-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InfoCard
          label="Contact"
          content={<a href="mailto:vakisanmathi10@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">vakisanmathi10@gmail.com</a>}
          icon="✉"
        />
        <InfoCard
          label="Formation"
          content={<><p className="text-zinc-200 text-sm">BUT Informatique — 2e année</p><p className="text-zinc-500 text-xs mt-0.5">IUT Villetaneuse · Sorbonne Paris Nord</p></>}
          icon="◎"
        />
        <InfoCard
          label="Expérience récente"
          content={<><p className="text-zinc-200 text-sm">Webmaster — Lys Conseil</p><p className="text-zinc-500 text-xs mt-0.5">Juil. – Août 2025 · 8 semaines</p></>}
          icon="◉"
        />
        <InfoCard
          label="Stack principale"
          content={
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["HTML/CSS", "SQL", "Java", "React", "Git", "WordPress"].map((t) => (
                <span key={t} className="bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded-md font-mono">{t}</span>
              ))}
            </div>
          }
          icon="◈"
        />
      </div>

      {/* Liens GitHub */}
      <div className="flex gap-3 flex-wrap">
        <GhLink href="https://github.com/Vakisan10/SAES401_Jupiter5" label="SAÉ Jupiter S4" />
        <GhLink href="https://github.com/At9ph/SAE_Jupiter_D" label="SAÉ Jupiter S3" />
        <GhLink href="https://github.com/Vakisan10" label="Profil GitHub" />
      </div>
    </div>
  );
}

function InfoCard({ label, content, icon }) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 space-y-2 card-hover">
      <div className="flex items-center gap-1.5">
        <span className="text-zinc-600 text-xs">{icon}</span>
        <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{label}</p>
      </div>
      {content}
    </div>
  );
}

function GhLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-300 border border-zinc-800 hover:border-indigo-700/60 rounded-lg px-4 py-2 transition-all duration-200 hover:bg-indigo-950/30"
    >
      <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      {label}
    </a>
  );
}
