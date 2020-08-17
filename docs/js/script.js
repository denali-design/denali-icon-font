// Copyright 2019, Oath Inc.
// Licensed under the terms of the MIT license. See LICENSE file in project root for terms.

// Toggle Tabs
function toggleTabsLeft() {
  var toggleTabsLeft = document.getElementById("toggleTabsLeft");
  toggleTabsLeft.classList.toggle("tablet-down-toggle-tabs-left");
}
document.getElementById("toggleTab").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    var toggleTabsLeft = document.getElementById("toggleTabsLeft");
    toggleTabsLeft.classList.toggle('tablet-down-toggle-tabs-left');
  }
});

// Nav Active Scroll
var content = document.getElementById("content");
function activeScroll() {
  var nav = document.getElementById("navLinks");
  var navGrandChild = nav.querySelectorAll("li > a");
  for (var i = 0; i < navGrandChild.length; i++) {
    var activeArea = navGrandChild[i].getAttribute("href").replace("#", "");
    // console.log(activeArea);
    if (
      content.scrollTop >=
        document.getElementById(activeArea).offsetTop - 140 &&
      content.scrollTop <=
        document.getElementById(activeArea).offsetHeight +
          document.getElementById(activeArea).offsetTop -
          140
    ) {
      navGrandChild[i].classList.add("is-active");
    } else {
      navGrandChild[i].classList.remove("is-active");
    }
  }
}
content.addEventListener("scroll", activeScroll);

// Adding shadow on scroll
document.getElementById("content").onscroll = function() {
  shadowScroll();
};
function shadowScroll() {
  if (
    document.getElementById("content").scrollTop > 0 ||
    document.getElementById("content").scrollTop > 0
  ) {
    document.getElementById("subMenu").classList.add("has-shadow");
  } else {
    document.getElementById("subMenu").classList.remove("has-shadow");
  }
}

// Dark Theme
function darkMode() {
  var element = document.getElementsByTagName("BODY")[0];
  element.classList.toggle("denali-dark-theme");
}

// Toggle Navbar Menu Right
document.getElementById('navToggle').addEventListener("click", toggleMenu);
function toggleMenu() {
 document.getElementById('navMenuContent').classList.toggle("is-active");
}

// Icon number count
var countOne = iconCategories[0].icons.length;
var countTwo = iconCategories[1].icons.length;
var countThree = iconCategories[2].icons.length;
var countFour = iconCategories[3].icons.length;
var countFive = iconCategories[4].icons.length;
var countSix = iconCategories[5].icons.length;
var countSeven = iconCategories[6].icons.length;
var countEight = iconCategories[7].icons.length;
var countNine = iconCategories[8].icons.length;
var countTen = iconCategories[9].icons.length;
var countEleven = iconCategories[10].icons.length;
var countTwelve = iconCategories[11].icons.length;
var countThirteen = iconCategories[12].icons.length;
var countFourteen = iconCategories[13].icons.length;

var countTotal =
  countOne * 2 +
  countTwo * 2 +
  countThree * 2 +
  countFour * 2 +
  countFive * 2 +
  countSix * 2 +
  countSeven * 2 +
  countEight * 2 +
  countNine * 2 +
  countTen * 2 +
  countEleven * 2 +
  countTwelve * 2 +
  countThirteen * 2 +
  countFourteen;

document.getElementById("iconTotal").innerHTML = "<strong>Total Icons:</strong> " + countTotal + "</h5>";

// Load Icons
var iconCategories,
  i,
  iconOutlineList = "";
for (i in iconCategories) {
  iconOutlineList += '<div class="p-t-3" id="' + iconCategories[i].id + '">';
  iconOutlineList += '<h3 class="m-b-2">' + iconCategories[i].name + "</h3>";
  iconOutlineList += '<div class="row">';
  for (j in iconCategories[i].icons) {
    iconOutlineList +=
      '<a data-search-query="' +
      iconCategories[i].icons[j] +
      '" href="#' +
      iconCategories[i].icons[j] +
      '" class="icon-box flex flex-column is-secondary">';
    iconOutlineList +=
      '<span class="is-medium d-icon d-' +
      iconCategories[i].icons[j] +
      '"></span>';
    iconOutlineList += "<h6>" + iconCategories[i].icons[j] + "</h6></a>";
  }
  iconOutlineList += "</div></div>";
}

// Load Outline Icons and Catalog list
document.getElementById("iconContainer").innerHTML = iconOutlineList;

