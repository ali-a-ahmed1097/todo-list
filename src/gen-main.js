export default function genMain() {
    const main = document.querySelector('.main');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Todo List';

    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebar');
    sidebarDiv.textContent = 'sidebar';

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'content';

    main.appendChild(header);
    main.appendChild(sidebarDiv);
    main.appendChild(content);
}