import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "A/D or arrow keys to run",
  "W, Up, or Space to jump and wall jump",
  "J to punch combo",
  "Hold K to charge Bear Blast",
  "E to activate the district power suit",
  "R to restart",
];

const LEVELS = [
  "Candy Factory",
  "Cyber Sewers",
  "Arcade Highway",
  "Moon Base",
];

export const metadata = {
  title: "Super Bear: Neon Rescue | CodeGlitch Gaming",
  description:
    "Play Super Bear: Neon Rescue, a retro arcade platformer about restoring Bear City.",
};

export default function SuperBearNeonRescuePage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Super Bear: Neon Rescue</h1>
              <p className="games-subtitle">
                A retro platformer where Super Bear punches corrupted toys,
                wall-jumps through Bear City, charges Bear Blast, and restores
                color district by district.
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
                href="/games/super-bear-neon-rescue/index.html"
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
                src="/games/super-bear-neon-rescue/index.html"
                title="Super Bear: Neon Rescue game"
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
            <p className="games-panel-label">Levels</p>
            <ul className="games-list">
              {LEVELS.map((level) => (
                <li key={level}>{level}</li>
              ))}
            </ul>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Premise</p>
            <p className="games-copy">
              A glitch virus invaded Bear City and corrupted the toys, robots,
              and arcade machines. Super Bear fights through every district to
              bring back power, color, and the city&apos;s neon glow.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
