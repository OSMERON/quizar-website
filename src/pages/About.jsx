import { Headphones, Target, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/QuizarLogo.jpeg";
import "./About.css";
export default function About(){const{t}=useLanguage();const icons=[Users,Target,Headphones];return <div className="about-page page-section"><div className="page-container"><span className="eyebrow">{t.about.eyebrow}</span><h1 className="page-title">{t.about.title}</h1><p className="page-subtitle">{t.about.intro}</p><div className="about-layout"><div className="about-logo"><img src={logo} alt="Quizar"/></div><div className="about-sections">{t.about.sections.map(([title,text],i)=>{const Icon=icons[i];return <article className="glass-card" key={title}><Icon/><div><h2>{title}</h2><p>{text}</p></div></article>})}</div></div></div></div>}
