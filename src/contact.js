import { contentDiv } from "./index";

/* 
    * renderContact function
    * Dynamically creates content for the content div
*/
export default function renderContact () {
    contentDiv.textContent = "";

    const contactContentDiv = document.createElement('div');
    contactContentDiv.setAttribute('id', 'contact-content');

    const contactHeroDiv = document.createElement('div');
    contactHeroDiv.setAttribute('id', 'hero');

    const heroH1 = document.createElement('h1');
    heroH1.textContent = 'CONTACT US';

    contactHeroDiv.appendChild(heroH1);

    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'form');

    const form = document.createElement('form');

    const fullNameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const commentLabel = document.createElement('label');

    fullNameLabel.setAttribute('for', 'full-name');
    fullNameLabel.textContent = 'Full Name*';

    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email*';

    commentLabel.setAttribute('for', 'comment');
    commentLabel.textContent = 'Comment*';

    const fullNameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const commentInput = document.createElement('textarea');

    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'full-name');
    fullNameInput.setAttribute('max-length', 40);
    fullNameInput.setAttribute('min-length', 5);
    // fullNameInput.setAttribute('required');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    // emailInput.setAttribute('required');

    commentInput.setAttribute('id', 'comment');
    commentInput.setAttribute('rows', 5);
    // commentInput.setAttribute('required');

    const formBtn = document.createElement('button');
    formBtn.textContent = 'Submit';
    formBtn.setAttribute('type', 'submit');

    form.appendChild(fullNameLabel);
    form.appendChild(fullNameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(commentLabel);
    form.appendChild(commentInput);
    form.appendChild(formBtn);

    formDiv.appendChild(form);

    const alternativeDiv = document.createElement('div');
    alternativeDiv.setAttribute('id', 'alternate');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    p1.textContent = 'Alternatively,';
    p2.innerHTML = '<i class="bx bx-current-location"></i> Apt. 636 463 Cyndy Light, New Simonfurt, MN 97692';
    p3.innerHTML = '<i class="bx bx-phone"></i> +1 (115) 380-0505';
    p4.innerHTML = '<i class="bx bx-envelope"></i> alexschmitt@realemail.com';

    alternativeDiv.appendChild(p1);
    alternativeDiv.appendChild(p2);
    alternativeDiv.appendChild(p3);
    alternativeDiv.appendChild(p4);

    contactContentDiv.appendChild(contactHeroDiv);
    contactContentDiv.appendChild(formDiv);
    contactContentDiv.appendChild(alternativeDiv);

    contentDiv.appendChild(contactContentDiv);
};
