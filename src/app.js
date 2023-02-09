import Header from "./HeaderComponent.js";
import CardContainer from "./CardContainer.js";
import Cards from "./Cards.js";
import data from "../data/data.json" assert { type: "json" };
import Cart from "./Cart.js";
import CartCards from "./CartCards.js";

class AppComponent {
  constructor() {
    this.header = new Header();
    this.cardContainer = new CardContainer();
    this.cart = new Cart();
    this.root = document.getElementById("root");
    this.mainComponent = document.createElement("main");
  }
  render() {
    const cardContainerRender = this.cardContainer.render();
    const cartRender = this.cart.render();

    this.root.append(this.header.render());
    this.root.appendChild(this.mainComponent);
    this.mainComponent.append(cardContainerRender);
    this.mainComponent.append(cartRender);

    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((res2) => {
        res2.products.forEach((element) => {
          const card = new Cards(element);
          cardContainerRender.appendChild(card.render());
        });
      });
  }
  mount() {}
}

const ac = new AppComponent();
ac.render();

// //Create instances of classes
// const header = new Header();
// const cardContainer = new CardContainer();
// const cart = new Cart();

// console.log(data);

// data.products.forEach((element)=>{
//     const cartCards = new CartCards(element);
//     c.appendChild(cartCards.render());
// });
