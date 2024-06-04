// Get HTML elements that requires user interaction
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const aboutBtn = document.getElementById('about'); 
const contentDiv = document.getElementById('content');

// Export the contentDiv so that all modules can access it and render content in it dynamically 
export { contentDiv };

// Get the function from all the modules that rendres renderes the main content
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import renderAbout from "./about";
import './style.css';

// renderContentDiv calls the appropriate render function according to the user's interaction
const renderContentDiv = (function () {
    // renderHome();

    homeBtn.onclick = () => renderHome();
    menuBtn.onclick = () => renderMenu();
    contactBtn.onclick = () => renderContact();
    aboutBtn.onclick = () => renderAbout();
})();