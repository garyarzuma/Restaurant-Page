const loadMenuTab = (() => {
   const menuTabDiv = document.createElement('div');
   menuTabDiv.className = "menuTabContent";
   document.querySelector(".tabContentDiv").appendChild(menuTabDiv)

   menuTabDiv.textContent = "Big Mac $5";
});

export default loadMenuTab;