const menuButton=document.getElementById("menu");
const nav=document.querySelector(".site-header nav");
menuButton.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
