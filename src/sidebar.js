import { createTodoOverlay, createProjectOverlay, createNoteOverlay } from "./overlay";
import { displayController } from ".";

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

function activateMainTabs(homeTab, todayTab, weekTab, notesTab) {
    homeTab.addEventListener('click', () => displayController.displayTodos(homeTab.querySelector('div').textContent));
    todayTab.addEventListener('click', () => displayController.displayTodos(todayTab.querySelector('div').textContent));
    weekTab.addEventListener('click', () => displayController.displayTodos(weekTab.querySelector('div').textContent));
    notesTab.addEventListener('click', () => displayController.displayNotes());
}

export default function generic(sidebar) {
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');

    const homeTab = createNewTab('Home', true);
    const todayTab = createNewTab('Today', true);
    const weekTab = createNewTab('Week', true);
    const notesTab = createNewTab('Notes', false);

    activateMainTabs(homeTab, todayTab, weekTab, notesTab);

    sidebarContent.appendChild(homeTab);
    sidebarContent.appendChild(todayTab);
    sidebarContent.appendChild(weekTab);
    sidebarContent.appendChild(createNewTab('Projects', true));

    const projects = document.createElement('div');
    projects.id = 'projects';
    sidebarContent.appendChild(projects);

    sidebarContent.appendChild(notesTab);

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