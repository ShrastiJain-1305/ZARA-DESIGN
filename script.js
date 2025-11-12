const swiper = new Swiper(".slider-container", {
  effect: "fade",
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var carts = document.querySelectorAll(
  "main .p3 .container .slider-wrapper .slide .bottom .r .b button"
);
var f = 0;
carts.forEach(function (cart) {
  cart.addEventListener("click", function () {
    cart.innerHTML = "Add Item";
    if (f === 0) {
      cart.innerHTML = "Added";
      cart.style.backgroundColor = "#885d32ff";
      cart.style.padding = "0.6rem";
      f = 1;
    } else {
      cart.innerHTML = "Add Item";
      cart.style.backgroundColor = "#ad7e4e";
      cart.style.padding = "0.6rem 0.3rem";
      f = 0;
    }
  });
});
var wishlist = document.querySelectorAll(
  "main .p3 .container .slider-wrapper .slide .bottom .t i"
);
var wi = 0;
wishlist.forEach(function (w) {
  w.style.color = "grey";
  w.addEventListener("click", function () {
    if (wi === 0) {
      w.style.color = "red";
      wi = 1;
    } else {
      w.style.color = "black";
      wi = 0;
    }
  });
});

var submit = document.querySelector(".p6 .container .butn button");
var input = document.querySelector(".p6 .container .butn div input");
submit.addEventListener("click", function () {
  if (submit.textContent === "Subscribe") {
    submit.textContent = "Subcribed";
    input.value = "";
    submit.style.backgroundColor = "#885d32ff";
  } else {
    submit.textContent = "Subscribe";
    submit.style.backgroundColor = "#ad7e4e";
  }
});
