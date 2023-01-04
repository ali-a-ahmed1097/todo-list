import generic from "./sidebar.js";

export default function genMain() {
    const main = document.querySelector('.main');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'TO-DO LIST';

    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('sidebar');
    generic(sidebarDiv);

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'content';

    main.appendChild(header);
    main.appendChild(sidebarDiv);
    main.appendChild(content);
}