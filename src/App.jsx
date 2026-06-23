import { useState } from "react";
import Accueil from "./components/Accueil";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences";
import SAE from "./components/SAE";
import Stage from "./components/Stage";
import ProjetPro from "./components/ProjetPro";

const tabs = [
  { id: "accueil", label: "Accueil" },
  { id: "parcours", label: "Parcours" },
  { id: "competences", label: "Compétences" },
  { id: "sae", label: "SAÉ" },
  { id: "stage", label: "Stage" },
  { id: "projet", label: "Projet pro" },
];

export default function App() {
  const [active, setActive] = useState("accueil");

  const renderSection = () => {
    switch (active) {
      case "accueil": return <Accueil />;
      case "parcours": return <Parcours />;
      case "competences": return <Competences />;
      case "sae": return <SAE />;
      case "stage": return <Stage />;
      case "projet": return <ProjetPro />;
      default: return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition-all ${
                active === t.id
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {renderSection()}
      </main>

      <footer className="border-t border-zinc-800 mt-20 py-6 text-center text-zinc-600 text-sm">
        Vakisan Mathignanasingam · vakisanmathi10@gmail.com · BUT Informatique 2e année
      </footer>
    </div>
  );
}
