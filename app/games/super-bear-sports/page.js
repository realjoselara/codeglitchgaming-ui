import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "Press 1 for Basketball",
  "Press 2 for Basketball 2P",
  "Press 3 for Soccer",
  "Press 4 for Football",
  "Press 5 for Baseball",
  "Basketball 1P: A/D or arrows to move",
  "Basketball 2P: P1 uses WASD and Space",
  "Basketball 2P: P2 uses arrows and Enter",
  "Basketball 2P: players compete for separate scores",
  "Catch the rebound to reload",
  "Soccer: Space or mouse kicks near the ball",
  "Football: run right and hold Space to sprint",
  "Baseball: press Space when the pitch reaches the box",
  "R restarts after the buzzer",
];

export const metadata = {
  title: "Super Bear Sports | CodeGlitch Gaming",
  description:
    "Play Super Bear Sports inside the CodeGlitch Gaming arcade.",
};

export default function SuperBearSportsPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Super Bear Sports</h1>
              <p className="games-subtitle">
                Pick basketball, soccer, football, or baseball, then chase a
                quick high score with Super Bear before the buzzer.
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
                href="/games/super-bear-sports/index.html"
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
                src="/games/super-bear-sports/index.html"
                title="Super Bear Sports"
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
            <p className="games-panel-label">Goal</p>
            <p className="games-copy">
              Basketball has solo and competitive two-player shooting modes.
              Soccer is a fast penalty field challenge. Football sends Super
              Bear sprinting through defenders. Baseball lets Super Bear time
              swings for hits and home runs.
            </p>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Series</p>
            <p className="games-copy">
              Super Bear Sports is now a mini-game cabinet with Basketball,
              Soccer, Football, and Baseball.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
