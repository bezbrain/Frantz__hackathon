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
function notiBellFunc() {
  profileDropdown.classList.remove("toggle__profile__dropdown");
  notificationDrop.classList.toggle("toggle__noti__dropdown");
}
notificationBell.addEventListener("click", notiBellFunc);

// Use this function to close the notification dropdown when out of the drop down
function isNotiOpen() {
  if (document.activeElement === profileBtn) {
    notificationDrop.classList.remove("toggle__noti__dropdown");
  }
  // Add an event listener for the profileBtn focus event
  profileBtn.addEventListener("focus", function () {
    notificationDrop.classList.remove("toggle__noti__dropdown");
  });
}

isNotiOpen();

// Use this function to close the profile dropdown when out of the drop down
function isProfileOpen() {
  const selectPlanBtn = document.querySelector("#select__plan__btn");
  if (document.activeElement === selectPlanBtn) {
    profileDropdown.classList.remove("toggle__profile__dropdown");
  }
  // Add an event listener for the markedNoti focus event
  selectPlanBtn.addEventListener("focus", function () {
    profileDropdown.classList.remove("toggle__profile__dropdown");
  });
}

isProfileOpen();

// Dropdown profile functionality
function profileBtnFunc() {
  notificationDrop.classList.remove("toggle__noti__dropdown");
  profileDropdown.classList.toggle("toggle__profile__dropdown");
}
profileBtn.addEventListener("click", profileBtnFunc);

// Function to clase the header body header of the page
headerClose.addEventListener("click", function () {
  bodyHeader.style.display = "none";
});

// ==========================
// Guide list functionalities
// TAGS SELECTION FOR BODY GUIDE
const bodyDropdownCloseIcon = document.querySelector(".setup__close__icon");
const bodyDropdownOpenIcon = document.querySelector(".setup__open__icon");

const progress = document.querySelector(".progress > span");
let progressCounter = document.querySelector(
  ".text__and__progress > span > span"
);

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

bodyDropdownCloseIcon.addEventListener("click", closeSetupGuide);

bodyDropdownOpenIcon.addEventListener("click", openSetupGuide);

let numberProgress = 0;

// Handle Progress bar - increase
function guideProgressIncrease() {
  numberProgress++;
  progressCounter.textContent = numberProgress;

  progress.classList.add("add__progress");
  const currentWidth = parseInt(progress.style.width) || 0;
  progress.style.width = `${currentWidth + 20}%`;
}

// Handle Progress bar - decrease
function guideProgressDecrease() {
  numberProgress--;
  progressCounter.textContent = numberProgress;

  progress.classList.add("add__progress");
  const currentWidth = parseInt(progress.style.width) || 0;
  progress.style.width = `${currentWidth - 20}%`;
}

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
    loadingSpinnerIcon[i].style.display = "block";
    notCompletedIcon[i].style.display = "none";
    e.currentTarget.classList.add("add-spinning-animation");

    guideProgressIncrease();

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
    guideProgressDecrease();
    completedIcon[i].style.display = "none";
    notCompletedIcon[i].style.display = "block";
  });
});
