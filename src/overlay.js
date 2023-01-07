import { activateNoteBtn, activateProjectBtn, activateTodoButton, activateEditTodoButton } from ".";
import { Todo } from "./content";
import format from "date-fns/format";

const priorities = ['Low', 'Medium', 'High'];

function createBlurOverlay() {
    const blurred = document.createElement('div');
    blurred.classList.add('overlay');
    blurred.addEventListener('click', (e) => {
        if(e.target.classList.contains('overlay'))
            blurred.remove();
    });

    document.querySelector('body').appendChild(blurred);
};

export function getCurrentDate() {
    const date = new Date();
    return format(new Date(date.getFullYear(), date.getMonth(), date.getDate()), 'yyyy-MM-dd');
}

export function createTodoOverlay() {
    createBlurOverlay();
    const todoEntry = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'New To-Do';

    const todoName = document.createElement('input');
    todoName.setAttribute('type', 'text');
    todoName.setAttribute('maxlength', '20');
    todoName.setAttribute('placeholder', 'To-Do');
    todoName.classList.add('n');

    const todoDesc = document.createElement('textarea');
    todoDesc.setAttribute('placeholder', 'Description (Optional)');
    todoDesc.setAttribute('maxlength', '200');
    todoDesc.classList.add('d');

    const todoDate = document.createElement('input');
    todoDate.setAttribute('type', 'date');
    todoDate.value = getCurrentDate();
    todoDate.classList.add('da');

    const priority = document.createElement('div');
    priority.textContent = 'Priority: Low';

    const range = document.createElement('input');
    range.setAttribute('type', 'range');
    range.setAttribute('value', '0');
    range.setAttribute('max', '2');
    range.classList.add('r');

    range.addEventListener('change', () => { priority.textContent = `Priority: ${priorities[range.value]}`; });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'ADD TO-DO';

    activateTodoButton(submitBtn);

    todoEntry.appendChild(title);
    todoEntry.appendChild(todoName);
    todoEntry.appendChild(todoDesc);
    todoEntry.appendChild(todoDate);
    todoEntry.appendChild(priority);
    todoEntry.appendChild(range);
    todoEntry.appendChild(submitBtn);
    document.querySelector('.overlay').appendChild(todoEntry);
}

export function createProjectOverlay() {
    createBlurOverlay();
    const projectEntry = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'New Project';
    const pName = document.createElement('input');
    pName.setAttribute('type', 'text');
    pName.setAttribute('placeholder', 'Name');
    pName.setAttribute('maxlength', '20');
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'CREATE PROJECT';

    activateProjectBtn(submitBtn);

    projectEntry.appendChild(title);
    projectEntry.appendChild(pName);
    projectEntry.appendChild(submitBtn);
    document.querySelector('.overlay').appendChild(projectEntry);
}

export function createNoteOverlay() {
    createBlurOverlay();

    const newNote = document.createElement('div');
    newNote.classList.add('new-note');

    const title = document.createElement('h1');
    title.textContent = 'New Note';

    const nTitle = document.createElement('input');
    nTitle.setAttribute('type', 'text');
    nTitle.setAttribute('maxlength', '20');
    nTitle.setAttribute('placeholder', 'Title');
    nTitle.classList.add('t');

    const nContent = document.createElement('textarea');
    nContent.setAttribute('type', 'text');
    nContent.setAttribute('placeholder', 'Note');
    nContent.classList.add('c');
    
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'ADD NOTE';

    activateNoteBtn(submitBtn);

    newNote.appendChild(title);
    newNote.appendChild(nTitle);
    newNote.appendChild(nContent);
    newNote.appendChild(submitBtn);
    document.querySelector('.overlay').appendChild(newNote);
}

export function createTodoDetailsOverlay(todo) {
    createBlurOverlay();
    const todoView = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = todo.getTitle();
    
    const project = document.createElement('div');
    const prjB = document.createElement('b');
    project.innerHTML = '<b>Project: </b>' + todo.getProjectName();

    const todoDate = document.createElement('div');
    todoDate.innerHTML = '<b>Due date: </b>' + todo.getDate();

    const priority = document.createElement('div');
    priority.innerHTML = `<b>Priority: </b>${priorities[todo.getPriority()]}`;

    const todoDesc = document.createElement('div');
    todoDesc.innerHTML = '<b>Description: </b>' + todo.getDesc();
    
    todoView.appendChild(title);
    todoView.appendChild(project);
    todoView.appendChild(todoDate);
    todoView.appendChild(priority);
    todoView.appendChild(todoDesc);
    document.querySelector('.overlay').appendChild(todoView);
}

export function createTodoEditOverlay(todo) {
    createBlurOverlay();
    const todoEntry = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'Edit To-Do';

    const todoName = document.createElement('input');
    todoName.setAttribute('type', 'text');
    todoName.setAttribute('maxlength', '20');
    todoName.setAttribute('placeholder', 'To-Do');
    todoName.classList.add('n');
    todoName.value = todo.getTitle();

    const todoDesc = document.createElement('textarea');
    todoDesc.setAttribute('placeholder', 'Description (Optional)');
    todoDesc.setAttribute('maxlength', '200');
    todoDesc.classList.add('d');
    todoDesc.value = todo.getDesc();

    const todoDate = document.createElement('input');
    todoDate.setAttribute('type', 'date');
    todoDate.value = todo.getDate();
    todoDate.classList.add('da');

    const priority = document.createElement('div');
    priority.textContent = `Priority: ${priorities[todo.getPriority()]}`;

    const range = document.createElement('input');
    range.setAttribute('type', 'range');
    range.setAttribute('value', '0');
    range.setAttribute('max', '2');
    range.classList.add('r');
    range.value = todo.getPriority();

    range.addEventListener('change', () => { priority.textContent = `Priority: ${priorities[range.value]}`; });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'EDIT TO-DO';

    activateEditTodoButton(submitBtn, todo.getId());

    todoEntry.appendChild(title);
    todoEntry.appendChild(todoName);
    todoEntry.appendChild(todoDesc);
    todoEntry.appendChild(todoDate);
    todoEntry.appendChild(priority);
    todoEntry.appendChild(range);
    todoEntry.appendChild(submitBtn);
    document.querySelector('.overlay').appendChild(todoEntry);
}