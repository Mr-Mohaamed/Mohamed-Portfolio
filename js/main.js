$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
    $("h1").css("color", "#222222");
  }, 2000);
});

$(".parts .part").on("mouseenter", function () {
  $(".parts .part").removeClass("grow");
  $(this).addClass("grow");
});
$(".parts .part").on("mouseleave", function () {
  $(".parts .part").removeClass("grow");
  $(".part:first").addClass("grow");
});

// Projects
let projectListItems = document.querySelectorAll(
  ".projects .flex-boxs .projects-list ul .project"
);
let projectBackground = document.querySelector(".project-background");
let projectViewBtn = document.querySelector(".view-project");
console.log(projectListItems);
console.log(projectBackground);
projectListItems.forEach((e) => {
  let timer;
  e.addEventListener("mouseover", () => {
    console.log(projectBackground.src);
    console.log(e.dataset.project);
    projectBackground.style.opacity = 0;
    timer = setTimeout(() => {
      projectBackground.src = e.dataset.project;
      projectViewBtn.href = e.dataset.link;
      projectBackground.style.opacity = 1;
    }, 300);
  });
  e.addEventListener("mouseleave", () => {
    clearTimeout(timer);
    console.log("clean timeout");
  });
});

// .scrolling

let html = document.documentElement;
console.log(html);
let secondPage = document.querySelector(".second");
let thirdPage = document.querySelector(".third");
let fourthPage = document.querySelector(".fourth");
window.addEventListener("scroll", scrollProp);
window.addEventListener("resize", scrollProp);
let thirdPageOffsetTop = thirdPage.offsetTop;
let fourthPageOffsetTop = fourthPage.offsetTop;
let clientHeight = html.clientHeight;

// Functions
function scrollProp() {
  let scrollClient = html.scrollTop;
  let scrollPerc = (scrollClient / clientHeight) * 100;
  html.style.setProperty("--scroll", Math.min(scrollPerc, 100));
  // **********
  let secondPageOffsetTop = secondPage.offsetTop;
  let secondPageScrollPerc = (scrollClient / secondPageOffsetTop) * 100;
  html.style.setProperty("--scroll-two", Math.min(secondPageScrollPerc, 100));
  // **********
  let thirdHeight = thirdPage.offsetHeight;
  let topThird = thirdPageOffsetTop - thirdHeight;
  let scrollAfterThird = scrollClient - topThird;
  let thirdPageScrollPerc = (scrollAfterThird / thirdHeight) * 100;
  html.style.setProperty("--scroll-three", Math.min(thirdPageScrollPerc, 100));
  // **********
  let fourthHeight = fourthPage.offsetHeight;
  let topfourth = fourthPageOffsetTop - fourthHeight;
  let scrollAfterfourth = scrollClient - topfourth;
  let fourthPageScrollPerc = (scrollAfterfourth / fourthHeight) * 100;
  html.style.setProperty("--scroll-four", Math.min(fourthPageScrollPerc, 100));

  // **********
}
// Nav Href Scroll
var $root = $("html, body");

$('a[href^="#"]').click(function () {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );

  return false;
});
