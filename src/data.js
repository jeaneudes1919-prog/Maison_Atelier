const u=i=>`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=1000&q=80`;
const P=(id,nom,cat,prix,desc,c1,c2,img,couleurs,note,avis,stock)=>({id,nom,cat,prix,desc,c1,c2,img:u(img),couleurs,note,avis,stock});
export const HERO=u("1555041469-a586c61ea9bc");
export const CATS=["Salon","Chambre","Luminaires","Décoration"];
export const PRODUITS=[
P(1,"Fauteuil Okoumé","Salon",185000,"Fauteuil en bois massif et assise en lin, pensé pour la lecture.","#D8C3A5","#8A6F4D","1503602642458-232111445657",["Naturel","Sable","Terracotta"],4.8,126,8),
P(2,"Canapé Harmattan","Salon",420000,"Canapé trois places en bouclette, profond et enveloppant.","#E6DDD0","#A89478","1493663284031-b7e3aefcae8e",["Ivoire","Taupe"],4.9,88,4),
P(3,"Table basse Kora","Salon",96000,"Table basse en chêne huilé aux angles arrondis.","#CDB89B","#7A5C3E","1532372320572-cda25653a26d",["Chêne","Noyer"],4.6,57,12),
P(4,"Étagère Savane","Salon",134000,"Étagère ouverte en bois clair et métal noir mat.","#DCD0BD","#8C7A62","1618220179428-22790b461013",["Chêne","Noir"],4.5,41,9),
P(5,"Lit Cotonou","Chambre",310000,"Lit à tête capitonnée, finition tissu premium.","#E2D4C4","#9C826A","1540574163026-643ea20ade25",["Écru","Terracotta","Anthracite"],4.7,64,5),
P(6,"Commode Atelier","Chambre",198000,"Commode trois tiroirs, poignées en laiton brossé.","#D3BFA4","#6F5336","1524758631624-e2822e304c36",["Chêne","Noyer"],4.6,38,7),
P(7,"Table de chevet Nuit","Chambre",72000,"Chevet suspendu avec tiroir à fermeture douce.","#E0CFB8","#8A6B4A","1586023492125-27b2c045efd7",["Naturel","Noir"],4.4,29,15),
P(8,"Lampe Lune","Luminaires",58000,"Lampe à poser en opaline soufflée, lumière diffuse.","#F0E3CC","#C9A56B","1513506003901-1e6a229e2d15",["Blanc","Ambre"],4.9,142,20),
P(9,"Suspension Rotin","Luminaires",89000,"Suspension tressée à la main par des artisans locaux.","#E8D5B0","#A9824A","1507473885765-e6ed057f782c",["Naturel"],4.8,97,11),
P(10,"Vase Argile","Décoration",34000,"Vase en grès artisanal, émail irrégulier unique.","#D9A98B","#9A5A3C","1578500494198-246f612d3b3d",["Terracotta","Sable"],4.7,76,25),
P(11,"Miroir Soleil","Décoration",76000,"Miroir rond bordé de bois, effet rayons de soleil.","#E3CDA8","#B58A4C","1618220048045-10a6dbdf83e0",["Doré","Noyer"],4.5,52,10),
P(12,"Plaid Kenté","Décoration",45000,"Plaid tissé en coton, inspiré des motifs kenté.","#C9A07A","#7F4E2C","1580301762395-21ce84d00bc6",["Ocre","Indigo"],4.8,110,18)];
