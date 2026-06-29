/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/*=========================================
        AUTO IMAGE SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

// Change image every 4 seconds
setInterval(nextSlide,4000);


/*=========================================
        TOGETHER SINCE COUNTDOWN
=========================================*/

/*
Change the date below
Example:
2025-01-01
*/

const loveDate = new Date("2025-01-01T00:00:00");

function updateCountdown(){

    const now = new Date();

    const difference = now - loveDate;

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
    String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent =
    String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent =
    String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);


/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/
const scrollBtn = document.getElementById("scrollTop");

if(scrollBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            scrollBtn.style.display="block";

        }else{

            scrollBtn.style.display="none";

        }

    });

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/*=========================================
        HEADER EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background="rgba(255,255,255,.95)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

    else{

        header.style.background="rgba(255,255,255,.18)";
        header.style.boxShadow="none";

    }

});
/*=========================================
        SURPRISE GIFT
=========================================*/

/*=========================================
        SURPRISE GIFT
=========================================*/

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftBox && giftMessage) {

    giftBox.addEventListener("click", () => {

        giftMessage.classList.toggle("show");

        if (giftMessage.classList.contains("show")) {
            giftBox.innerHTML = "💖";
        } else {
            giftBox.innerHTML = "🎁";
        }

        giftBox.style.transform = "scale(1.15) rotate(15deg)";

        setTimeout(() => {
            giftBox.style.transform = "scale(1) rotate(0deg)";
        }, 400);

    });

}

if(giftBox){

    giftBox.addEventListener("click",()=>{

        giftMessage.classList.toggle("show");

        giftBox.style.transform="scale(1.15) rotate(15deg)";

        setTimeout(()=>{

            giftBox.style.transform="scale(1) rotate(0deg)";

        },400);

    });

}


/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const closeLightbox=document.querySelector(".close-lightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}


/*=========================================
        FLOATING HEARTS
=========================================*/

const heartsContainer=document.querySelector(".hearts");

if(heartsContainer){

    setInterval(createHeart,400);

}

function createHeart(){

    const heart=document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".video-card,.letter-card,.reason-card,.timeline-item,.gallery-item,.song-card,.dream-card,.contact-card"

);

function reveal(){

    const trigger=window.innerHeight*0.85;

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(60px)";

    item.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
        AUDIO PLAYER
=========================================*/

const audios=document.querySelectorAll("audio");

audios.forEach(audio=>{

    audio.addEventListener("play",()=>{

        audios.forEach(other=>{

            if(other!==audio){

                other.pause();

            }

        });

    });

});


/*=========================================
        HERO BUTTON EFFECT
=========================================*/

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("mouseenter",()=>{

heroBtn.style.transform="translateY(-6px) scale(1.08)";

});

heroBtn.addEventListener("mouseleave",()=>{

heroBtn.style.transform="translateY(0) scale(1)";

});

}


/*=========================================
        SMOOTH SECTION HIGHLIGHT
=========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log("❤️ Forever & Always Website Loaded Successfully ❤️");