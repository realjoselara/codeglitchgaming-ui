"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const LAUNCH_DATE = "2026-06-16T12:00:00-04:00";

function getTimeLeft(targetDate) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    mins: Math.floor((totalSeconds % 3600) / 60),
    secs: Math.floor(totalSeconds % 60),
  };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(LAUNCH_DATE));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(LAUNCH_DATE));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="soon-root">
      <div className="soon-wrap" role="application">
        <header className="soon-header">
          <div className="soon-brand" aria-label="CodeGlitchGaming">
            <Image
              className="soon-logo"
              src="/codeglitchgaming-logo.png"
              alt="CodeGlitchGaming"
              width={64}
              height={64}
              unoptimized
              priority
            />

            <div>
              <h1>CodeGlitchGaming</h1>
              <p className="soon-sub">codeglitchgaming.us</p>
            </div>
          </div>

          <p className="soon-small">
            Contact: {" "}
            <a href="mailto:hello@codeglitchgaming.us">
              hello@codeglitchgaming.us
            </a>
          </p>
        </header>

        <main className="soon-main" aria-live="polite">
          <section className="soon-card soon-hero" aria-label="Coming soon">
            <span className="soon-tag" aria-label="status">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1l-1.2-1.2a2 2 0 0 0-1.4-.6H9.6a2 2 0 0 0-1.4.6L7 18H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Zm3 2H8v2H6v1h2v2h1v-2h2v-1H9v-2Zm9 1h-2v2h2v-2Z" />
              </svg>
              COMING SOON
            </span>

            <Image
              className="soon-badge"
              src="/codeglitchgaming-logo.png"
              alt="CodeGlitchGaming mark"
              width={200}
              height={200}
              unoptimized
            />

            <h2 className="soon-glitch" data-text="Where Code Meets Clutch Plays">
              Where Code Meets Clutch Plays
            </h2>

            <p className="soon-desc">
              We&apos;re building a home for high-energy Roblox gameplay, glitch-styled
              visuals, creator challenges, and competitive live moments.
            </p>

            <div className="soon-cta">
              <Link className="soon-btn" href="/games">
                Mini Games
              </Link>
              <a
                className="soon-btn soon-btn-primary"
                href="https://www.youtube.com/@CodeGlitchGaming"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe For More on YouTube
              </a>
            </div>
          </section>

          <aside className="soon-right">
            <section className="soon-card" aria-label="Launch countdown">
              <h3 className="soon-title">Launching In</h3>

              <div className="soon-countdown" id="countdown" aria-live="polite">
                <div className="soon-tile">
                  <div className="soon-num">{pad(timeLeft.days)}</div>
                  <div className="soon-label">Days</div>
                </div>
                <div className="soon-tile">
                  <div className="soon-num">{pad(timeLeft.hours)}</div>
                  <div className="soon-label">Hours</div>
                </div>
                <div className="soon-tile">
                  <div className="soon-num">{pad(timeLeft.mins)}</div>
                  <div className="soon-label">Minutes</div>
                </div>
                <div className="soon-tile">
                  <div className="soon-num">{pad(timeLeft.secs)}</div>
                  <div className="soon-label">Seconds</div>
                </div>
              </div>

              <p className="soon-small soon-top-gap">
                Target date is editable in `app/page.js`.
              </p>
            </section>

            <section className="soon-card" aria-label="What to expect">
              <h3 className="soon-title">What to Expect</h3>            
              <ul className="soon-list">
                <li>Weekly streams and community tournaments</li>
                <li>Glitch-themed edits and short-form highlights</li>
                <li>Community-driven events and creator collabs</li>
              </ul>
            </section>
          </aside>
        </main>

        <footer className="soon-footer">
          <p className="soon-small">© {year} CodeGlitchGaming</p>

          <nav className="soon-social" aria-label="Social links">
            <a
              href="https://twitch.tv/"
              aria-label="Twitch"
              title="Twitch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tw
            </a>
            <a
              href="https://www.youtube.com/@CodeGlitchGaming"
              aria-label="YouTube"
              title="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              YT
            </a>
            <a
              href="https://discord.gg/"
              aria-label="Discord"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dc
            </a>
            <a
              href="https://x.com/"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
