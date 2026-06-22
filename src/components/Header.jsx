import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/QuizarLogo.jpeg";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["/", t.navigation.home], ["/rules", t.navigation.rules], ["/leaderboard", t.navigation.leaderboard],
    ["/prizes", t.navigation.prizes], ["/about", t.navigation.about], ["/contact", t.navigation.contact],
  ];

  return (
    <header className="site-header">
      <div className="header-glow" />
      <div className="header-container">
        <NavLink to="/" className="header-brand" aria-label="Quizar home">
          <span className="header-logo-wrapper"><img src={logo} alt="Quizar" className="header-logo" /></span>
          <span className="header-brand-text"><strong>QUIZAR</strong><small>Community Trivia</small></span>
        </NavLink>
        <nav className={`header-navigation ${open ? "header-navigation--open" : ""}`} aria-label="Main navigation">
          {links.map(([path, label]) => <NavLink key={path} to={path} className={({ isActive }) => `header-link ${isActive ? "header-link--active" : ""}`}>{label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <button className="header-language-button" onClick={toggleLanguage} aria-label="Change language">{language === "en" ? "RO" : "EN"}</button>
          <button className="header-menu-button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}
