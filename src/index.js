const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about'); 
const contentDiv = document.getElementById('content');

export { contentDiv };

import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import renderAbout from "./about";
import './style.css';

const renderContentDiv = (function () {
    // renderHome();

    homeBtn.onclick = () => renderHome();
    menuBtn.onclick = () => renderMenu();
    contactBtn.onclick = () => renderContact();
    aboutBtn.onclick = () => renderAbout();
})();