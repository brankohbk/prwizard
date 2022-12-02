//#region SELECTORS
const html = document.querySelector(":root");
const hat = document.querySelector(".🎩");
const magic = document.querySelector(".✨");
const form = document.querySelector("form");
//#endregion

//#region EVENT LISTENERS
[hat, magic].forEach(el => el.addEventListener("click", () => {
  changeColors(html);
}));

form.addEventListener("change",(e)=>{
  if(e.target.name){
    document.getElementById("out-type").innerText = "- " + e.target.value;
  }else{
    const outputId = e.target.id.replace("in-","out-");
    document.getElementById(outputId).innerText = e.target.value;
  }
});
//#endregion

//#region AUX FUNCTIONS
function changeColors(htmlElement) {  
  const randomInt= Math.floor(Math.random() * (360 - 1) + 1);
  const color1 = `--color-1: hsl(${randomInt}, 94%, 51%)`;
  const color2 = `--color-2: hsl(${randomInt + 77}, 73%, 50%)`;
  htmlElement.setAttribute("style",`${color1};${color2};`);
}
//#endregion