// Toggle Solid
function solidIcons() {
  if (document.getElementById("solidButton").classList.contains("is-active")) {
  } else {
    document.getElementById("solidButton").classList.add("is-active");
    document.getElementById("outlineButton").classList.remove("is-active");
    var icons, i;
    icons = document.querySelectorAll(".is-medium.d-icon");
    for (i = 0; i < icons.length; i++) {
      icons[i].className += "-solid";
    }
    var iconsHref = document.querySelectorAll(".icon-box.flex.flex-column.is-secondary");
    for (i = 0; i < iconsHref.length; i++) {
      iconsHref[i].href = iconsHref[i].href + "-solid";
    }
  }
}

// Toggle Outline
function outlineIcons() {
  if (document.getElementById("outlineButton").classList.contains("is-active")) {
  } else {
    document.getElementById("outlineButton").classList.add("is-active");
    document.getElementById("solidButton").classList.remove("is-active");
    var icons, i;
    icons = document.querySelectorAll(".is-medium.d-icon");
    for (i = 0; i < icons.length; i++) {
      icons[i].className = icons[i].className.replace("-solid", "");
    }
    var iconsHref = document.querySelectorAll(".icon-box.flex.flex-column.is-secondary");
    for (i = 0; i < iconsHref.length; i++) {
      iconsHref[i].href = iconsHref[i].href.replace("-solid", "");
    }
  }
}

// Toggle solid and outline icons for accessibility
document.getElementById("solidButton").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    solidIcons();
  }
});
document.getElementById("outlineButton").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    outlineIcons();
  }
});

// Watch for hash change in URL
window.addEventListener("hashchange", toggleDownloadModal, false);

// Show download modal
function toggleDownloadModal() {
  document.getElementById("downloadModal").classList.add("show");
  populateDownloadModal(window.location.hash.substr(1));
}

// Populate download modal
function populateDownloadModal(icon) {
  var iconName = icon;
  var downloadGroup =
    '<div class="input"><input type="text" value="d-' +
    iconName +
    '"/></div><a href="downloads/png/' +
    iconName +
    '.png" download class="button is-outline">Download PNG</a><a href="downloads/svg/' +
    iconName +
    '.svg" download class="button is-outline">Download SVG</a>';
  var downloadTitle =
    '<i class="d-icon d-' + iconName + '"></i> ' + iconName + "";
  document.getElementById("iconName").innerHTML = downloadTitle;
  document.getElementById("downloadGroup").innerHTML = downloadGroup;
}

// Hide Download Modal and clear hash
function hide() {
  document.getElementById("downloadModal").classList.remove("show");
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

// Download modal reveal if url has hash
if (window.location.hash) {
  document.getElementById("downloadModal").classList.add("show");
  populateDownloadModal(window.location.hash.substr(1));
  // document.getElementById(iconName).classList.add("is-active");
}

// Instant Search Script
var search = document.getElementById("search");
var classname = document.getElementsByClassName("icon-box");

// Event listener for search input
search.addEventListener("input", searchList, true);

function searchList() {
  // Get value from search input
  var searchValue = search.value;

  // Get all names with the class of name-item
  for (var i = 0; i < classname.length; i++) {
    var name = classname[i].getAttribute("data-search-query");
    // Compare search query to search value hide or show
    if (!name.includes(searchValue)) {
      classname[i].classList.add("hide");
    } else {
      classname[i].classList.remove("hide");
    }
  }
}

// Event listener for search input
search.addEventListener("input", titleRemove, true);

// Remove Title if all elements are hidden
function titleRemove() {
  var c = document.querySelectorAll("#iconContainer > *");
  var i;
  for (i = 0; i < c.length; i++) {
    var txt = c[i].id;
    var count = document.getElementById(c[i].id).querySelectorAll("div a")
      .length;
    var hideCount = document
      .getElementById(c[i].id)
      .querySelectorAll("div a.hide").length;
    if (count === hideCount) {
      document.getElementById(c[i].id).classList.add("hide");
    } else {
      document.getElementById(c[i].id).classList.remove("hide");
    }
  }
}

// Event listener for search input
search.addEventListener("input", noResults, true);
function noResults() {
  var containerCount = document.querySelectorAll("#iconContainer > div").length;
  var containerCountHidden = document.querySelectorAll(
    "#iconContainer > div.hide"
  ).length;
  if (containerCount === containerCountHidden) {
    document.getElementById("noResults").classList.remove("hide");
  } else {
    document.getElementById("noResults").classList.add("hide");
  }
}

// New Icon chip
function newIconChips() {
  var iconBox = document.getElementsByClassName("icon-box");
  var i;
  var j;
  var iconNew;

  for (i = 0; i < iconBox.length; i++) {
    var icon = iconBox[i].getAttribute("data-search-query");

    for (j in newIcons) {
      if (icon === newIcons[j] || icon === newIcons[j] + "-solid") {
        iconBox[i].classList.add("new");
      }
    }
  }
}