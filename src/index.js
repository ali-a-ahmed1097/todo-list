import './style.css';
import genMain from './gen-main.js';
import { enableBtn } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
    genMain();

    // document.querySelector('.sidebar-button').addEventListener('click', enableBtn);
});