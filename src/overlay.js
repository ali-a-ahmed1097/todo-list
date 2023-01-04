function createBlurOverlay() {
    const blurred = document.createElement('div');
    blurred.classList.add('overlay');
    blurred.addEventListener('click', () => blurred.remove());

    document.querySelector('body').appendChild(blurred);
};

export function createTodoOverlay() {
    createBlurOverlay();
    console.log('todo');
}

export function createProjectOverlay() {
    createBlurOverlay();
    console.log('project');
}

export function createNoteOverlay() {
    createBlurOverlay();
    console.log('note');
}