const screens = document.querySelectorAll(".screen");

function showScreen(id){
    screens.forEach(screen=>screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");

    },2500);

});

document.getElementById("startBtn").addEventListener("click",()=>{

    showScreen("password");

});

document.getElementById("unlockBtn").addEventListener("click",()=>{

    const pass=document.getElementById("passwordInput").value.trim().toLowerCase();

    if(pass==="cherry"){

        showScreen("letterIntro");

    }else{

        document.getElementById("errorText").innerText="Wrong password 🤍";

    }

});

document.getElementById("openLetterBtn").addEventListener("click",()=>{

    showScreen("letter");

});
const letter=`Hi Cherry 🤍

This is only a demo.

Later, we'll write the real letter together.

I want every word here to come from my heart.

Love,
Vikas ❤️`;

let i=0;

function typeLetter(){

const box=document.getElementById("typewriter");

if(!box)return;

box.innerHTML="";

i=0;

const timer=setInterval(()=>{

box.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},40);

}

document.getElementById("openLetterBtn").addEventListener("click",()=>{

setTimeout(typeLetter,300);

});
document.getElementById("memoryBtn").addEventListener("click", () => {
    showScreen("memory");
});
const memories = [
{
image:"images/IMG_20260704_133328_799.jpg",
title: "Our First Meet ❤️",
text: "Our first photo together."
},
{
image:"images/IMG_20260710_130013.png",
title: "The Photo Which Changed My Life 🩷",
text: "Our first day when we entered in relationship."
},
{
image:"images/IMG-20260607-WA0052_1783152248876.jpg",
title: "Cutest Photo Of All Time 🤍",
text: "I'm in love with this photo."
},
{
image: "images/IMG_20260710_130214.png",
title: "Our Second Meet With Your Best Friend 💗",
text: "This'll be my best memory."
},
{
image:"images/IMG-20260620-WA0006_1783152248627.jpg",
title: "My Angry Bird 💛",
text: "A cute photo, I watch and laugh every time."
},
{
image:"images/IMG_20260704_133301_105.jpg",
title: "This One Is Nearest To My Heart 💟",
text: "I drew my whole world in my diary."
}
];

let memoryIndex = 0;
function loadMemory() {
document.getElementById("memoryImage").src = memories[memoryIndex].image;
document.getElementById("memoryTitle").innerText = memories[memoryIndex].title;
document.getElementById("memoryText").innerText = memories[memoryIndex].text;
document.getElementById("currentMemory").innerText = memoryIndex + 1;
}

loadMemory();

document.getElementById("nextMemoryBtn").addEventListener("click", () => {

memoryIndex++;

if (memoryIndex >= memories.length) {
    showScreen("surprise");
    return;
}

loadMemory();

});
document.getElementById("replayBtn").addEventListener("click", () => {

memoryIndex = 0;
loadMemory();
showScreen("memory");

});
document.getElementById("promiseBtn").addEventListener("click", () => {
    showScreen("promise");
});

document.getElementById("backHomeBtn").addEventListener("click", () => {
    memoryIndex = 0;
    loadMemory();
    showScreen("letterIntro");
});