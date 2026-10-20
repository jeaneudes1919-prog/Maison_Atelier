import {useEffect} from "react";import {Routes,Route,Link,useLocation} from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion";import {ShoppingBag,Heart,X} from "lucide-react";
import {useStore} from "./store.jsx";import {Home,Shop,Product,CartPage,Checkout,Confirm,Wishlist,NotFound,CartContent} from "./pages.jsx";
export default function App(){const loc=useLocation();const {cart,wish,drawer,setDrawer,toast}=useStore();
useEffect(()=>{window.scrollTo(0,0);setDrawer(false)},[loc.pathname]);
const n=cart.reduce((s,i)=>s+i.qty,0);
return <div className="min-h-screen">
<header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-ivory/80 backdrop-blur-md"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
<Link to="/" className="font-serif text-2xl tracking-wide">Maison <span className="text-terra">Atelier</span></Link>
<nav className="flex items-center gap-5 text-sm"><Link to="/boutique" className="hover:text-terra">Boutique</Link>
<Link to="/favoris" aria-label="Favoris" className="relative"><Heart size={22}/>{wish.length>0&&<b className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-terra text-[10px] text-white">{wish.length}</b>}</Link>
<button aria-label="Panier" onClick={()=>setDrawer(true)} className="relative"><ShoppingBag size={22}/>{n>0&&<motion.b key={n} initial={{scale:1.8}} animate={{scale:1}} className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-terra text-[10px] text-white">{n}</motion.b>}</button></nav></div></header>
<AnimatePresence mode="wait"><motion.main key={loc.pathname} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.3}} className="pt-16">
<Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/boutique" element={<Shop/>}/><Route path="/produit/:id" element={<Product/>}/><Route path="/favoris" element={<Wishlist/>}/><Route path="/panier" element={<CartPage/>}/><Route path="/commande" element={<Checkout/>}/><Route path="/confirmation" element={<Confirm/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.main></AnimatePresence>
<footer className="mt-24 border-t border-black/10 py-10 text-center text-sm text-ink/60"><p className="font-serif text-xl text-ink">Maison Atelier</p><p className="mt-2">Mobilier & décoration d'exception, Cotonou. Projet de démonstration.</p></footer>
<AnimatePresence>{drawer&&<><motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setDrawer(false)} className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"/>
<motion.aside initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{type:"spring",damping:30,stiffness:260}} className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory p-6 shadow-2xl">
<div className="mb-4 flex items-center justify-between"><h2 className="font-serif text-2xl">Votre panier</h2><button aria-label="Fermer" onClick={()=>setDrawer(false)}><X/></button></div><CartContent drawer/></motion.aside></>}</AnimatePresence>
<AnimatePresence>{toast&&<motion.div initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} exit={{y:40,opacity:0}} className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-ink px-6 py-3 text-sm text-ivory shadow-xl">{toast}</motion.div>}</AnimatePresence></div>}
