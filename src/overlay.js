import { activateNoteBtn, activateProjectBtn, activateTodoButton } from ".";

function createBlurOverlay() {
    const blurred = document.createElement('div');
    blurred.classList.add('overlay');
    blurred.addEventListener('click', (e) => {
        if(e.target.classList.contains('overlay'))
            blurred.remove();
    });

    document.querySelector('body').appendChild(blurred);
};

export function createTodoOverlay() {
    createBlurOverlay();
    const todoEntry = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'New To-Do';

    const todoName = document.createElement('input');
    todoName.setAttribute('type', 'text');
    todoName.setAttribute('maxlength', '20');
    todoName.classList.add('n');

    const todoDesc = document.createElement('input');
    todoDesc.setAttribute('type', 'text');
    todoDesc.setAttribute('maxlength', '200');
    todoDesc.classList.add('d');

    const todoDate = document.createElement('input');
    todoDate.setAttribute('type', 'date');
    todoDate.value = '2023-01-05';
    todoDate.classList.add('da');

    const priority = document.createElement('div');
    priority.textContent = 'Priority: Low';

    const range = document.createElement('input');
    range.setAttribute('type', 'range');
    range.setAttribute('value', '0');
    range.setAttribute('max', '2');
    range.classList.add('r');

    range.addEventListener('change', () => {
        if (range.value === '0') priority.textContent = 'Priority: Low';
        else if (range.value === '1') priority.textContent = 'Priority: Medium';
        else if (range.value === '2') priority.textContent = 'Priority: High';
    });

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
    const title = document.createElement('h1');
    title.textContent = 'New Note';

    const nTitle = document.createElement('input');
    nTitle.setAttribute('type', 'text');
    nTitle.setAttribute('maxlength', '20');
    nTitle.classList.add('t');

    const nContent = document.createElement('input');
    nContent.setAttribute('type', 'text');
    nContent.setAttribute('maxlength', '256');
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