const navTabs = document.querySelectorAll('.nav-tab');
const pagePanels = document.querySelectorAll('.page-panel');

//Handles multi-page tab switching
navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); //Stop page jumps
        
        const targetPageId = tab.getAttribute('data-target');

        //Removes active state from old tabs
        navTabs.forEach(t => t.classList.remove('active'));
        //Hides all currently open panels
        pagePanels.forEach(p => p.classList.remove('active'));

        //Illuminates selected tab and panel
        tab.classList.add('active');
        const activePanel = document.getElementById(targetPageId);
        
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});