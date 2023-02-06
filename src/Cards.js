export default class Cards {
    constructor (dataObject) {
        this.count = 0;
        this.dataObject = dataObject;
    }

    incrementCounter(){
        this.count = this.count + 1;
        this.updateCounter();
    }
    decrementCounter(){
        if(this.count===0){
            this.updateCounter();
        } else {
            this.count = this.count - 1;
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