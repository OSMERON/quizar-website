import { Camera, Mail, Music2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/siteConfig";
import "./Contact.css";
function TikTokIcon(){return <Music2/>}
export default function Contact(){const{t}=useLanguage();return <div className="contact-page page-section"><div className="page-container"><span className="eyebrow">{t.contact.eyebrow}</span><h1 className="page-title">{t.contact.title}</h1><p className="page-subtitle">{t.contact.description}</p><div className="contact-grid"><a href={siteConfig.tiktok} target="_blank" rel="noreferrer" className="contact-card glass-card"><TikTokIcon/><span>{t.contact.tiktok}</span></a><a href={siteConfig.email} className="contact-card glass-card"><Mail/><span>{t.contact.email}</span></a><div className="contact-card glass-card is-coming"><Camera/><span>{t.contact.instagram}</span><small>{t.contact.comingSoon}</small></div></div></div></div>}
