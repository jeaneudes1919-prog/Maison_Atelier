import {createContext,useContext,useReducer,useState,useEffect,useCallback} from "react";
const C=createContext();export const useStore=()=>useContext(C);
export const FREE=150000,PORT=8000,CODE="BIENVENUE10";
export const fcfa=n=>new Intl.NumberFormat("fr-FR").format(n)+" FCFA";
export function totals(items,promo){const sub=items.reduce((s,i)=>s+i.prix*i.qty,0);const remise=promo===CODE?Math.round(sub*.1):0;const livraison=!sub||sub-remise>=FREE?0:PORT;return{sub,remise,livraison,total:sub-remise+livraison}}
export function reducer(s,a){switch(a.t){
case"add":{const k=a.p.id+"|"+a.couleur;return s.some(i=>i.k===k)?s.map(i=>i.k===k?{...i,qty:Math.min(i.qty+a.qty,i.stock)}:i):[...s,{...a.p,k,couleur:a.couleur,qty:Math.min(a.qty,a.p.stock)}]}
case"qty":return s.map(i=>i.k===a.k?{...i,qty:Math.max(1,Math.min(i.stock,i.qty+a.d))}:i);
case"del":return s.filter(i=>i.k!==a.k);case"clear":return[];default:return s}}
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
export function Store({children}){
const [cart,dispatch]=useReducer(reducer,null,()=>load("ma-cart",[]));
const [wish,setWish]=useState(()=>load("ma-wish",[]));const [promo,setPromo]=useState(()=>load("ma-promo",""));
const [drawer,setDrawer]=useState(false);const [toast,setToast]=useState("");
useEffect(()=>{try{localStorage.setItem("ma-cart",JSON.stringify(cart));localStorage.setItem("ma-wish",JSON.stringify(wish));localStorage.setItem("ma-promo",JSON.stringify(promo))}catch{}},[cart,wish,promo]);
const notify=useCallback(m=>{setToast(m);setTimeout(()=>setToast(""),2200)},[]);
const toggleWish=id=>setWish(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);
return <C.Provider value={{cart,dispatch,wish,toggleWish,promo,setPromo,drawer,setDrawer,toast,notify}}>{children}</C.Provider>}
