import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";
export default function Footer(){const{t}=useLanguage();return <footer className="site-footer"><div className="page-container footer-inner"><div><strong>QUIZAR</strong><p>{t.footer.tagline}</p></div><nav><Link to="/rules">{t.footer.rules}</Link><Link to="/contact">{t.footer.contact}</Link></nav><small>© {new Date().getFullYear()} Quizar. {t.footer.rights}</small></div></footer>}
