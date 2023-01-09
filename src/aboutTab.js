export default function renderAbout() {
    const content = document.querySelector('div#content');
    const about = document.createElement('div');
    about.id = 'about';
    about.innerHTML = '<h2>Barry\'s</h2><h1>ABOUT</h1><hr><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Background photo by <a href="https://unsplash.com/photos/zlABb6Gke24">Clem Onojeghuo</a></p>'
    content.innerHTML = '';
    content.appendChild(about);
}