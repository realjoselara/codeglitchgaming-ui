import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "WASD or arrow keys to move",
  "Mouse to aim",
  "Left click, J, or K to punch",
  "Space or Shift to dash",
  "Touch civilians to rescue them",
  "R or Enter to restart after defeat",
];

const FEATURES = [
  "Wave survival",
  "Corrupted heroes",
  "Civilian rescues",
  "Dark Super Bear phase",
];

export const metadata = {
  title: "Super Bear: Last Hero | CodeGlitch Gaming",
  description:
    "Play Super Bear: Last Hero, an arena survival game about rescuing civilians while resisting corruption.",
};

export default function SuperBearLastHeroPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Super Bear: Last Hero</h1>
              <p className="games-subtitle">
                Everyone in the world became evil except Super Bear. Survive
                corrupted hero waves, rescue civilians, and manage the
                corruption meter before Dark Super Bear takes over.
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
                href="/games/super-bear-last-hero/index.html"
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
                src="/games/super-bear-last-hero/index.html"
                title="Super Bear: Last Hero game"
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
            <p className="games-panel-label">Gameplay</p>
            <ul className="games-list">
              {FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Corruption</p>
            <p className="games-copy">
              Defeating corrupted heroes raises Super Bear&apos;s corruption.
              Civilian rescues pull it back down. At 100%, Super Bear becomes
              Dark Super Bear for a temporary power surge before recovering.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
