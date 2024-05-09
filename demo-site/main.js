//Mobile menu codes
function menuopen(){
    setTimeout(() => {
        document.getElementById("menuclose").style.visibility = "visible";
    }, 500);
    document.getElementById("mobile-nav-menu").style.width = "280px";

    document.getElementById("mobile-nav").style.visibility = "visible";
    document.getElementById("menuopen").style.visibility = "hidden";
}

function menuclose(){
    setTimeout(() => {
        document.getElementById("menuopen").style.visibility = "visible";
        document.getElementById("mobile-nav").style.visibility = "hidden";
    }, 500);
    document.getElementById("mobile-nav-menu").style.width = "0px";
    document.getElementById("menuclose").style.visibility = "hidden";
}

//Hide navbar on scroll codes
window.onscroll = function() {
  if (window.matchMedia("(min-width: 1200px)").matches) {
    scrollFunction();
  }
};

function scrollFunction() {
  $(".desktop-nav").hide();
  $(".desktop-nav-center").hide();
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $(".desktop-nav").hide();
    $(".desktop-nav-center").show();
  } else { 
    $(".desktop-nav-center").hide();
    $(".desktop-nav").show();
  }
} 

//Navs icon active codes
$(document).ready(function() {
    $(".menu li #ds-element-sub").hide();
    $(".desktop-nav-center").hide();
    $(".menu #pages #custom-element-sub").hide();
    $(".mobile-menu li #element-sub").hide();
    
    $(".mobile-menu li").click(function() {
        $(this).find(".fa-chevron-down").toggleClass("rtoate180");
        $("li a").removeClass("activemobile");
        $("li i").removeClass("activemobile");  
        $(this).find("a").addClass("activemobile");
        $(this).find("i").addClass("activemobile");
        const clickedLi = $(this);
        $("li a").removeClass("activemobile");
        clickedLi.find("a:first-child, i:first-child").addClass("activemobile");
        if (clickedLi.find("#element-sub").is(":visible")) {
            clickedLi.find("#element-sub").hide();
        } else {
            $("li #element-sub").hide();
            clickedLi.find("#element-sub").show();
        }
    });

    $(".menu li").hover(function() {
        $(this).find("#ds-element-sub").fadeIn(600);
        $(this).find("a:first").addClass("active");
        $(this).find("i:first").addClass("activeforicon");
      }, function() {
        $(this).find("#ds-element-sub").delay(800).fadeOut(300);
        $(this).find("a").removeClass("active");
        $(this).find("i").removeClass("activeforicon");
    });

    $(".menu li #custom-element-sub").hover(function() {
        $(this).stop(true, true).fadeIn(0);
    }, function() {
    }); 

    $(".menu #pages").hover(function() {
        $(this).find("#custom-element-sub").fadeIn(600);
        $(this).find("a:first").addClass("active");
        $(this).find("i:first").addClass("activeforicon");
      }, function() {
        $(this).find("#custom-element-sub").delay(800).fadeOut(300);
        $(this).find("a").removeClass("active");
        $(this).find("i").removeClass("activeforicon");
    });

    $(".menu #pages #custom-element-sub").hover(function() {
        $(this).stop(true, true).fadeIn(0);
    }, function() {
    });
    
    $(".menu-ev").hover(function(){
      $(this).find(".booknowbtn").addClass("btnanim");
      $(this).find(".learnmorebtn").addClass("btnanim");
    }, function(){
      $(this).find(".booknowbtn").removeClass("btnanim");
      $(this).find(".learnmorebtn").removeClass("btnanim");
    })
    $(".buyut").hover(function(){
      $(this).find(".ico").addClass("ianim");
      $(this).addClass("ianim");
    }, function(){
      $(this).find(".ico").removeClass("ianim");
      $(this).removeClass("ianim");
    })

  
});


//Swiper codes
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    
    el: ".swiper-pagination",
  },
});

//Scroll animation codes
const anim_elements = document.querySelectorAll(".centerer, .centerer-2, .centerer-3");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("animate");
    }else{
      entry.target.classList.remove("animate");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < anim_elements.length; i++){
  const el = anim_elements[i];
  observer.observe(el);
}

