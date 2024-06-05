import { contentDiv, createDiv, createP } from "./index";

/* 
    * renderMenu function
    * Dynamically creates content for the content div
*/
export default function renderMenu () {
    contentDiv.textContent = "";

    const menuContent = createDiv();
    menuContent.setAttribute('class', 'menu-content');

    const menuHero = createDiv();
    menuHero.setAttribute('class', 'hero');

    menuHero.innerHTML = '<i class="bx bx-fork"></i> <h1>Our Awesome BBQ Menu</h1> <i class="bx bx-knife bx-rotate-270"></i>';

    const startersDiv = createDiv();
    startersDiv.setAttribute('class', 'category');

    const entriesDiv = createDiv();
    entriesDiv.setAttribute('class', 'category');

    const dessertsDiv = createDiv();
    dessertsDiv.setAttribute('class', 'category');

    const drinksDiv = createDiv();
    drinksDiv.setAttribute('class', 'category');

    const startersContent = createDiv();
    startersContent.setAttribute('class', 'category-content');

    const entriesContent = createDiv();
    entriesContent.setAttribute('class', 'category-content');

    const dessertsContent = createDiv();
    dessertsContent.setAttribute('class', 'category-content');

    const drinksContent = createDiv();
    drinksContent.setAttribute('class', 'category-content');

    const startersImg = createDiv();
    startersImg.setAttribute('class', 'category-img');
    startersImg.setAttribute('id', 'starter-img');

    const entriesImg = createDiv();
    entriesImg.setAttribute('class', 'category-img');
    entriesImg.setAttribute('id', 'entries-img');

    const dessertsImg = createDiv();
    dessertsImg.setAttribute('class', 'category-img');
    dessertsImg.setAttribute('id', 'desserts-img');

    const drinksImg = createDiv();
    drinksImg.setAttribute('class', 'category-img');
    drinksImg.setAttribute('id', 'drinks-img');

    let p1 ,p2;

    const startDiv1 = createDiv();
    startDiv1.textContent = 'STARTERS';

    const startDiv2 = createDiv();
    p1 = createP();
    p1.textContent = 'PAN FRIED CHIKFEA CAKE';
    p2 = createP();
    p2.textContent = '$ 12.00';
    startDiv2.appendChild(p1);
    startDiv2.appendChild(p2);

    const startDiv3 = createDiv();
    p1 = createP();
    p1.textContent = 'MEXICAN BBQ';
    p2 = createP();
    p2.textContent = '$ 10.00';
    startDiv3.appendChild(p1);
    startDiv3.appendChild(p2);

    const startDiv4 = createDiv();
    p1 = createP();
    p1.textContent = 'CRUDITTE PLATTER';
    p2 = createP();
    p2.textContent = '$ 9.00';
    startDiv4.appendChild(p1);
    startDiv4.appendChild(p2);

    const startDiv5 = createDiv();
    p1 = createP();
    p1.textContent = 'MIXED MEAT TACOS';
    p2 = createP();
    p2.textContent = '$ 7.00';
    startDiv5.appendChild(p1);
    startDiv5.appendChild(p2);

    const entriesDiv1 = createDiv();
    entriesDiv1.textContent = 'ENTRIES';

    const entriesDiv2 = createDiv();
    p1 = createP();
    p1.textContent = 'SMOTHERED BBQ CHOPS';
    p2 = createP();
    p2.textContent = '$ 12.00';
    entriesDiv2.appendChild(p1);
    entriesDiv2.appendChild(p2);

    const entriesDiv3 = createDiv();
    p1 = createP();
    p1.textContent = 'PIT BEEF';
    p2 = createP();
    p2.textContent = '$ 12.00';
    entriesDiv3.appendChild(p1);
    entriesDiv3.appendChild(p2);

    const entriesDiv4 = createDiv();
    p1 = createP();
    p1.textContent = 'TAGLEATA';
    p2 = createP();
    p2.textContent = '$ 12.00';
    entriesDiv4.appendChild(p1);
    entriesDiv4.appendChild(p2);

    const entriesDiv5 = createDiv();
    p1 = createP();
    p1.textContent = 'SHREDDED LAMP PORTO';
    p2 = createP();
    p2.textContent = '$ 12.00';
    entriesDiv5.appendChild(p1);
    entriesDiv5.appendChild(p2);

    const dessertsDiv1 = createDiv();
    dessertsDiv1.textContent = 'DESSERTS';

    const dessertsDiv2 = createDiv();
    p1 = createP();
    p1.textContent = 'DORIS VIENNESE TABLE';
    p2 = createP();
    p2.textContent = '$ 12.00';
    dessertsDiv2.appendChild(p1);
    dessertsDiv2.appendChild(p2);

    const dessertsDiv3 = createDiv();
    p1 = createP();
    p1.textContent = 'TIRAMISU';
    p2 = createP();
    p2.textContent = '$ 12.00';
    dessertsDiv3.appendChild(p1);
    dessertsDiv3.appendChild(p2);

    const dessertsDiv4 = createDiv();
    p1 = createP();
    p1.textContent = 'TARTUFFO CAPPUCCINO';
    p2 = createP();
    p2.textContent = '$ 12.00';
    dessertsDiv4.appendChild(p1);
    dessertsDiv4.appendChild(p2);

    const dessertsDiv5 = createDiv();
    p1 = createP();
    p1.textContent = 'PANNA COTTA';
    p2 = createP();
    p2.textContent = '$ 12.00';
    dessertsDiv5.appendChild(p1);
    dessertsDiv5.appendChild(p2);

    const drinksDiv1 = createDiv();
    drinksDiv1.textContent = 'DRINKS';

    const drinksDiv2 = createDiv();
    p1 = createP();
    p1.textContent = 'WHITE WHINE';
    p2 = createP();
    p2.textContent = '$ 12.00';
    drinksDiv2.appendChild(p1);
    drinksDiv2.appendChild(p2);

    const drinksDiv3 = createDiv();
    p1 = createP();
    p1.textContent = 'LOCAL BEER';
    p2 = createP();
    p2.textContent = '$ 12.00';
    drinksDiv3.appendChild(p1);
    drinksDiv3.appendChild(p2);

    const drinksDiv4 = createDiv();
    p1 = createP();
    p1.textContent = 'FRESH ICED TEA';
    p2 = createP();
    p2.textContent = '$ 12.00';
    drinksDiv4.appendChild(p1);
    drinksDiv4.appendChild(p2);

    const drinksDiv5 = createDiv();
    p1 = createP();
    p1.textContent = 'MOJITO';
    p2 = createP();
    p2.textContent = '$ 12.00';
    drinksDiv5.appendChild(p1);
    drinksDiv5.appendChild(p2);

    startersContent.appendChild(startDiv1);
    startersContent.appendChild(startDiv2);
    startersContent.appendChild(startDiv3);
    startersContent.appendChild(startDiv4);
    startersContent.appendChild(startDiv5);

    entriesContent.appendChild(entriesDiv1);
    entriesContent.appendChild(entriesDiv2);
    entriesContent.appendChild(entriesDiv3);
    entriesContent.appendChild(entriesDiv4);
    entriesContent.appendChild(entriesDiv5);

    dessertsContent.appendChild(dessertsDiv1);
    dessertsContent.appendChild(dessertsDiv2);
    dessertsContent.appendChild(dessertsDiv3);
    dessertsContent.appendChild(dessertsDiv4);
    dessertsContent.appendChild(dessertsDiv5);

    drinksContent.appendChild(drinksDiv1);
    drinksContent.appendChild(drinksDiv2);
    drinksContent.appendChild(drinksDiv3);
    drinksContent.appendChild(drinksDiv4);
    drinksContent.appendChild(drinksDiv5);

    startersDiv.appendChild(startersContent);
    startersDiv.appendChild(startersImg);

    entriesDiv.appendChild(entriesImg);
    entriesDiv.appendChild(entriesContent);

    dessertsDiv.appendChild(dessertsContent);
    dessertsDiv.appendChild(dessertsImg);

    drinksDiv.appendChild(drinksImg);
    drinksDiv.appendChild(drinksContent);

    menuContent.appendChild(menuHero);
    menuContent.appendChild(startersDiv);
    menuContent.appendChild(entriesDiv);
    menuContent.appendChild(dessertsDiv);
    menuContent.appendChild(drinksDiv);

    contentDiv.appendChild(menuContent);
};