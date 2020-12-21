const loadHomeTab = (() => {
   const homeTabDiv = document.createElement('div');
   homeTabDiv.className = "homeTabContent";
   document.querySelector(".tabContentDiv").appendChild(homeTabDiv)

   homeTabDiv.textContent = "McDonald's was founded on the principles that everyone needs recognition,"+ 
      " that everyone deserves to be valued as an individual and made to feel welcome," +
      " that everyone appreciates high quality at reasonable prices," +
      " and that no one wants to leave a restaurant feeling hungry after eating “nouveau” portions";
   
});

export default loadHomeTab;