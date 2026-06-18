javascript:(function(){
 const styleChange = document.createElement('style');
 const randomBackgroundRGB = () => {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
 };

 const randomTextRGB = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   let red = Math.floor(Math.random()*256);
   let green = Math.floor(Math.random()*256);
   let blue = Math.floor(Math.random()*256);
   i.style.color = `rgb(${red}, ${green}, ${blue})`;
  });
 };

 const forceBold = () => {
  styleChange.textContent= `*{font-weight:bold}`;
  document.head.appendChild(styleChange);
 };

 const forceItalics = () => {
  styleChange.textContent= `*{font-style:italic}`;
  document.head.appendChild(styleChange);
 };

 const forceThin = () => {
  styleChange.textContent= `*{font-weight:1}`;
  document.head.appendChild(styleChange);
 };

 const randomRotate = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   i.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`;
  });
 };

 const randomSkew = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   i.style.transform = `skewY(${Math.floor(Math.random()*90-45)}deg) skewX(${Math.floor(Math.random()*90-45)}deg)`;
  });
 };

 const randomAlign = () => {
  let rng = Math.floor(Math.random()*4+1);
  document.querySelectorAll(`*`).forEach(i =>{
   if (rng === 1){
    i.style.textAlign = `left`;
   }else if (rng === 2){
    i.style.textAlign = `right`;
   }else if (rng === 3){
    i.style.textAlign = `center`;
   }else if (rng === 4){
    i.style.textAlign = `justify`;
   };
  });
 };

 const noPaddingNoMargin = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   i.style.paddingLeft = `0px`;
   i.style.paddingRight = `0px`;
   i.style.paddingTop = `0px`;
   i.style.paddingBottom = `0px`;
   i.style.marginLeft = `0px`;
   i.style.marginRight = `0px`;
   i.style.marginTop = `0px`;
   i.style.marginBottom = `0px`;
  });
 };

 const empty = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   i.remove();
  });
 };

 const sans = () => {
  styleChange.textContent= `*{font-family:Comic Sans}`;
  document.head.appendChild(styleChange);
 };

 const randomSize = () => {
  document.querySelectorAll(`*`).forEach(i =>{
   i.style.fontSize = `${Math.floor(Math.random()*50)}px`;
  });
 };

 const randomOpacity = () => {
  document.querySelectorAll(`body *`).forEach(i =>{
   i.style.opacity = `${(Math.floor(Math.random()*75+25))/100}`;
  });
 };

 const noGlasses = () => {
  document.body.style.filter = `blur(6px)`;
 };

 const actions = [
  () => {randomBackgroundRGB();},
  () => {randomTextRGB();},
  () => {forceBold();},
  () => {forceItalics();},
  () => {forceThin();},
  () => {randomRotate();},
  () => {randomSkew();},
  () => {randomAlign();},
  () => {noPaddingNoMargin();},
  () => {empty();},
  () => {sans();},
  () => {randomSize();},
  () => {randomOpacity();},
  () => {noGlasses();},
 ];

 let num = Math.floor(Math.random()*14);
  
 actions[num]();

})();