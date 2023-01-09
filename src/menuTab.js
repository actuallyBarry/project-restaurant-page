export default function renderMenu() {
    const content = document.querySelector('div#content');
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.innerHTML = '<h2>Barry\'s</h2><h1>MENU</h1><hr><h3>Coq au vin</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><hr><h3>Chocolate soufflé</h3><p>Congue nisi vitae suscipit tellus mauris a diam maecenas.</p><hr><h3>Flamiche</h3><p>Viverra aliquet eget sit amet tellus cras. Dignissim enim sit amet venenatis.</p><hr><h3>Ratatouille</h3><p>Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p><hr><h3>Tarte Tatin</h3><p>Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.</p>'
    content.innerHTML = '';
    content.appendChild(menu);
}