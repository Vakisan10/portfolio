import { useState, useEffect, useRef } from "react";
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

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        d.x += d.dx; d.y += d.dy;
        if (d.x < 0 || d.x > W) d.dx *= -1;
        if (d.y < 0 || d.y > H) d.dy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

export default function App() {
  const [active, setActive] = useState("accueil");
  const [visible, setVisible] = useState(true);

  const navigate = (id) => {
    if (id === active) return;
    setVisible(false);
    setTimeout(() => { setActive(id); setVisible(true); }, 220);
  };

  const renderSection = () => {
    switch (active) {
      case "accueil":     return <Accueil navigate={navigate} />;
      case "parcours":    return <Parcours />;
      case "competences": return <Competences />;
      case "sae":         return <SAE />;
      case "stage":       return <Stage />;
      case "projet":      return <ProjetPro />;
      default:            return <Accueil navigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080810", color: "#fff", fontFamily: "'Inter', sans-serif", position: "relative" }}>
      <ParticleCanvas />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 60,
        background: "rgba(8,8,16,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: 0.5
          }}>VM</div>
          <span style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>VAKISAN M.</span>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => navigate(t.id)} style={{
              padding: "6px 16px", borderRadius: 999, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 500, transition: "all 0.2s",
              background: active === t.id ? "#fff" : "transparent",
              color: active === t.id ? "#080810" : "rgba(255,255,255,0.5)",
            }}
            onMouseEnter={e => { if (active !== t.id) e.target.style.color = "#fff"; }}
            onMouseLeave={e => { if (active !== t.id) e.target.style.color = "rgba(255,255,255,0.5)"; }}
            >{t.label}</button>
          ))}
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: 7,
          border: "1px solid rgba(74,222,128,0.4)", borderRadius: 999,
          padding: "6px 14px", fontSize: 12, color: "#4ade80", fontWeight: 500
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
          Dispo · stage
        </div>
      </nav>

      <div style={{
        position: "relative", zIndex: 1, paddingTop: active === "accueil" ? 0 : 80,
        transition: "opacity 0.22s ease, transform 0.22s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}>
        {renderSection()}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #080810; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
      `}</style>
    </div>
  );
}
