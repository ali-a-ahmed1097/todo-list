import './style.css';
import genMain from './gen-main.js';

const data = (() => {
    let _projects = [];

    function addProject(projectName) {
        _projects.push(projectName);
        displayController.displayProjects();
    }

    function getProjects() {
        return _projects;
    }

    return {
        addProject,
        getProjects,
    }
})();

const displayController = (() => {
    function displayProjects() {
        const projectsDiv = document.getElementById('projects');
        const projects = data.getProjects();
        projectsDiv.textContent = '';
        projects.forEach((project, index) => {
            const newDiv = document.createElement('div');
            newDiv.textContent = project;
            newDiv.id = index;
            projectsDiv.appendChild(newDiv);
        });

        document.getElementById('Projects').querySelector('.notif').textContent = projects.length;
    }

    return {
        displayProjects,
    }
})();

document.addEventListener('DOMContentLoaded', genMain);

export function activateProjectBtn(btn) {
    btn.addEventListener('click', () => {
        const pName = document.querySelector('input').value;
        if (pName !== '') {
            data.addProject(pName);
            document.querySelector('.overlay').remove();
        }
    });
}