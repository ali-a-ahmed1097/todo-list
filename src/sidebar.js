
function createNewTab(divName, notif) {
    const newDiv = document.createElement('div');
    newDiv.id = divName;
    
    const newDivName = document.createElement('div');
    newDivName.style = 'font-size: 25px;';
    newDivName.textContent = divName;

    newDiv.appendChild(newDivName);

    if (notif) {
        const newNotif = document.createElement('div');
        newNotif.classList.add('notif');
        newNotif.textContent = '0';
        newDiv.appendChild(newNotif);
    }

    return newDiv;
}

export default function generic(sidebar) {
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');

    sidebarContent.appendChild(createNewTab('Home', true));
    sidebarContent.appendChild(createNewTab('Today', true));
    sidebarContent.appendChild(createNewTab('Week', true));
    sidebarContent.appendChild(createNewTab('Projects', true));
    sidebarContent.appendChild(createNewTab('Notes', false));

    sidebar.appendChild(sidebarContent);


    const newBtn = document.createElement('button');
    newBtn.classList.add('sidebar-button');
    newBtn.textContent = '+';

    sidebar.appendChild(newBtn);
}