// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyed95xcsjp5uOEf" }).base(
  "appDPQONjcGI1zfBv"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("arts")
  .select({})
  .eachPage(gotPageOfArts, gotAllArts);

// an empty array to hold our data
var arts = [];

// callback function that receives our data
function gotPageOfArts(records, fetchNextPage) {
  // add the records from this page to our array
  arts.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllArts(err) {
  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }
  // call functions to log and show the books
  consoleLogSongs();
  showArts();
}

// just loop through the books and console.log them
function consoleLogSongs() {
  console.log("consoleLogSongs()");
  arts.forEach(art => {
    console.log("Arts:", fruit);
    console.log(fruit.fields.artPictures[0].url);
  });
}

// look through our airtable data, create elements
function showArts() {
  console.log("showSongs()");
  arts.forEach(art => {
    // create container for each fruit
    var artContainer = document.createElement("div");
    artContainer.classList.add("song-container");
    document.querySelector(".container").append(artContainer);
  
    // add all the fruit names as h1 
    var artName = document.createElement("h1");
    artName.classList.add("song-title");
    artName.innerText = art.fields.artName;
    artContainer.append(artName);
    
    // add all the pics 
    var artPictures = document.createElement("img");
    artPictures.classList.add("song-image");
    artPictures.src = art.fields.artpictures[0].url;
    artContainer.append(artPictures);

    // create a css class for each fruit with corresponding fruit color 
    var artColors = fruit.fields.fruitColor;
    artColors.forEach(function(color) {
      artContainer.classList.add(color);
    });

    // when press button for red, get red fruit color by looking for .Red class added by line 75-77
    var filterRed = document.querySelector(".lettera");
    filterRed.addEventListener("click", function() {
      if (artContainer.classList.contains("lettera")) {
        fruitContainer.style.background = "red";
      } else {
        artContainer.style.background = "white";
      }
    });
    // same logic as previous 
    var filterGreen = document.querySelector(".letterb");
    filterGreen.addEventListener("click", function() {
      if (artContainer.classList.contains("letterb")) {
        artContainer.style.background = "green";
      } else {
        artContainer.style.background = "white";
      }
    });
    // same logic as previous 
    var filterBrn = document.querySelector(".letterc");
    filterBrn.addEventListener("click", function() {
      if (fruitContainer.classList.contains("letterc")) {
        artContainer.style.background = "brown";
      } else {
        artContainer.style.background = "white";
      }
    });
    // same logic as previous 
    var filterYellow = document.querySelector(".letterd");
    filterYellow.addEventListener("click", function() {
      if (artContainer.classList.contains("letterd")) {
        artContainer.style.background = "yellow";
      } else {
        artContainer.style.background = "white";
      }
    });
  });
}

