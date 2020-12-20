const loadContactTab = (() => {
   const contactTabDiv = document.createElement('div');
   contactTabDiv.className = "contactTabContent";
   document.querySelector(".tabContentDiv").appendChild(contactTabDiv)

   contactTabDiv.textContent = "Literally just go anywhere";
   
});

export default loadContactTab;