import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "WASD to move",
  "Mouse to aim",
  "Left click to shoot",
  "Right click to melee",
  "Space to dodge",
  "B to open the shop",
];

export const metadata = {
  title: "Super Bear | CodeGlitch Gaming",
  description:
    "Play Super Bear inside the CodeGlitch Gaming arcade.",
};

export default function SuperBearPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Super Bear</h1>
              <p className="games-subtitle">10-level monster rush.</p>
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
                href="/games/super-bear/index.html"
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
                src="/games/super-bear/index.html"
                title="Super Bear game"
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
            <p className="games-panel-label">Level Flow</p>
            <p className="games-copy">
              Travel through 10 backgrounds, hit each level&apos;s monster goal,
              defeat bosses on boss stages, and press Enter to move to the next
              cabinet scene.
            </p>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Project Layout</p>
            <p className="games-copy">
              The arcade hub lives at <code>/games</code>, while this title
              lives at <code>/games/super-bear</code>. That makes it easy to add
              more games later without rebuilding the section structure.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
