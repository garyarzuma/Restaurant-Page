const pageLoad = (() => {
   const headingDiv = document.createElement('div');
   headingDiv.className = "heading";

   const h1Div = document.createElement('h1');
   h1Div.textContent = "McDonald's";

   const tabDiv = document.createElement('div');
   tabDiv.className = "tabDiv";

   const tab1Div = document.createElement('div');
   tab1Div.className = "tab1Div";

   const tab2Div = document.createElement('div');
   tab2Div.className = "tab2Div";

   const tab3Div = document.createElement('div');
   tab3Div.className = "tab3Div";

   const tabContentDiv = document.createElement('div');
   tabContentDiv.className = "tabContentDiv";

   document.querySelector(".content").appendChild(headingDiv)
   document.querySelector('.heading').appendChild(h1Div)
   document.querySelector('.content').appendChild(tabDiv)
   document.querySelector('.tabDiv').appendChild(tab1Div)
   document.querySelector('.tabDiv').appendChild(tab2Div)
   document.querySelector('.tabDiv').appendChild(tab3Div)
   document.querySelector('.content').appendChild(tabContentDiv)

   tab1Div.textContent = "Home";
   tab2Div.textContent = "Menu";
   tab3Div.textContent = "Contact";

})();

export default pageLoad;