import { contentDiv } from "./index";

/* 
    * renderAbout function
    * Dynamically creates content for the content div
*/
export default function renderAbout () {
    contentDiv.textContent = "";

    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'about-content');

    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = 'About Us';

    const aboutP = document.createElement('p');
    aboutP.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore! Rerum accusamus, aut eum, cupiditate in maiores voluptates aspernatur voluptatem provident necessitatibus, iure alias quia iste ducimus magnam ut voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere consectetur dignissimos consequatur reiciendis minus blanditiis. Dignissimos adipisci placeat tenetur excepturi natus, corrupti incidunt, sint sapiente voluptates illo ad quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, mollitia! Cupiditate repudiandae, architecto tempore eius, tempora harum ullam incidunt perspiciatis quis officia repellat in nesciunt enim suscipit voluptatem deleniti ut?';

    aboutDiv.appendChild(aboutH1);
    aboutDiv.appendChild(aboutP);
    
    contentDiv.appendChild(aboutDiv);
};
