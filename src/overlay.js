import { activateProjectBtn } from ".";

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
    console.log('note');
}