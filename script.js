// Replace with your WhatsApp number, country code included, digits only. Example India: 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
if (nav && toggle) nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
}));
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const image = lightbox.querySelector("img");
  document.querySelectorAll(".gallery-card").forEach(card => card.addEventListener("click", () => {
    image.src = card.dataset.full; image.alt = card.querySelector("img").alt;
    lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false");
  }));
  function closeBox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");image.src="";}
  lightbox.querySelector("button").addEventListener("click",closeBox);
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeBox();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBox();});
}
const form = document.getElementById("enquiry");
if(form) form.addEventListener("submit",e=>{
  e.preventDefault();
  if(WHATSAPP_NUMBER.includes("X")){alert("Please add your WhatsApp number in script.js first (WHATSAPP_NUMBER).");return;}
  const d=new FormData(form);
  const message=["Hello Vizhigal Films! I'd like to enquire about photography.",`Name: ${d.get("name")}`,`Event: ${d.get("event")}`,`Date: ${d.get("date")||"Not decided"}`,`Details: ${d.get("message")||"Not provided"}`].join("\\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
