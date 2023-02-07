export default class Cart {
    constructor () {}
    render () {
        const cartContainer = document.createElement('div');
        const cartTotal = document.createElement('p');
        cartTotal.id = "cart__total";
        cartContainer.classList.add('cartContainer');
        cartContainer.appendChild(cartTotal);
        return cartContainer;
    }
}