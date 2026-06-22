import "./FallingStars.css";
const create=(count,layer,min,range,dur,dr)=>Array.from({length:count},(_,i)=>({id:`${layer}-${i}`,layer,left:`${(i*37+layer.length*11)%100}%`,size:`${min+(i%range)}px`,duration:`${dur+(i%dr)}s`,delay:`-${i%15}s`,opacity:.12+(i%5)*.08}));
const stars=[...create(35,"far",1,2,18,10),...create(24,"middle",2,3,11,7),...create(12,"near",4,5,6,5)];
export default function FallingStars(){return <div className="falling-stars" aria-hidden="true">{stars.map(s=><span key={s.id} className={`falling-star falling-star--${s.layer}`} style={{left:s.left,width:s.size,height:s.size,animationDuration:s.duration,animationDelay:s.delay,opacity:s.opacity}} />)}</div>}
