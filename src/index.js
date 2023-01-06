import './style.css';
import genMain from './gen-main.js';
import { Note, Todo } from './content.js';
import { getCurrentDate } from './overlay.js';

const data = (() => {
    let _projects = [];
    let _notes = [];
    let _todos = [];

    function addProject(projectName) {
        _projects.push(projectName);
        displayController.displayProjects();
    };

    function getProjects() { return _projects; };

    function addNote(noteTitle, noteContent) {
        const newNote = new Note(noteTitle, noteContent);
        _notes.push(newNote);
    };

    function getNotes() { return _notes; };

    function addTodo(title, desc, priority, date, project) {
        _todos.push(new Todo(title, desc, priority, date, project));
        displayController.displayTodos(project);
    };

    function getTodos(project) { 
        let todos = [];
        if (project === 'Home') {
            todos = _todos;
        } else if (project === 'Today') {
            _todos.forEach(todo => { if (todo.getDate() === getCurrentDate()) todos.push(todo); });
        } else if (project === 'Month') {
            _todos.forEach(todo => { if (todo.getDate()[5] === getCurrentDate()[5] && todo.getDate()[6] === getCurrentDate()[6]) todos.push(todo); });
        } else {
            _todos.forEach(todo => { if (todo.getProjectName() === project) todos.push(todo); });
        }

        return todos;
    };

    return {
        addProject,
        getProjects,
        addNote,
        getNotes,
        addTodo,
        getTodos,
    };
})();

export const displayController = (() => {

    function _todoFormat(todo) {
        const boxDiv = document.createElement('div');
        const todoTitle = document.createElement('div');
        todoTitle.textContent = todo.getTitle();

        const todoDate = document.createElement('div');
        todoDate.textContent = todo.getDate();

        boxDiv.appendChild(todoTitle);
        boxDiv.appendChild(todoDate);

        return boxDiv;
    }

    function displayProjects() {
        const projectsDiv = document.getElementById('projects');
        const projects = data.getProjects();
        projectsDiv.textContent = '';
        projects.forEach((project, index) => {
            const newDiv = document.createElement('div');
            newDiv.textContent = project;
            newDiv.id = index;
            newDiv.addEventListener('click', () => this.displayTodos(project));
            projectsDiv.appendChild(newDiv);
        });

        document.getElementById('Projects').querySelector('.notif').textContent = projects.length;
    };

    function displayTodos(pName) {
        const contentBox = document.getElementById('content');
        contentBox.textContent = '';
        contentBox.classList = '';
        contentBox.classList.add('todo-content');

        const contentTitle = document.createElement('div');
        contentTitle.textContent = pName;

        contentBox.appendChild(contentTitle);

        data.getTodos(pName).forEach(todo => contentBox.appendChild(_todoFormat(todo)));
    };

    function displayNotes() {
        const contentBox = document.getElementById('content');
        contentBox.textContent = '';
        contentBox.classList = '';
        contentBox.classList.add('notes-content');

        const noteArray = data.getNotes();
        noteArray.forEach(note => {
            const noteDiv = document.createElement('div');
            const noteTitle = document.createElement('h2');
            const noteContent = document.createElement('p');

            noteDiv.classList.add('note');

            noteTitle.textContent = note.getTitle();
            noteContent.textContent = note.getNote();

            noteDiv.appendChild(noteTitle);
            noteDiv.appendChild(noteContent);
            contentBox.appendChild(noteDiv);
        })
    };

    return {
        displayProjects,
        displayTodos,
        displayNotes,
    };
})();

export function activateProjectBtn(btn) {
    btn.addEventListener('click', () => {
        const pName = document.querySelector('input').value;
        if (pName !== '' && pName !== 'Home' && pName !== 'Today' && pName !== 'Month' && pName !== 'Notes' && pName != 'Projects') {
            data.addProject(pName);
            document.querySelector('.overlay').remove();
        }
        else {
            console.log('Invalid project name!');
        }
    });
}

export function activateNoteBtn(btn) {
    btn.addEventListener('click', () => {
        const noteTitle = document.querySelector('.t').value;
        const noteContent = document.querySelector('.c').value;
        data.addNote(noteTitle, noteContent);
        displayController.displayNotes();
        document.querySelector('.overlay').remove();
    });
}

export function activateTodoButton(btn) {
    btn.addEventListener('click', () => {
        const todoName = document.querySelector('.n').value;
        const todoDesc = document.querySelector('.d').value;
        const todoDate = document.querySelector('.da').value;
        const todoPriority = document.querySelector('.r').value;
        let project = document.getElementById('content').querySelector('div');

        if (project === null || project.classList.contains('note') || project.textContent === 'Today' || project.textContent === 'Month')
            project = 'Home';
        else project = project.textContent;
        
        if (todoName !== '') {
            data.addTodo(todoName, todoDesc, todoPriority, todoDate, project);
            document.querySelector('.overlay').remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', genMain);