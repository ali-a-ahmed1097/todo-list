import './style.css';
import genMain from './gen-main.js';
import { Note, Todo } from './content.js';

const data = (() => {
    let _projects = [];
    let _notes = [];

    function addProject(projectName) {
        _projects.push(projectName);
        displayController.displayProjects();
    }

    function getProjects() { return _projects; }

    function addNote(noteTitle, noteContent) {
        const newNote = new Note(noteTitle, noteContent);
        _notes.push(newNote);
        console.log(_notes);
    }

    function getNotes() { return _notes; }

    return {
        addProject,
        getProjects,
        addNote,
        getNotes,
    }
})();

export const displayController = (() => {
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
    }

    function displayTodos(pName) {
        const contentBox = document.getElementById('content');
        contentBox.textContent = '';
        contentBox.classList = '';
        contentBox.classList.add('todo-content');

        const contentTitle = document.createElement('div');
        contentTitle.textContent = pName;

        contentBox.appendChild(contentTitle);
    }

    function displayNotes() {
        const contentBox = document.getElementById('content');
        contentBox.textContent = '';
        contentBox.classList = '';
        contentBox.classList.add('notes-content');
    }

    return {
        displayProjects,
        displayTodos,
        displayNotes,
    }
})();

export function activateProjectBtn(btn) {
    btn.addEventListener('click', () => {
        const pName = document.querySelector('input').value;
        if (pName !== '' && pName !== 'Home' && pName !== 'Today' && pName !== 'Week' && pName !== 'Notes' && pName != 'Projects') {
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
        document.querySelector('.overlay').remove();
    });
}

document.addEventListener('DOMContentLoaded', genMain);