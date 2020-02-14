document.addEventListener("DOMContentLoaded", e => {

  let recipes = new Swiper(".recipes-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.recipe-b",
      prevEl: ".swiper-button-prev.recipe-b"
    },
  });

  let products = new Swiper(".swiper-container.products-container", {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
      // when window width is <= 499px
      500: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      }
    }
  });

  const burguerIcon = document.getElementById("burger-icon"),
    menu = document.getElementById("menu"),
    body = document.getElementById("body"),
    links = [...document.querySelectorAll(".menu li a")];

  burguerIcon.addEventListener("click", () => {
    burguerIcon.classList.toggle("open");

    if (burguerIcon.classList.contains("open")) {
      menu.classList.add("open");
      body.classList.add("active");
      html.classList.add("active");
    }
  });

  body.addEventListener("click", e => {
    if (body.classList.contains("active") && e.target.tagName == "BODY") {
      burguerIcon.classList.remove("open");
      menu.classList.remove("open");
      body.classList.remove("active");
      html.classList.remove("active");
    }
  });

  menu.addEventListener("click", e => {
    let ele = e.target,
      clicked = ele.tagName;

    //console.log(clicked)
    if (clicked === "A" || clicked === "STRONG" || clicked === "LI") {
      burguerIcon.classList.toggle("open");
      menu.classList.remove("open");
      body.classList.remove("active");
      html.classList.remove("active");
    }

    links.forEach(link => link.classList.remove("active"));

    let container = ele.closest("a");
    container.classList.add("active");
  });

  const pixels = [...document.querySelectorAll('.pixel__item')];


  const sendPixel = (event, category) => {

    
    console.log('sending pixel...')

    //fbq('track', 'Purchase', {currency: "USD", value: 30.00});

    fbq('trackCustom', event, {
      content_name: category,
      });

      console.log(event, category)



  }

  pixels.forEach(pixel => {
    
    pixel.addEventListener('click', e => {
      
      let target = e.target,
      parent = target.closest('a'),
      event = parent.dataset.event,
      category = parent.dataset.value

      sendPixel(event, category)

    })
  

  });










});
