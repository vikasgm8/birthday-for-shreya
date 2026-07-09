const loader=document.getElementById("loader");
const website=document.getElementById("mainWebsite");

window.onload=()=>{

setTimeout(()=>{

loader.style.display="none";
website.classList.remove("hidden");

},1800);

};

const pages={

story:document.getElementById("story"),
gallery:document.getElementById("gallery"),
letter:document.getElementById("letter"),
final:document.getElementById("final")

};

document.getElementById("startBtn").onclick=()=>{

document.querySelector(".hero").style.display="none";

pages.story.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

};

document.getElementById("continueBtn").onclick=()=>{

pages.story.style.display="none";

pages.gallery.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

};

document.getElementById("nextLetter").onclick=()=>{

pages.gallery.style.display="none";

pages.letter.classList.remove("hidden");

typeLetter();

window.scrollTo({
top:0,
behavior:"smooth"
});

};

document.getElementById("memoryBtn").onclick=()=>{

pages.letter.style.display="none";

pages.final.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

startTimer();

};
const message=`Happy Birthday, Shreya ❤️

Today is one of the most special days for me because it's the day the most beautiful person came into this world.

Thank you for every smile, every memory, every laugh, and every moment we've shared.

I know this website isn't as valuable as expensive gifts, but every line here was made with love.

I hope this little surprise makes you smile.

Happy Birthday once again.

I wish you endless happiness, success, good health, and countless beautiful memories.

May this year bring you everything your heart dreams of.

❤️ Always Yours,
Vikas`;

function typeLetter(){

const box=document.getElementById("letterText");

let i=0;

box.innerHTML="";

const typing=setInterval(()=>{

box.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);

}

},35);

}

function startTimer(){

const start=new Date("2025-01-01");

setInterval(()=>{

const now=new Date();

const diff=now-start;

const days=Math.floor(diff/86400000);

const hours=Math.floor((diff%86400000)/3600000);

const mins=Math.floor((diff%3600000)/60000);

const secs=Math.floor((diff%60000)/1000);

document.getElementById("timer").innerHTML=

days+" Days ❤️ "+hours+" Hours ❤️ "+mins+" Minutes ❤️ "+secs+" Seconds";

},1000);

}
document.querySelectorAll(".photo").forEach((photo,index)=>{

photo.addEventListener("click",()=>{

photo.style.transform="scale(1.12)";

setTimeout(()=>{

photo.style.transform="scale(1)";

},250);

});

});

window.addEventListener("scroll",()=>{

document.querySelectorAll("section").forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="all .8s ease";

});

console.log("Birthday website loaded successfully ❤️");
