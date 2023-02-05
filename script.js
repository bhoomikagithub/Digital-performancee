var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

// document.querySelector(".myswiper").addEventListener("drag",function(){
//           console.log("thrhertd")
// })




//   function navpartanimation() {
//     const showAnim = gsap.from('#nav' , {
//         opacity:0,
//         y: -100,
//         paused: true,
//         duration: 0.5
//     });
//     ScrollTrigger.create({
//         start: "top top",
//         end: 99999,
//         onUpdate: (self) => {
//             self.direction === -1 ? showAnim.play() : showAnim.reverse()
//         }
//     });
// }

// navpartanimation();


var tl=gsap.timeline();
// var img = document.querySelector("image")
tl.
from("#i1",{
top:"35%",
duration:2,
opacity:".8",
// stagger:2,
ease:"Expo.easeInOut",
})
.to("#i2",{
    right:"25%",
    duration:2,
    opacity:"1",
    // stagger:4,
    ease:"Expo.easeInOut",
},
"-=2"
)
.to("#i3",{
    top:"58%",
    duration:2,
    opacity:"1",
    // stagger:4,
    ease:"Expo.easeInOut",
},
"-=2"
)

  

// document.querySelector("#page1 #i1");
gsap.to("#i1",{
scrollTrigger:{
  trigger:"#page2",
  start:"top 80%",
  end:"top 15%",
  scrub:.5,
},
y:"80",
ease:"power1.easeInOut"
})



gsap.from("#greentextdiv,#balckdiv h4,#blackdiv h1,#aboutusdiv",{
scrollTrigger:{
  trigger:"#page2 #blackdiv",
  start:"top 60%",
  // markers:true,
},
stagger:.5,
duration:2,
y:"150",
opacity:0,
ease:"Expo.easeInOut"
})



gsap.from("#leftleft #img1,#ri2,#img2, #leftright #ri1,#rightdiv h1,p",{
scrollTrigger:{
  trigger:"#page2 #whitediv",
  start:"top 60%",
  end:"20% 80%",
  // markers:true,
},
stagger:.2,
duration:2,
y:"200",
opacity:0,
ease:"Expo.easeInOut"
})

gsap.from("#info",{
scrollTrigger:{
  trigger:"#page2 #info",
  start:"top 100%",
  end:"20% 80%",
  // markers:true,
},
// stagger:.2,
duration:2,
y:"200",
opacity:0,
ease:"Expo.easeInOut"
})
gsap.from("#page3 h1, #logodiv",{
scrollTrigger:{
  trigger:"#page3",
  start:"top 80%",
  // end:"20% 80%",
  // markers:true,
},
stagger:.5,
duration:2,
y:"100",
opacity:0,
ease:"Expo.easeInOut"
})
gsap.from("#page4 .page4div",{
scrollTrigger:{
  trigger:"#page4",
  start:"top 80%",
  // end:"20% 80%",
  // markers:true,
},
stagger:.5,
duration:2,
y:"100",
opacity:0,
ease:"Expo.easeInOut"
})
gsap.from("#page4 #info4",{
scrollTrigger:{
  trigger:"#info4",
  start:"top 90%",
  // end:"20% 80%",
  // markers:true,
},
duration:2,
y:"100",
opacity:0,
ease:"Expo.easeInOut"
})
gsap.from("#page5",{
scrollTrigger:{
  trigger:"#page5",
  start:"top 90%",
  // end:"20% 80%",
  // markers:true,
},
duration:2,
y:"100",
opacity:0,
ease:"Expo.easeInOut"
})
gsap.from(" .fivediv, .fivediv img",{
scrollTrigger:{
  trigger:".fivediv",
  start:"top 70%",
  // end:"20% 80%",
},
stagger:.2,
duration:1,
y:"100",
opacity:0,
ease:"Expo.easeInOut"
})














