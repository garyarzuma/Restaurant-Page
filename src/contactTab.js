const loadContactTab = (() => {
   const contactTabDiv = document.createElement('div');
   contactTabDiv.className = "contactTabContent";
   document.querySelector(".tabContentDiv").appendChild(contactTabDiv)

   contactTabDiv.textContent = "Literally everywhere";
   
});

export default loadContactTab;