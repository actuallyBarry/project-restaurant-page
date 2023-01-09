import renderMenu from "./menuTab";

export default function renderHome() {
    const content = document.querySelector('div#content');
    const home = document.createElement('div');
    const heading2 = document.createElement('h2');
    const heading1 = document.createElement('h1');
    const para = document.createElement('p');
    const button = document.createElement('button');

    home.id = 'home';
    heading2.textContent = 'Welcome to';
    heading1.textContent = 'BARRY\'S';
    para.textContent = 'The birth place of your delicious experiences.';
    button.textContent = 'see menu';

    home.appendChild(heading2);
    home.appendChild(heading1);
    home.appendChild(para);
    home.appendChild(button);
    content.innerHTML = '';
    content.appendChild(home);
    
    button.addEventListener('click', renderMenu);
}