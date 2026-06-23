import { useState, useEffect } from "react";

const phrases = [
  "Étudiant BUT Informatique · IUT Villetaneuse",
  "En recherche d'alternance · Développement web & logiciel",
  "Java · React · SQL · Git · WordPress",
];

const navCards = [
  { id: "parcours",    num: "01", icon: "🎓", titre: "Parcours",    desc: "STI2D → BUT Informatique" },
  { id: "competences", num: "02", icon: "⚡", titre: "Compétences", desc: "6 compétences BUT avec preuves" },
  { id: "sae",         num: "03", icon: "🚀", titre: "SAÉ",          desc: "Jupiter S3 & S4 · BDD · Gestion" },
  { id: "stage",       num: "04", icon: "💼", titre: "Stage",        desc: "Lys Conseil · Webmaster · 8 sem" },
];

export default function Accueil({ navigate }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = phrases[phraseIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 38);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 18);
        return () => clearTimeout(t);
      } else {
        setPhraseIdx((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, phraseIdx]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 48px 40px" }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{
          fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 800, lineHeight: 1,
          color: "#fff", letterSpacing: "-2px", margin: 0,
        }}>Vakisan</h1>
        <h1 style={{
          fontSize: "clamp(40px, 7vw, 90px)", fontWeight: 800, lineHeight: 1,
          color: "rgba(255,255,255,0.13)", letterSpacing: "-2px", margin: 0,
          WebkitTextStroke: "1px rgba(255,255,255,0.18)",
        }}>Mathignanasingam</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 56 }}>
        <div style={{ width: 3, height: 22, background: "#7c3aed", borderRadius: 2 }} />
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", fontWeight: 400, minHeight: 24 }}>
          {displayed}
          <span style={{ opacity: Math.random() > 0.5 ? 1 : 0, color: "#7c3aed" }}>|</span>
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, maxWidth: 620, marginBottom: 56 }}>
        {navCards.map(c => (
          <button key={c.id} onClick={() => navigate(c.id)} style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: "18px 20px", cursor: "pointer", textAlign: "left",
            transition: "all 0.2s", color: "#fff",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>{c.num} ↗</span>
            </div>
            <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{c.titre}</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{c.desc}</p>
          </button>
        ))}
      </div>

      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(8,8,16,0.7)", backdropFilter: "blur(12px)",
        zIndex: 10,
      }}>
        <a href="mailto:vakisanmathi10@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
          ✉ vakisanmathi10@gmail.com
        </a>
        <a href="https://github.com/Vakisan10" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
          ⌥ github.com/Vakisan10
        </a>
        <button onClick={() => navigate("projet")} style={{
          background: "transparent", border: "none", cursor: "pointer",
          color: "#7c3aed", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6,
        }}
        onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
        onMouseLeave={e => e.currentTarget.style.color = "#7c3aed"}>
          Projet pro →
        </button>
      </div>
    </div>
  );
}
