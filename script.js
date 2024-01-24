var tl = gsap.timeline();
// tl.to(".line1",{
//     width:"100%",
//     duration:.5,
// })
gsap.to(".carloader,.carloader video", {
  // scale:14,
  duration: 1,
  opacity: 0,
  display:"none",
  y: -10000,
  delay: 7,
});
// tl.from(".text h1", {
//   y: -100,
//   stagger: 0.1,
//   delay: 0.2,
//   duration: 0.7,
//   pin: true,
// });
// tl.to(".text h1", {
//   opacity: 0,
// });
// tl.to(
//   ".line1",
//   {
//     // width:"100%",
//     height: "100vh",
//     duration: 0.5,
//     top: 0,
//     stagger: 1,
//   },
//   "a"
// );
// tl.to(
//   ".line2",
//   {
//     // width:"100%",
//     height: "100vh",
//     duration: 0.5,
//     delay: 0.6,
//     stagger: 1,
//   },
//   "a"
// );
// tl.to(".loader", {
//   display: "none",
// });
// tl.from(".right,ul li a",{
//     y:-100,
//     duration:1,
//     stagger:1
// })
tl.to("nav", {
  opacity: 1,
});
tl.from(
  "nav,.left,.right li",
  {
    y: -100,
    duration: 0.7,
    stagger: 0.2,
  },
  "same"
);
// var loader=document.querySelector(".loader");
// loader.addEventListener("click",()=>{
//     gsap.to(loader,{
//         y:-1000,
//         duration:1.5,
//         opacity:0
//     })
// })
tl.from(
  ".pagetext span",
  {
    y: 300,
    duration: 1,
    stagger: 0.1,
    // transformOrigin:"bottom center",

    // transform:"perspective(1000px) rotateX(-60deg)"
  },
  "same"
);
tl.from(
  ".boxes",
  {
    opacity: 0,
    duration: 2,
  },
  "same"
);
tl.from(
  "#image1",
  {
    opacity: 0,
    x: -1000,
    duration: 2,
  },
  "same"
);
tl.from(
  "#image2",
  {
    opacity: 0,
    x: -1000,
    duration: 2,
  },
  "same"
);
tl.from(
  "#image3",
  {
    opacity: 0,
    x: 1000,
    duration: 2,
  },
  "same"
);
tl.from(
  "#image4",
  {
    opacity: 0,
    x: 1000,
    duration: 2,
  },
  "same"
);
gsap.from(".boxes .box", {
  y: 1000,
  duration: 1,
  stagger: 0.4,
  opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
  },
});
// Shery.mouseFollower(".cursor",{
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });
// Shery.textAnimate(".textjs" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 4,
//     y: 10,
//     // debug:true,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });
// Example usage of sheryjs effect
// Shery.mouseFollower();
gsap.to(".wraptext", {
  x: -1000,
  // duration:1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".wraptext",
    pin: true,
    scrub: 2,
  },
});
var elem = document.querySelectorAll(".elem");
var img = document.querySelector(".elem img");
elem.forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector(".elem img"), {
      opacity: 1,
      top: diff,
      left: dets.clientX,
    });
  });
});
var vi = document.querySelector(".backvideo");
// var goku=document.querySelector("#goku")
// var vegita=document.querySelector("#vegita")
// // var goku=document.querySelector("#goku")
// [goku,vegita].forEach(function(catell){
//     catell.addEventListener("mouseenter",function(){

//         // console.log("hello")

//     })

// })
function goku() {
  vi.src = "video1.mp4";
}
function vegita() {
  vi.src = "video2.mp4";
}
function gohan() {
  vi.src = "video3.mp4";
}
function gogeta() {
  vi.src = "video4.mp4";
}
//here spliting the h1 into span and then applying the effect
//frontend development ka 8th video
var clutter = "";
document
  .querySelector(".page6 h1")
  .textContent.split(" ")
  .forEach(function (dets) {
    clutter += `<span> ${dets} </span>`;
    document.querySelector(".page6>h1").innerHTML = clutter;
  });
gsap.to(".page6>h1>span", {
  scrollTrigger: {
    trigger: ".page6>h1>span",
    start: "60% 80%",
    end: "90% 10%",
    scroller: "body",
    scrub: 0.5,
    markers: true,
  },
  stagger: 0.2,
  color: "#fff",
});
Shery.imageEffect(".backimg", {
  // debug: true,
  style: 5,
  gooey: true,
  config: {
    a: { value: 1.6, range: [0, 30] },
    b: { value: 1, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.033003300330033 },
    ignoreShapeAspect: { value: true },
    shapePosition: {
      value: { x: 0.010752688172043001, y: -0.010752688172043001 },
    },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4.63, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 2 },
    noise_speed: { value: 0.46, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 72 } },
    discard_threshold: { value: 0.59, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.41, range: [0, 2] },
    noise_scale: { value: 0.0, range: [0, 100] },
  },
});
// var cars = ["Car1","Car2","Car3"];
//     var flag = 0;

var hero = document.querySelector(".hero");
//     hero.addEventListener("click",function(){
//       console.log(flag);

//       if(flag < cars.length){
//       document.getElementById("cars").innerHTML = cars[flag];
//       flag++;
//       }
//       else{
//         flag = 0;
//         document.getElementById("cars").innerHTML = cars[flag];
//       }
//     })

function leni() {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 650);
  });

  gsap.ticker.lagSmoothing(0);
}
leni();

Shery.imageEffect(".imgbox", {
  style: 3,
  // debug:true,
  gooey: true,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.47173399519061193 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 81 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
