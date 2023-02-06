import Header from "./HeaderComponent.js";
import CardContainer from "./CardContainer.js";
import Cards from "./Cards.js";
import data from '../data/data.json' assert { type: 'json' };
import Cart from "./Cart.js";
import CartCards from "./CartCards.js";
const root = document.getElementById('root');
const mainComponent = document.createElement('main');

//Create instances of classes
const header = new Header();
const cardContainer = new CardContainer();
const cart = new Cart();


root.append(header.render());
root.appendChild(mainComponent);

const cc = cardContainer.render();
const c = cart.render();
mainComponent.append(cc);
mainComponent.append(c);
console.log(data);

data.products.forEach((element)=>{
    const card = new Cards(element);
    cc.appendChild(card.render());
});


data.products.forEach((element)=>{
    const cartCards = new CartCards(element);
    c.appendChild(cartCards.render());
});

// for(let i =0;i<5;i++){
//     const card = new Cards();
//     cc.appendChild(card.render());
// }
// root.appendChild(card.render());