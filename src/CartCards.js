export default class CartCards {
    constructor () {
        this.price = 0;
        this.count = 0;
    }
    render (dataObject) {
        const cart = document.createElement('div');
        const cartTitle = document.createElement('div');
        const cartImage = document.createElement('img');
        const cartDescription = document.createElement('div');
        const cartPrice = document.createElement('div');
        const cartButtonContainer = document.createElement('div');
        const cartButtonContainerQuantity = document.createElement('div'); //make it to p if it didn't work
        const cartButtonContainerAdd = document.createElement('button');
        const cartButtonContainerRemove = document.createElement('button');

        cart.classList.add('cart');
        cartTitle.classList.add('cart__title');
        cartImage.classList.add('cart__image');
        cartDescription.classList.add('cart__description');
        cartPrice.classList.add('cart__price');
        cartButtonContainer.classList.add('cart__buttonContainer');
        cartButtonContainerQuantity.classList.add('cart__buttonContainerQuantity');
        cartButtonContainerAdd.id = "incrementButton";
        cartButtonContainerRemove.id = "decrementButton";
        cartButtonContainerQuantity.id = dataObject.id;
        cartButtonContainerAdd.innerText = "+";
        cartButtonContainerRemove.innerText = "-";
        cartButtonContainerQuantity.innerText = `${dataObject.countPrice}`;
 
        cartTitle.innerText = dataObject.title;
        cartImage.src = dataObject.images[0];
        cartDescription.innerText = dataObject.description;
        cartPrice.innerText = (dataObject.count);
        //Adding the element to the boxes
        cart.appendChild(cartTitle);
        cart.appendChild(cartImage);
        cart.appendChild(cartDescription);
        cart.appendChild(cartPrice);
        cart.appendChild(cartButtonContainerQuantity);

        return cart;
    }
}