import { useMemo, useState } from "react";
import {
  Award,
  CalendarDays,
  Medal,
  Trophy,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { leaderboardMonths } from "../data/leaderboard";

import "./Leaderboard.css";

export default function Leaderboard() {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState(leaderboardMonths[0].id);

  const month = useMemo(
    () =>
      leaderboardMonths.find((item) => item.id === selected) ||
      leaderboardMonths[0],
    [selected]
  );

  const podiumIcons = [Trophy, Medal, Award];
  const hasPlayers = month.players.length > 0;

  return (
    <div className="leaderboard-page page-section">
      <div className="page-container">
        <span className="eyebrow">{t.leaderboard.eyebrow}</span>

        <h1 className="page-title">{t.leaderboard.title}</h1>

        <p className="page-subtitle">{t.leaderboard.description}</p>

        <div className="month-picker">
          <label htmlFor="month">{t.leaderboard.month}</label>

          <select
            id="month"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            {leaderboardMonths.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label[language]}
              </option>
            ))}
          </select>
        </div>

        {!hasPlayers ? (
          <section className="leaderboard-empty glass-card">
            <div className="leaderboard-empty-icon">
              <CalendarDays size={46} />
            </div>

            <h2>{t.leaderboard.emptyTitle}</h2>
            <p>{t.leaderboard.emptyText}</p>

            <div className="leaderboard-start-date">
              <span>01</span>
              <strong>{language === "ro" ? "IULIE 2026" : "JULY 2026"}</strong>
            </div>
          </section>
        ) : (
          <>
            <h2 className="leaderboard-heading">
              {t.leaderboard.podiumTitle}
            </h2>

            <div className="podium-grid">
              {month.players.slice(0, 3).map((player, index) => {
                const Icon = podiumIcons[index];

                return (
                  <article
                    key={player.rank}
                    className={`podium-card place-${player.rank}`}
                  >
                    <Icon />
                    <span>#{player.rank}</span>
                    <h3>{player.username}</h3>
                    <strong>{player.points}</strong>
                    <small>{t.leaderboard.points}</small>
                    <p>{player.prize[language]}</p>
                  </article>
                );
              })}
            </div>

            <h2 className="leaderboard-heading">{t.leaderboard.history}</h2>

            <div className="leaderboard-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>{t.leaderboard.position}</th>
                    <th>{t.leaderboard.username}</th>
                    <th>{t.leaderboard.points}</th>
                    <th>{t.leaderboard.wins}</th>
                    <th>{t.leaderboard.prize}</th>
                  </tr>
                </thead>

                <tbody>
                  {month.players.map((player) => (
                    <tr key={player.rank}>
                      <td data-label={t.leaderboard.position}>#{player.rank}</td>
                      <td data-label={t.leaderboard.username}>
                        {player.username}
                      </td>
                      <td data-label={t.leaderboard.points}>{player.points}</td>
                      <td data-label={t.leaderboard.wins}>{player.wins}</td>
                      <td data-label={t.leaderboard.prize}>
                        {player.prize[language]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <p className="leaderboard-note">{t.leaderboard.updateNote}</p>
      </div>
    </div>
  );
}
