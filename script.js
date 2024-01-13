let circle = document.querySelector(".circle");
let container = document.querySelector(".image-container");
let heading = document.querySelector("h1");
let body = document.body;

container.addEventListener("click",()=>{
    console.log(window.getComputedStyle(body).backgroundColor);
    if(window.getComputedStyle(body).backgroundColor=="rgb(255, 255, 255)"){
        body.style.backgroundColor="rgb(0, 0, 0)";
        heading.style.color="rgb(255, 255, 255)";
        circle.style.float="right";
    }
    else{
    body.style.backgroundColor="rgb(255, 255, 255)";
    heading.style.color="rgb(0, 0, 0)";
    circle.style.float="left";
}
})