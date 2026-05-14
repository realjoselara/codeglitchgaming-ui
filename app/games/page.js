import Link from "next/link";
import "./games.css";

const GAMES = [
  {
    slug: "super-bear-neon-rescue",
    title: "Super Bear: Neon Rescue",
    status: "New game",
    description:
      "A retro arcade platformer where Super Bear restores Bear City with punch combos, charged Bear Blasts, wall jumps, and temporary power suits.",
    highlights: ["Platformer", "4 districts", "Power suits"],
  },
  {
    slug: "super-bear",
    title: "Super Bear",
    status: "Playable now",
    description:
      "A 10-level monster rush with bosses, scrolling city backdrops, upgrades, and arcade-style combat.",
    highlights: ["10 levels", "Boss fights", "Shop upgrades"],
  },
  {
    slug: "bearverse",
    title: "Bearverse",
    status: "New cabinet",
    description:
      "A separate 50-level space campaign with galaxy sectors, cosmic bosses, and a fresh arcade run.",
    highlights: ["50 levels", "Space themes", "Cosmic upgrades"],
  },
  {
    slug: "honey-typing-adventure",
    title: "Honey Typing Adventure",
    status: "Fresh drop",
    description:
      "Type the falling honey words before they hit the ground. Build streaks, save jars, and keep the hive buzzing.",
    highlights: ["Typing challenge", "Falling honey", "Streak scoring"],
  },
];

export const metadata = {
  title: "Games | CodeGlitchGaming",
  description:
    "CodeGlitchGaming arcade hub with playable games and future cabinets.",
};

export default function GamesPage() {
  return (
    <main className="games-page">
      <div className="games-shell">
        <header className="games-hero">
          <div className="games-title-row">
            <div>
              <p className="games-kicker">Arcade Hub</p>
              <h1>Games</h1>
              <p className="games-subtitle">
                Pick a cabinet. Each game lives on its own route so we can keep
                expanding the arcade over time.
              </p>
            </div>

            <div className="games-actions">
              <Link className="games-link games-link-primary" href="/">
                Back Home
              </Link>
            </div>
          </div>
        </header>

        <section className="games-feature" aria-label="Featured game">
          <div className="games-feature-card">
            <p className="games-panel-label">Featured Drop</p>
            <h2>Super Bear: Neon Rescue</h2>
            <p className="games-copy">
              Fight a glitch virus across Candy Factory, Cyber Sewers, Arcade
              Highway, and Moon Base in a new retro platformer cabinet.
            </p>
            <div className="games-chip-row">
              <span className="games-chip">Platformer action</span>
              <span className="games-chip">Bear Blast</span>
              <span className="games-chip">Wall jumps</span>
            </div>
            <div className="games-actions">
              <Link
                className="games-link games-link-primary"
                href="/games/super-bear-neon-rescue"
              >
                Play Neon Rescue
              </Link>
              <Link className="games-link" href="/games/super-bear">
                Play Super Bear
              </Link>
              <Link className="games-link" href="/games/bearverse">
                Play Bearverse
              </Link>
              <Link className="games-link" href="/games/honey-typing-adventure">
                Play Honey Typing
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
        </section>

        <section className="games-grid" aria-label="Available games">
          {GAMES.map((game) => (
            <article className="games-card" key={game.slug}>
              {!game.disabled ? (
                <div className="games-card-preview">
                  <iframe
                    className="games-card-frame"
                    src={`/games/${game.slug}/index.html`}
                    title={`${game.title} preview`}
                    loading="lazy"
                    allow="autoplay"
                  />
                  <div className="games-card-overlay">
                    <p className="games-panel-label">{game.status}</p>
                    <h3>{game.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="games-card-top">
                  <p className="games-panel-label">{game.status}</p>
                  <h3>{game.title}</h3>
                </div>
              )}

              <p className="games-copy">{game.description}</p>

              <div className="games-chip-row">
                {game.highlights.map((highlight) => (
                  <span className="games-chip" key={highlight}>
                    {highlight}
                  </span>
                ))}
              </div>

              {game.disabled ? (
                <span className="games-link games-link-disabled">Coming Soon</span>
              ) : (
                <Link className="games-link games-link-primary" href={`/games/${game.slug}`}>
                  Open Game
                </Link>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
