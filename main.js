(()=>{"use strict";(()=>{const e=document.createElement("div");e.className="heading";const t=document.createElement("h1");t.textContent="McDonald's";const n=document.createElement("div");n.className="tabDiv";const a=document.createElement("div");a.className="tab1Div";const c=document.createElement("div");c.className="tab2Div";const o=document.createElement("div");o.className="tab3Div";const d=document.createElement("div");d.className="tabContentDiv",document.querySelector(".content").appendChild(e),document.querySelector(".heading").appendChild(t),document.querySelector(".content").appendChild(n),document.querySelector(".tabDiv").appendChild(a),document.querySelector(".tabDiv").appendChild(c),document.querySelector(".tabDiv").appendChild(o),document.querySelector(".content").appendChild(d),a.textContent="Home",c.textContent="Menu",o.textContent="Contact"})();const e=()=>{const e=document.createElement("div");e.className="homeTabContent",document.querySelector(".tabContentDiv").appendChild(e),e.textContent="McDonald's was founded on the principles that everyone needs recognition,that everyone deserves to be valued as an individual and made to feel welcome,that everyone appreciates high quality at reasonable prices,and that no one wants to leave a restaurant feeling hungry after eating “nouveau” portions"};(()=>{let t="tab1Div";const n=document.querySelector(".tabContentDiv");e();const a=n=>{const a=n.target.className;if(c(),a!==t)switch(a){case"tab1Div":e(),t="tab1Div";break;case"tab2Div":(()=>{const e=document.createElement("div");e.className="menuTabContent",document.querySelector(".tabContentDiv").appendChild(e),e.textContent="Big Mac $5"})(),t="tab2Div";break;case"tab3Div":(()=>{const e=document.createElement("div");e.className="contactTabContent",document.querySelector(".tabContentDiv").appendChild(e),e.textContent="Literally just go anywhere"})(),t="tab3Div"}},c=()=>{n.textContent=""};document.querySelector(".tab1Div").addEventListener("click",a),document.querySelector(".tab2Div").addEventListener("click",a),document.querySelector(".tab3Div").addEventListener("click",a)})()})();