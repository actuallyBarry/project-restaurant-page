import renderHome from './homeTab';
import renderMenu from './menuTab';
import renderAbout from './aboutTab';
import './style.css';
renderHome();

const homeBtn = document.querySelector('#header button:first-child');
const menuBtn = document.querySelector('#header button:nth-child(2)');
const aboutBtn = document.querySelector('#header button:last-child');

homeBtn.addEventListener('click', renderHome);
menuBtn.addEventListener('click', renderMenu);
aboutBtn.addEventListener('click', renderAbout);
