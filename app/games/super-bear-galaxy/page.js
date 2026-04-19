import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "WASD to move",
  "Mouse to aim",
  "P to pew",
  "Right click to pulse slash",
  "Space to dodge",
  "B to open the cosmic shop",
];

export const metadata = {
  title: "Bearverse | CodeGlitch Gaming",
  description:
    "Play Bearverse inside the CodeGlitch Gaming arcade.",
};

export default function SuperBearGalaxyPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Bearverse</h1>
              <p className="games-subtitle">
                A 50-level space run with nebula zones, orbital arenas, and
                escalating alien waves.
              </p>
            </div>

            <div className="games-actions">
              <Link className="games-link" href="/games">
                All Games
              </Link>
              <Link className="games-link games-link-primary" href="/">
                Back Home
              </Link>
              <a
                className="games-link"
                href="/games/super-bear-galaxy/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Open Full Screen
              </a>
            </div>
          </div>
        </header>

        <section className="games-layout" aria-label="Game player">
          <div className="games-frame-card">
            <div className="games-frame-wrap">
              <iframe
                className="games-frame"
                src="/games/super-bear-galaxy/index.html"
                title="Bearverse game"
                loading="lazy"
                allow="autoplay"
              />
            </div>
          </div>
        </section>

        <section className="games-info-grid" aria-label="Game details">
          <aside className="games-info-card">
            <p className="games-panel-label">Controls</p>
            <ul className="games-list">
              {CONTROLS.map((control) => (
                <li key={control}>{control}</li>
              ))}
            </ul>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Galaxy Run</p>
            <p className="games-copy">
              Blast through 50 space sectors, survive themed star systems,
              defeat cosmic bosses every few stages, and keep scaling your loadout
              through the run.
            </p>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Project Layout</p>
            <p className="games-copy">
              This title lives at <code>/games/super-bear-galaxy</code> and the
              original <code>/games/super-bear</code> stays untouched as its own
              separate cabinet.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
