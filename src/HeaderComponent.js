/*
    * Desgin it
    * Find the Interactions among the components
    * Then start building the components
*/
export default class Header {
    constructor(){}
    render () {
        const headerContainer = document.createElement('header');
        headerContainer.innerText = "Free-Market-Shop-Like-Sharks";
        return headerContainer;
    }
}