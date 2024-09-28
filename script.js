
const background_img=document.getElementById("hero")
const logo=document.getElementById("logo")
const whole=document.getElementById("whole")
const left=document.getElementById("i");   background_img.classList.add("animation_background_img")
const z=document.getElementById("y");   background_img.classList.add("animation_background_img")


const main=document.getElementById("rag")


setTimeout(() => {
    background_img.classList.add("move-background-right");

}, 2000); 
setTimeout(() => {
    logo.classList.remove("img_rag");
    logo.classList.add("logo_move1");
     

}, 4000); 

setTimeout(() => {
    logo.classList.add("img_rag");

}, 3000); 
setTimeout(() => {
    logo.classList.add("img_rag");

}, 3000); 
setTimeout(() => {
    whole.classList.remove("hide");
    whole.classList.add("visible");
    
}, 5000); 
setTimeout(() => {
    left.classList.remove("hidden");
    left.classList.add("visibleo");
    
}, 6000); 


document.getElementById("click").addEventListener("click",(e)=>{
logo.classList.add("z")
z.classList.remove("z")
z.classList.add("last")
left.classList.remove("visibleo")
left.classList.add("corr")
main.classList.add("fix")
background_img.classList.remove("move-background-right");
background_img.classList.add("shrink")
})





