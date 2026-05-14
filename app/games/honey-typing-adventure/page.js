import Link from "next/link";
import "../games.css";

const CONTROLS = [
  "Press 1 for Honey Fall",
  "Press 2 for Mountain Typing",
  "Type the falling honey word",
  "Type the trail word to climb",
  "Enter claims a matching jar",
  "Backspace fixes your word",
  "Escape clears your current typing",
  "R restarts after game over or victory",
];

export const metadata = {
  title: "Honey Typing Adventure | CodeGlitch Gaming",
  description:
    "Play Honey Typing Adventure inside the CodeGlitch Gaming arcade.",
};

export default function HoneyTypingAdventurePage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Cabinet</p>
              <h1>Honey Typing Adventure</h1>
              <p className="games-subtitle">
                Catch sky honey or help Super Bear finish climbing the mountain
                in a typing game.
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
                href="/games/honey-typing-adventure/index.html"
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
                src="/games/honey-typing-adventure/index.html"
                title="Honey Typing Adventure game"
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
              Pick Honey Fall to claim jars before they splash, or pick
              Mountain Typing to type trail words until Super Bear reaches the
              summit.
            </p>
          </aside>

          <aside className="games-info-card">
            <p className="games-panel-label">Project Layout</p>
            <p className="games-copy">
              This title lives at <code>/games/honey-typing-adventure</code>,
              with the playable canvas file served from{" "}
              <code>/games/honey-typing-adventure/index.html</code>.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
