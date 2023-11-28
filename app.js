// Extreme right notification selelction
const notificationBell = document.querySelector(".notification__bell");
const notificationDrop = document.querySelector(".notification__dropdown");

const slantHamburger = document.querySelector(".slant__hambuger");
const markedNoti = document.querySelector(".marked__noti");

// Extreme Right profile header selection
const profileDropdown = document.querySelector(".header__profile__dropdown");
const profileBtn = document.querySelector(".profile__btn");

// Body Header selection
const headerClose = document.querySelector(".header__close__icon");
const bodyHeader = document.querySelector(".body__header");

// Dropdown notification functionality
notificationBell.addEventListener("click", function () {
  profileDropdown.classList.remove("toggle__profile__dropdown");
  notificationDrop.classList.toggle("toggle__noti__dropdown");
  isNotiOpen();
});

function isNotiOpen() {
  if (notificationDrop.classList.contains("toggle__noti__dropdown")) {
    slantHamburger.setAttribute("tabindex", "4");
    markedNoti.setAttribute("tabindex", "5");
  } else {
    slantHamburger.removeAttribute("tabindex");
    markedNoti.removeAttribute("tabindex");
  }
}

// Dropdown profile functionality
profileBtn.addEventListener("click", function () {
  notificationDrop.classList.remove("toggle__noti__dropdown");
  profileDropdown.classList.toggle("toggle__profile__dropdown");
});

document.body.addEventListener("click", function (e) {
  // if (e.target !== notificationBell) {
  //   notificationDrop.classList.remove("toggle__noti__dropdown");
  // }
  // if (e.target !== profileBtn) {
  //   profileDropdown.classList.remove("toggle__profile__dropdown");
  // }
});

// Function to clase the header body header of the page
headerClose.addEventListener("click", function () {
  bodyHeader.style.display = "none";
});

// ==========================
// Guide list functionalities
// TAGS SELECTION FOR BODY GUIDE
const bodyDropdownCloseIcon = document.querySelector(".setup__close__icon");
const bodyDropdownOpenIcon = document.querySelector(".setup__open__icon");
const allBodyList = document.querySelector(".all__lists");
const allGuidesSummary = document.querySelectorAll(".is__remove");
const guideTitles = document.querySelectorAll(".guide__title");
const guideItems = document.querySelectorAll(".guide__item");

const guideComplete = document.querySelectorAll(".guide__item__dashed");
const notCompletedIcon = document.querySelectorAll("#not-completed-icon");
const completedIcon = document.querySelectorAll("#completed-icon");
const loadingSpinnerIcon = document.querySelectorAll("#loading-spinner-icon");

function closeSetupGuide() {
  allBodyList.style.display = "none";
  bodyDropdownCloseIcon.style.display = "none";
  bodyDropdownOpenIcon.style.display = "block";

  // Bring focus back to the first guide item when close arrow is clicked
  handleNeutral();
  allGuidesSummary[0].style.display = "flex";
  guideTitles[0].style.display = "none";
  guideItems[0].classList.remove("add__guide__item");
}

function openSetupGuide() {
  allBodyList.style.display = "block";
  bodyDropdownOpenIcon.style.display = "none";
  bodyDropdownCloseIcon.style.display = "block";
}

bodyDropdownCloseIcon.addEventListener("click", function () {
  closeSetupGuide();
});

bodyDropdownOpenIcon.addEventListener("click", function () {
  openSetupGuide();
});

let guideCount = 0;

// Function to handle setting guide body to neutra
function handleNeutral() {
  // When guideTitle is clicked, first set all guideTitles to block
  guideTitles.forEach(function (each) {
    each.style.display = "block";
  });
  // guideCount = i;
  allGuidesSummary.forEach(function (guideSummary, i) {
    // When guideTitle is clicked, first set all guideSummary to none
    guideSummary.style.display = "none";
  });
  guideItems.forEach(function (guideItem, i) {
    // When guideTitle is clicked, first add color #fff to guideItem to none
    guideItem.classList.add("add__guide__item");
  });
}

// Loop and hide opened guide (but not the first one) at initial load of the page
allGuidesSummary.forEach(function (guideSummary, i) {
  // console.log(i);
  if (i !== guideCount) {
    guideSummary.style.display = "none";
  }
});

// Loop and display the initail hidden h4 (but not the first one) on first load of the page
guideTitles.forEach(function (guideTitle, i) {
  if (i !== guideCount) {
    guideTitle.style.display = "block";
  }

  guideTitle.addEventListener("click", function (e) {
    handleNeutral();

    guideItems[i].classList.remove("add__guide__item");
    allGuidesSummary[i].style.display = "flex";
    e.currentTarget.style.display = "none";
  });
});

// Loop and give bg of #fff to all guide tags (but not the first one)
guideItems.forEach(function (guideItem, i) {
  if (i !== guideCount) {
    guideItem.classList.add("add__guide__item");
  }
});

// The Guide complete roller
notCompletedIcon.forEach(function (each, i) {
  each.addEventListener("click", function (e) {
    console.log("I am clicked");
    loadingSpinnerIcon[i].style.display = "block";
    notCompletedIcon[i].style.display = "none";
    e.currentTarget.classList.add("add-spinning-animation");

    setTimeout(function () {
      loadingSpinnerIcon[i].style.display = "none";
      completedIcon[i].style.display = "block";
    }, 1500);

    handleNeutral();

    guideItems[i].classList.remove("add__guide__item");
    allGuidesSummary[i].style.display = "flex";
    guideTitles[i].style.display = "none";
  });
});

completedIcon.forEach(function (each, i) {
  each.addEventListener("click", function () {
    completedIcon[i].style.display = "none";
    notCompletedIcon[i].style.display = "block";
  });
});
