const content1 = document.getElementById("content");
const img1 = document.getElementById("showcase");
const height1 = img1.clientHeight;

const content2 = document.getElementById("content-two");
const img2 = document.getElementById("showcase-one");
const height2 = img2.clientHeight;

content1.style.height = height1 + "px";
content2.style.height = height2 + "px";

console.log(height2);

const closePopUp = () => {
  const discountPopUp = document.getElementById("discount");
  discountPopUp.style.display = "none";
};

const images = document.querySelectorAll(".logo");
const slider = document.getElementById("slider");
const items = 6;
let current = 0;

for (let i = 0; i < items; i++) {
  slider.insertAdjacentHTML("beforeend", images[i].outerHTML);
}

const next = () => {
  document.documentElement.style.setProperty('--slide-direction', 'slide-next');
  slider.appendChild(slider.firstChild)
};

const prev = () => {
  document.documentElement.style.setProperty('--slide-direction', 'slide-prev');
  slider.insertBefore(slider.lastChild, slider.firstChild);
}
