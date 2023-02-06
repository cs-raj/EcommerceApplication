import Header from "./HeaderComponent.js";
import CardContainer from "./CardContainer.js";
import Cards from "./Cards.js";
import data from '../data/data.json' assert { type: 'json' };

const root = document.getElementById('root');
const header = new Header();
const cardContainer = new CardContainer();

root.append(header.render());
const cc = cardContainer.render();
root.append(cc);

console.log(data);

data.products.forEach((element)=>{
    const card = new Cards(element);
    cc.appendChild(card.render());
})
// for(let i =0;i<5;i++){
//     const card = new Cards();
//     cc.appendChild(card.render());
// }
// root.appendChild(card.render());