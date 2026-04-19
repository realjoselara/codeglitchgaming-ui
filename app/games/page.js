import Link from "next/link";
import "./games.css";

const GAMES = [
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
            <h2>Super Bear</h2>
            <p className="games-copy">
              Battle through 10 stages, unlock upgrades, dodge monster swarms,
              and clear the arcade&apos;s flagship cabinet.
            </p>
            <div className="games-chip-row">
              <span className="games-chip">Action arcade</span>
              <span className="games-chip">10 levels</span>
              <span className="games-chip">Bosses included</span>
            </div>
            <div className="games-actions">
              <Link className="games-link games-link-primary" href="/games/super-bear">
                Play Super Bear
              </Link>
              <Link className="games-link" href="/games/bearverse">
                Play Bearverse
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
