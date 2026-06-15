import Link from "next/link";
import "./games.css";

const GAMES = [
  {
    slug: "glitch-clicker",
    title: "Glitch Clicker",
    status: "New clicker",
    description:
      "Click the big bear icon to earn Code Coins, buy upgrades, purchase Fix Internet, and repair the network one patch at a time.",
    highlights: ["Big bear clicks", "Code Coin shop", "Fix Internet"],
  },
  {
    slug: "super-bear-last-hero",
    title: "Super Bear: Last Hero",
    status: "New survival",
    description:
      "A top-down last-hero survival arena where Super Bear rescues civilians, fights corrupted heroes, and tries to control a rising corruption meter.",
    highlights: ["Wave survival", "Rescues", "Dark Super Bear"],
  },
  {
    slug: "super-bear-sports",
    title: "Super Bear Sports",
    status: "New sport",
    description:
      "A sports mini-game cabinet with basketball shooting and soccer shots where Super Bear chases high scores before the buzzer.",
    highlights: ["Basketball", "Soccer", "60-second runs"],
  },
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
            <h2>Glitch Clicker</h2>
            <p className="games-copy">
              Click the big bear icon to earn Code Coins, install upgrades,
              buy Fix Internet, and repair the network before the signal gets
              swallowed by corrupted packets.
            </p>
            <div className="games-chip-row">
              <span className="games-chip">Clicker progression</span>
              <span className="games-chip">Code Coin shop</span>
              <span className="games-chip">Fix Internet</span>
            </div>
            <div className="games-actions">
              <Link className="games-link games-link-primary" href="/games/glitch-clicker">
                Play Glitch Clicker
              </Link>
              <Link
                className="games-link"
                href="/games/super-bear-last-hero"
              >
                Play Last Hero
              </Link>
              <Link className="games-link" href="/games/super-bear-sports">
                Play Sports
              </Link>
              <Link
                className="games-link"
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
                href="/games/glitch-clicker/index.html"
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
