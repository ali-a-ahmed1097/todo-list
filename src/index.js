import './style.css';
import genMain from './gen-main.js';

const data = (() => {
    let _projects = ['Home', 'Today', 'Week'];

    function addProject(projectName) {
        const numberOfProjects = document.getElementById('Projects').querySelector('.notif');
        _projects.push(projectName);
        numberOfProjects.textContent = (numberOfProjects.textContent - 0) + 1;
    }

    function getProjects() {
        return _projects;
    }

    return {
        addProject,
        getProjects,
    }
})();

document.addEventListener('DOMContentLoaded', genMain);

export function activateProjectBtn(btn) {
    btn.addEventListener('click', () => {
        const pName = document.querySelector('input').value;
        if (pName !== '') {
            data.addProject(pName);
            console.log(data.getProjects());
            document.querySelector('.overlay').remove();
        }
        
    });
}