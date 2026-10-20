import {useState} from "react";import {motion} from "framer-motion";
export function Img({p,src,className=""}){const [ok,setOk]=useState(true);const [ld,setLd]=useState(false);
return <div className={"relative overflow-hidden "+className} style={{background:`linear-gradient(135deg,${p?.c1||"#D8C3A5"},${p?.c2||"#8A6F4D"})`}}>
{ok&&src&&<img src={src} alt={p?.nom||""} loading="lazy" onError={()=>setOk(false)} onLoad={()=>setLd(true)} className={"h-full w-full object-cover transition duration-700 hover:scale-105 "+(ld?"opacity-100":"opacity-0")}/>}</div>}
export const Reveal=({children,d=0,className=""})=><motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.7,delay:d,ease:[.22,1,.36,1]}}>{children}</motion.div>;
export const Btn=({as:C="button",className="",...p})=><C {...p} className={"inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ivory transition hover:bg-terra active:scale-95 disabled:opacity-40 "+className}/>;
