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

// Icon Outlines
var iconCategories,
  i,
  iconOutlineList = "",
  iconSolidList = "";
for (i in iconCategories) {
  iconOutlineList += '<div class="p-t-3" id="' + iconCategories[i].id + '">';
  iconOutlineList += '<h3 class="m-b-2">' + iconCategories[i].name + "</h3>";
  iconOutlineList += '<div class="row">';
  for (j in iconCategories[i].icons) {
    iconOutlineList +=
      '<a data-search-query="' +
      iconCategories[i].icons[j] +
      '" id="' +
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
// Icon Solids
for (i in iconCategories) {
  iconSolidList += '<div class="p-t-3" id="' + iconCategories[i].id + '">';
  iconSolidList += '<h3 class="m-b-2">' + iconCategories[i].name + "</h3>";
  iconSolidList += '<div class="row">';
  for (j in iconCategories[i].icons) {
    iconSolidList +=
      '<a data-search-query="' +
      iconCategories[i].icons[j] +
      '-solid" id="' +
      iconCategories[i].icons[j] +
      '-solid" href="#' +
      iconCategories[i].icons[j] +
      '-solid" class="icon-box flex flex-column is-secondary">';
    iconSolidList +=
      '<span class="is-medium d-icon d-' +
      iconCategories[i].icons[j] +
      '-solid"></span>';
    iconSolidList += "<h6>" + iconCategories[i].icons[j] + "-solid</h6></a>";
  }
  iconSolidList += "</div></div>";
}

// Load Outline Icons and Catalog list
document.getElementById("iconContainer").innerHTML = iconOutlineList;
catalogIconBox();

// Toggle
function solidIcons() {
  document.getElementById("iconContainer").innerHTML = iconSolidList;
  document.getElementById("solidButton").classList.add("is-active");
  document.getElementById("outlineButton").classList.remove("is-active");
  document.getElementById("brands").style.display = "none";
  catalogIconBox();
  newIconChips();
}
document.getElementById("solidButton").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    solidIcons();
  }
});

function outlineIcons() {
  document.getElementById("iconContainer").innerHTML = iconOutlineList;
  document.getElementById("outlineButton").classList.add("is-active");
  document.getElementById("solidButton").classList.remove("is-active");
  catalogIconBox();
  newIconChips();
}
document.getElementById("outlineButton").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    outlineIcons();
  }
});

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

// Catalog icons wit class name of icon box
function catalogIconBox() {
  // Event listener for icon boxes
  var classname = document.getElementsByClassName("icon-box");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", myFunction, false);
  }
}

function myFunction() {
  document.getElementById("downloadModal").classList.add("show");
  populateDownloadModal(this.id);
}

function populateDownloadModal(icon) {
  // alert(this.id);
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

// Hide Download Modal
function hide() {
  document.getElementById("downloadModal").classList.remove("show");
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
      // console.log(c[i].id + " will hide");
      document.getElementById(c[i].id).classList.add("hide");
    } else {
      // console.log(c[i].id + " will not hide");
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

  console.log(containerCount + " " + containerCountHidden);

  if (containerCount === containerCountHidden) {
    // console.log("display code");
    document.getElementById("noResults").classList.remove("hide");
  } else {
    // console.log("false");
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
  countTwelve;

console.log(countTotal);

document.getElementById("iconTotal").innerHTML =
  "<strong>Total Icons:</strong> " + countTotal + "</h5>";

// var count = Object.keys(iconCategories).length;
