import CartCards from "./CartCards.js";
import Cart from "./Cart.js";
export default class Cards {
    static addedObjectsArray = [];
    static total = 0; // Could have used this object in the cart itself.
    constructor (dataObject) {

        this.count = 0;
        this.dataObject = dataObject;
        this.cartCards = new CartCards();
        this.cart = new Cart();
    }

    /*
        * On increment check whether the product is in addedObjectArray or not
        * if not set the products count and price 
        * Added it to addedObject Array
        * if Present Updates it price and count
        * Remove all the elements from the array and then refill the array
        * -- Need to find how to select the element specific to that as have used ID to identify the element
        * -- and products in list and cart have same IDs.
    */
    incrementCounter(){
        this.count = this.count + 1;
        const element = Cards.addedObjectsArray.find((ele)=>{if(ele.id===this.dataObject.id){return ele;}});
        const cartQuery = document.querySelector('.cartContainer');
        const cartContent = cartQuery.childNodes;

        // Find how to remove all the cards form the cart itself without removing the total
        if(element===undefined){
            console.log("Undefined");
            this.dataObject.count = this.count;
            this.dataObject.countPrice = this.count * this.dataObject.price;
            Cards.total += this.dataObject.price;
            Cards.addedObjectsArray.push(this.dataObject);
            cartQuery.innerHTML = "";

                Cards.addedObjectsArray.forEach((ele)=>{
                    console.log(ele);
                    cartQuery.appendChild(this.cartCards.render(ele));
                }); 
        } else {
            this.dataObject.count = this.count;
            this.dataObject.countPrice = this.count * this.dataObject.price;
            Cards.total += this.dataObject.price;
            cartQuery.innerHTML = "";
            Cards.addedObjectsArray.forEach((ele)=>{
                cartQuery.appendChild(this.cartCards.render(ele));
            });
        }
        console.log(cartQuery.querySelectorAll('.cart'));
        this.updateCounter();
    }
    decrementCounter(){
        if(this.count===0){
            this.updateCounter();
        } else {
            this.count = this.count - 1;
            const element = Cards.addedObjectsArray.find((ele)=>{if(ele.id===this.dataObject.id){return ele;}});
            const cartQuery = document.querySelector('.cartContainer');
            const cartContent = cartQuery.childNodes;
            if (element.count===1) {
                // Total remove karna hai so woh yaha se extract karo
                Cards.total -= element.price;
                Cards.addedObjectsArray.splice(Cards.addedObjectsArray.indexOf(element),1); //removed element from the array
                const n1 = document.querySelector('.cartContainer');
                n1.innerHTML = "";
                
                // document.getElementById('cart__total').innerText = `Total : ${Cards.total} INR`;

                Cards.addedObjectsArray.forEach((ele)=>{
                    n1.appendChild(this.cartCards.render(ele));
                });
            } else {
                element.count = this.count;
                element.countPrice = this.count * element.price;
                Cards.total -= element.price;
                const n1 = document.querySelector('.cartContainer');
                n1.innerHTML = "";
               
                // document.getElementById('cart__total').innerText = `Total : ${Cards.total} INR`;
                Cards.addedObjectsArray.forEach((ele)=>{
                    n1.appendChild(this.cartCards.render(ele));
                });
            }
            console.log(Cards.total);
            this.updateCounter();
        }


    }
    updateCounter(){
        // console.log( document.querySelector('.card__buttonContainerQuantity'));
        document.getElementById(this.dataObject.id).innerText = `${this.count}`;
    }
    render () {
        const card = document.createElement('div');
        const cardTitle = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardDescription = document.createElement('div');
        const cardPrice = document.createElement('div');
        const cardButtonContainer = document.createElement('div');
        const cardButtonContainerQuantity = document.createElement('div'); //make it to p if it didn't work
        const cardButtonContainerAdd = document.createElement('button');
        const cardButtonContainerRemove = document.createElement('button');

        card.classList.add('card');
        cardTitle.classList.add('card__title');
        cardImage.classList.add('card__image');
        cardDescription.classList.add('card__description');
        cardPrice.classList.add('card__price');
        cardButtonContainer.classList.add('card__buttonContainer');
        cardButtonContainerQuantity.classList.add('card__buttonContainerQuantity');
        cardButtonContainerAdd.id = "incrementButton";
        cardButtonContainerRemove.id = "decrementButton";
        cardButtonContainerQuantity.id = this.dataObject.id;
        cardButtonContainerAdd.innerText = "+";
        cardButtonContainerRemove.innerText = "-";
        cardButtonContainerQuantity.innerText = `${this.count}`;
        cardButtonContainerAdd.onclick = this.incrementCounter.bind(this);
        cardButtonContainerRemove.onclick = this.decrementCounter.bind(this);

        cardTitle.innerText = this.dataObject.title;
        cardImage.src = this.dataObject.images[0];
        cardDescription.innerText = this.dataObject.description;
        cardPrice.innerText = (this.dataObject.price) + " INR";
        //Adding the element to the boxes
        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(cardDescription);
        card.appendChild(cardPrice);
        card.appendChild(cardButtonContainer);
        cardButtonContainer.appendChild(cardButtonContainerAdd);
        cardButtonContainer.appendChild(cardButtonContainerQuantity);
        cardButtonContainer.appendChild(cardButtonContainerRemove);

        return card;

    }
}