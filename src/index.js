import pageLoad from './pageLoad';
import loadHomeTab from './homeTab';
import loadMenuTab from './menuTab';
import loadContactTab from './contactTab';

const index = (() => {
    let currentTab = "tab1Div";
    const tabContentDiv = document.querySelector(".tabContentDiv");
    loadHomeTab();

    const updateTab = ((e) => {
        const clickedTab = e.target.className;
        
        

        if (clickedTab !== currentTab){
            clearTabContent();
            switch(clickedTab){
                case "tab1Div": loadHomeTab();
                                currentTab = "tab1Div";
                                break;
                case "tab2Div": loadMenuTab();
                                currentTab = "tab2Div";
                                break;
                case "tab3Div": loadContactTab();
                                currentTab = "tab3Div";
                                break;
            }
        }    
    });

    const clearTabContent = ( () => {
        tabContentDiv.textContent = "";
    });

    document.querySelector(".tab1Div").addEventListener('click', updateTab);
    document.querySelector(".tab2Div").addEventListener('click', updateTab);
    document.querySelector(".tab3Div").addEventListener('click', updateTab);
})();