import { contentDiv } from './index';

export default function renderHome () {
    contentDiv.textContent = "";

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'home-img');

    const heroDiv = document.createElement('div');
    heroDiv.setAttribute('id', 'home-hero');

    const heroWelcome = document.createElement('h1');
    heroWelcome.textContent = "WELCOME TO SPOCHER'S";

    const heroPitch = document.createElement('h1');
    heroPitch.textContent = "Experience The Ultimate BBQ Adventure: Where Flavor Meets Tradition";

    const heroBtn = document.createElement('button');
    heroBtn.textContent = "Book A Table";

    heroDiv.appendChild(heroWelcome);
    heroDiv.appendChild(heroPitch);
    heroDiv.appendChild(heroBtn);

    contentDiv.appendChild(imgDiv);
    contentDiv.appendChild(heroDiv);
};