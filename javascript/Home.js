let customer = document.querySelectorAll(
  "body .reviews .review-list .customer-review .customer"
);
let review_list_width = document.querySelector(
  "body .reviews .review-list"
).clientWidth;

window.onload = () => {
  for (let i = 0; i < customer.length; i++) {
    customer[i].style.width = review_list_width + "px";
  }
};

let searchAppear = document.querySelector(".search-bar .button .glass");
let searchAppearDelete = document.querySelector(".search-bar .button .delete");
let inputForm = document.querySelector(".search-bar .input-search");

searchAppear.addEventListener("click", () => {
  if (inputForm.classList.contains("searchInputDisappear")) {
    inputForm.classList.remove("searchInputDisappear");
  }
  inputForm.classList.add("searchInputAppear");
  inputForm.style.display = "block";
  searchAppear.style.display = "none";
  searchAppearDelete.style.display = "block";
});
searchAppearDelete.addEventListener("click", () => {
  if (inputForm.classList.contains("searchInputAppear")) {
    inputForm.classList.remove("searchInputAppear");
  }
  inputForm.classList.add("searchInputDisappear");
  setTimeout(() => {
    inputForm.style.display = "none";
  }, 750);
  searchAppear.style.display = "block";
  searchAppearDelete.style.display = "none";
});

let dots = document.querySelectorAll(".banner .dot");
let banner = document.querySelector(".banner");
let loadingScreen = document.querySelector("body .loading");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].classList.contains("active_dot")) {
        dots[i].classList.remove("active_dot");
      }
    }
    loadingScreen.classList.add("loading_animate");
    loadingScreen.classList.add("loading_animate");
    setTimeout(() => {
      if (index === 0) {
        banner.style.backgroundImage = "url(" + "../images/banner.jpg" + ")";
      } else {
        banner.style.backgroundImage =
          "url(" + "../images/banner" + index + ".jpg" + ")";
      }
      dot.classList.add("active_dot");
    }, 500);
    setTimeout(() => {
      loadingScreen.classList.remove("loading_animate");
    }, 3000);
  });
});

let reviewDots = document.querySelectorAll(".reviews .button-list .click");
let currentIndexDot = 0;
let customerReview = document.querySelector(
  ".reviews .review-list .customer-review"
);

function removeActiveDots() {
  for (let i = 0; i < reviewDots.length; i++) {
    if (reviewDots[i].classList.contains("review_active_dot")) {
      reviewDots[i].classList.remove("review_active_dot");
      break;
    }
  }
}

reviewDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (!dot.classList.contains("review_active_dot")) {
      removeActiveDots();
      dot.classList.add("review_active_dot");
      if (index > currentIndexDot) {
        customerReview.style.left =
          -review_list_width * (index - currentIndexDot) + "px";
      } else {
        customerReview.style.left =
          -review_list_width * (currentIndexDot - index) + "px";
      }
      currentIndexDot = current;
    }
  });
});

let menu_icon_active = document.querySelector(".row_2 .phone-menu .fa-bars");
let menu_icon_inActive = document.querySelector(".row_2 .phone-menu .fa-x");
let menu_list = document.querySelector(".row_3_phone");

menu_icon_active.addEventListener("click", () => {
  if (menu_list.classList.contains("row_3_phone_inActive")) {
    menu_list.classList.remove("row_3_phone_inActive");
  }
  menu_list.classList.toggle("row_3_phone_active");
  menu_icon_inActive.style.display = "block";
  menu_icon_active.style.display = "none";
});
menu_icon_inActive.addEventListener("click", () => {
  menu_list.classList.toggle("row_3_phone_active");
  menu_list.classList.toggle("row_3_phone_inActive");
  menu_icon_inActive.style.display = "none";
  menu_icon_active.style.display = "block";
});
