import { createTodoOverlay, createProjectOverlay, createNoteOverlay } from "./overlay";

function createNewTab(divName, notif) {
    const newDiv = document.createElement('div');
    newDiv.id = divName;
    
    const newDivName = document.createElement('div');
    newDivName.style = 'font-size: 25px;';
    newDivName.textContent = divName;

    newDiv.appendChild(newDivName);

    if (notif) {
        const newNotif = document.createElement('div');
        newNotif.classList.add('notif');
        newNotif.textContent = '0';
        newDiv.appendChild(newNotif);
    }

    return newDiv;
}

function createNewButton() {
    const btn = document.createElement('button');
    btn.classList.add('sidebar-button');
    btn.textContent = '+';
    btn.addEventListener('click', enableBtn);
    return btn;
}

export default function generic(sidebar) {
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');

    sidebarContent.appendChild(createNewTab('Home', true));
    sidebarContent.appendChild(createNewTab('Today', true));
    sidebarContent.appendChild(createNewTab('Week', true));
    sidebarContent.appendChild(createNewTab('Projects', true));
    sidebarContent.appendChild(createNewTab('Notes', false));

    sidebar.appendChild(sidebarContent);    

    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('sidebar-bottom-div');

    bottomDiv.appendChild(createNewButton());
    sidebar.appendChild(bottomDiv);
}

function enableBtn() {
    const div = document.querySelector('.sidebar-bottom-div');
    div.querySelector('button').remove();
    
    const newTodo = document.createElement('div');
    const newProject = document.createElement('div');
    const newNote = document.createElement('div');

    newTodo.textContent = 'To-Do';
    newProject.textContent = 'Project';
    newNote.textContent = 'Note';

    newTodo.addEventListener('click', () => {
        div.textContent = '';
        div.appendChild(createNewButton());
        createTodoOverlay();
    });

    newProject.addEventListener('click', () => {
        div.textContent = '';
        div.appendChild(createNewButton());
        createProjectOverlay();
    });

    newNote.addEventListener('click', () => {
        div.textContent = '';
        div.appendChild(createNewButton());
        createNoteOverlay();
    });

    div.appendChild(newTodo);
    div.appendChild(newProject);
    div.appendChild(newNote);
}