const element = document.querySelectorAll(".texts h2, .texts p, .learnmorebutton");
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("about-h2-anim");
      entry.target.style.opacity = "1";
    }else{
      entry.target.classList.remove("about-h2-anim");
      entry.target.style.opacity = "0";
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element.length; i++){
  const el2 = element[i];
  observer2.observe(el2);
}

const element2 = document.querySelectorAll(".about-image");
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("about-img-anim");
      entry.target.style.opacity = "1";
    }else{
      entry.target.classList.remove("about-img-anim");
      entry.target.style.opacity = "0";
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element2.length; i++){
  const el3 = element2[i];
  observer3.observe(el3);
}

const element3 = document.querySelectorAll(".div-2");
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("pg-div2-anim");
    }else{
      entry.target.classList.remove("pg-div2-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element3.length; i++){
  const el4 = element3[i];
  observer4.observe(el4);
}

const element4 = document.querySelectorAll(".div-1");
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("pg-div1-anim");
    }else{
      entry.target.classList.remove("pg-div1-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element4.length; i++){
  const el5 = element4[i];
  observer5.observe(el5);
}

const element5 = document.querySelectorAll(".div-3");
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("pg-div3-anim");
    }else{
      entry.target.classList.remove("pg-div3-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element5.length; i++){
  const el6 = element5[i];
  observer6.observe(el6);
}

const element6 = document.querySelectorAll(".pg-header, .pg-desc, .pg-btn");
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("pg-header-anim");
    }else{
      entry.target.classList.remove("pg-header-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element6.length; i++){
  const el7 = element6[i];
  observer7.observe(el7);
}

const element7 = document.querySelectorAll(".ft-header, .ft-desc, .ic-ft-1-left, .ic-ft-1-right, .ic-ft-2-left, .ic-ft-2-right");
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("ft-anim");
    }else{
      entry.target.classList.remove("ft-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element7.length; i++){
  const el8 = element7[i];
  observer8.observe(el8);
}

const element8 = document.querySelectorAll(".right-md");
const observer9 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("ft-img-anim");
    }else{
      entry.target.classList.remove("ft-img-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element8.length; i++){
  const el9 = element8[i];
  observer9.observe(el9);
}

const element9 = document.querySelectorAll(".ev-header");
const observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("ev-hd-anim");
    }else{
      entry.target.classList.remove("ev-hd-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element9.length; i++){
  const el10 = element9[i];
  observer10.observe(el10);
}


const element10 = document.querySelectorAll(".f-right, .s-right, .f-left, .s-left");
const observer11 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("fr-anim");
    }else{
      entry.target.classList.remove("fr-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element10.length; i++){
  const el11 = element10[i];
  observer11.observe(el11);
}
const element11 = document.querySelectorAll(".ev-btn");
const observer12 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("ev-btn-anim");
    }else{
      entry.target.classList.remove("ev-btn-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element11.length; i++){
  const el12 = element11[i];
  observer12.observe(el12);
}

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  on: {
    resize: function() {
      if (window.innerWidth < 768) {
        this.params.slidesPerView = 1;
      } else {
        this.params.slidesPerView = 2;
      }
      this.update();
    }
  }
});

const element12 = document.querySelectorAll(".mothers, .painting, .teacherour, .creativity");
const observer13 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("n-anim");
    }else{
      entry.target.classList.remove("n-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element12.length; i++){
  const el13 = element12[i];
  observer13.observe(el13);
}


var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  autoplay: {
    delay: 5000,
  },
  on: {
    resize: function() {
      if (window.innerWidth < 768) {
        this.params.slidesPerView = 2;
      }else if (window.innerWidth < 992) {
        this.params.slidesPerView = 3;
      }
       else {
        this.params.slidesPerView = 4;
      }
      this.update();
    }
  }
});

const element13 = document.querySelectorAll(".f-logo, .gnrl");
const observer14 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("f-logo-anim");
    }else{
      entry.target.classList.remove("f-logo-anim");
    }
  })
}, {
  threshold: 0.5
});

for (let i = 0; i < element13.length; i++){
  const el14 = element13[i];
  observer14.observe(el14);
}



