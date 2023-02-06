export default class CardContainer {
    constructor(){}
    render(){
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer');
        return cardContainer;
    }
}