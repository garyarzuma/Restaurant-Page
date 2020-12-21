const loadMenuTab = (() => {
   const menuTabDiv = document.createElement('div');
   menuTabDiv.className = "menuTabContent";
   document.querySelector(".tabContentDiv").appendChild(menuTabDiv)

   const menuItem = (name, price, description) => {
      const menuDiv = document.createElement('div');
      menuDiv.className = "menuItem";
      document.querySelector(".menuTabContent").appendChild(menuDiv);
      menuDiv.innerHTML = name + " " +price+ '<br />'+description;

      return{name, price, description}
   }

   menuItem("Big Mac", 22, "Grade A5 Wagyu on lightly toasted brioche");
   menuItem("French Fries", 9, "Yukon Gold w/ course sea salt finish");
   menuItem("McChicken", 16, "Free Range ground chicken lightly breaded w/ aoili finish");
   menuItem("McNuggets", 18, "Hand breaded in panko and served w/ honey glaze");
   menuItem("Soda", 7, "Refreshing choice of Pepsi or Coca-Cola");
   menuItem("Water", 5, "Spring fresh water sourced from San Gabriel Mountains");

   
});

export default loadMenuTab;