(()=>{"use strict";(()=>{const e=document.createElement("div");e.className="heading";const t=document.createElement("h1");t.textContent="McDonald's";const n=document.createElement("div");n.className="tabDiv";const a=document.createElement("div");a.className="tab1Div";const o=document.createElement("div");o.className="tab2Div";const c=document.createElement("div");c.className="tab3Div";const i=document.createElement("div");i.className="tabContentDiv",document.querySelector(".content").appendChild(e),document.querySelector(".heading").appendChild(t),document.querySelector(".content").appendChild(n),document.querySelector(".tabDiv").appendChild(a),document.querySelector(".tabDiv").appendChild(o),document.querySelector(".tabDiv").appendChild(c),document.querySelector(".content").appendChild(i),a.textContent="Home",o.textContent="Menu",c.textContent="Contact"})();const e=()=>{const e=document.createElement("div");e.className="homeTabContent",document.querySelector(".tabContentDiv").appendChild(e),e.textContent="McDonald's was founded on the principles that everyone needs recognition, that everyone deserves to be valued as an individual and made to feel welcome, that everyone appreciates high quality at reasonable prices, and that no one wants to leave a restaurant feeling hungry after eating “nouveau” portions"};(()=>{let t="tab1Div";const n=document.querySelector(".tabContentDiv");e();const a=n=>{const a=n.target.className;if(a!==t)switch(o(),a){case"tab1Div":e(),t="tab1Div";break;case"tab2Div":(()=>{const e=document.createElement("div");e.className="menuTabContent",document.querySelector(".tabContentDiv").appendChild(e);const t=(e,t,n)=>{const a=document.createElement("div");return a.className="menuItem",document.querySelector(".menuTabContent").appendChild(a),a.innerHTML=e+" "+t+"<br />"+n,{name:e,price:t,description:n}};t("Big Mac",22,"Grade A5 Wagyu on lightly toasted brioche"),t("French Fries",9,"Yukon Gold w/ course sea salt finish"),t("McChicken",16,"Free Range ground chicken lightly breaded w/ aoili finish"),t("McNuggets",18,"Hand breaded in panko and served w/ honey glaze"),t("Soda",7,"Refreshing choice of Pepsi or Coca-Cola"),t("Water",5,"Spring fresh water sourced from San Gabriel Mountains")})(),t="tab2Div";break;case"tab3Div":(()=>{const e=document.createElement("div");e.className="contactTabContent",document.querySelector(".tabContentDiv").appendChild(e),e.textContent="Literally everywhere"})(),t="tab3Div"}},o=()=>{n.textContent=""};document.querySelector(".tab1Div").addEventListener("click",a),document.querySelector(".tab2Div").addEventListener("click",a),document.querySelector(".tab3Div").addEventListener("click",a)})()})();