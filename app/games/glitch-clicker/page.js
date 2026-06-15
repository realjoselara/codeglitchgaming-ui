import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "Left click the big bear icon or press Space to earn Code Coins",
  "Buy Fix Internet with Code Coins",
  "Buy upgrades from the shop",
  "Use Stop to pause bear clicking",
  "Use Boost for double Code Coins",
  "Reach 10,000% repair to max out the internet",
];

const FEATURES = [
  "Clicker progression",
  "Fix Internet shop buy",
  "Passive coin upgrades",
  "Auto cleanup bot",
  "Internet repair meter",
];

export const metadata = {
  title: "Glitch Clicker | CodeGlitch Gaming",
  description:
    "Play Glitch Clicker, a CodeGlitch Gaming clicker game where a big bear icon earns Code Coins that buy upgrades and internet fixes.",
};

export default function GlitchClickerPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Glitch Clicker</h1>
              <p className="games-subtitle">
                Left click the big bear icon or press Space to earn Code
                Coins. Buy upgrades and Fix Internet repairs before corrupted
                packets take over the network.
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
                href="/games/glitch-clicker/index.html"
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
                src="/games/glitch-clicker/index.html"
                title="Glitch Clicker game"
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
            <p className="games-panel-label">Upgrades</p>
            <ul className="games-list">
              {FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Mission</p>
            <p className="games-copy">
              Bear clicks earn Code Coins, and the shop lets you buy Fix
              Internet directly. Stack click power, scanners, firewall
              patches, cleanup bots, and the 50,000-coin mega fix until the
              repair meter hits 10,000%.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
