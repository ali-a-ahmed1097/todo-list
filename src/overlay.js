import { activateNoteBtn, activateProjectBtn } from ".";

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
    console.log('todo');
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