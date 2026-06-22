import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./MusicControl.css";
export default function MusicControl(){const audio=useRef(null);const[playing,setPlaying]=useState(false);const{t}=useLanguage();const toggle=async()=>{if(!audio.current)return;if(playing){audio.current.pause();setPlaying(false)}else{try{audio.current.volume=.22;await audio.current.play();setPlaying(true)}catch{setPlaying(false)}}};return <><audio ref={audio} src="./audio/quizar-ambient.wav" loop preload="none"/><button className={`music-control ${playing?"is-playing":""}`} onClick={toggle} aria-label={playing?t.music.pause:t.music.play} title={playing?t.music.pause:t.music.play}>{playing?<Pause/>:<Music/>}<span>{playing?"ON":"MUSIC"}</span></button></>}
