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
  consoleLogArts();
  try {
    showArts();
  } catch(e) {
    console.error(e)
  }
}
// just loop through the books and console.log them
function consoleLogArts() {
  console.log("consoleLogArts()");
  arts.forEach(art => {
    console.log("Arts:", art);
    console.log(art.fields.artPictures[0].url);
  });
}
// look through our airtable data, create elements
function showArts() {
  console.log("showArts()");
  arts.forEach(art => {
    // create container for each art
    var artContainer = document.createElement("div");
    artContainer.classList.add("art-container");
    document.querySelector(".grid-container").append(artContainer);
    // add all the fruit names as h1 
    var artName = document.createElement("h1");
    artName.classList.add("art-title");
    artName.innerText = art.fields.artName;
    artContainer.append(artName);
    // add all the pics 
    var artPictures = document.createElement("img");
    artPictures.classList.add("art-image");
    artPictures.src = art.fields.artPictures[0].url;
    artContainer.append(artPictures);
    // add Letter as a class to each corresponding art containing 
    var artLetters = art.fields.artLetters;
    artContainer.classList.add(artLetters)
    // filter by Letter A
    var filterA = document.querySelector(".lettera");
    filterA.addEventListener("click", function() {
      if (artContainer.classList.contains("A")) {
        artContainer.style.display = "block";
      } else {
        artContainer.style.display = "none";
      }
    });
      // filter by Letter B
      var filterB = document.querySelector(".letterb");
      filterB.addEventListener("click", function() {
        if (artContainer.classList.contains("B")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
        // filter by Letter C
        var filterC = document.querySelector(".letterc");
        filterC.addEventListener("click", function() {
          if (artContainer.classList.contains("C")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
          // filter by Letter D
      var filterD = document.querySelector(".letterd");
      filterD.addEventListener("click", function() {
        if (artContainer.classList.contains("D")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
        // filter by Letter E
        var filterE = document.querySelector(".lettere");
        filterE.addEventListener("click", function() {
          if (artContainer.classList.contains("E")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter F
        var filterF = document.querySelector(".letterf");
        filterF.addEventListener("click", function() {
          if (artContainer.classList.contains("F")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter G
        var filterG = document.querySelector(".letterg");
        filterG.addEventListener("click", function() {
          if (artContainer.classList.contains("G")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter H
        var filterH = document.querySelector(".letterh");
        filterH.addEventListener("click", function() {
          if (artContainer.classList.contains("H")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter I
        var filterI = document.querySelector(".letteri");
        filterI.addEventListener("click", function() {
          if (artContainer.classList.contains("I")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter J
        var filterJ = document.querySelector(".letterj");
        filterJ.addEventListener("click", function() {
          if (artContainer.classList.contains("J")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter K
        var filterK = document.querySelector(".letterk");
        filterK.addEventListener("click", function() {
          if (artContainer.classList.contains("K")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter L
        var filterL = document.querySelector(".letterl");
        filterL.addEventListener("click", function() {
          if (artContainer.classList.contains("L")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter M
        var filterM = document.querySelector(".letterm");
        filterM.addEventListener("click", function() {
          if (artContainer.classList.contains("M")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter N
        var filterN = document.querySelector(".lettern");
        filterN.addEventListener("click", function() {
          if (artContainer.classList.contains("N")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter O
        var filterO = document.querySelector(".lettero");
        filterO.addEventListener("click", function() {
          if (artContainer.classList.contains("O")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });
        // filter by Letter P
        var filterP = document.querySelector(".letterp");
        filterP.addEventListener("click", function() {
          if (artContainer.classList.contains("P")) {
            artContainer.style.display = "block";
          } else {
            artContainer.style.display = "none";
          }
        });

      // filter by Letter Q
      var filterQ = document.querySelector(".letterq");
      filterQ.addEventListener("click", function() {
        if (artContainer.classList.contains("Q")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter R
      var filterR = document.querySelector(".letterr");
      filterR.addEventListener("click", function() {
        if (artContainer.classList.contains("R")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter S
      var filterS = document.querySelector(".letters");
      filterS.addEventListener("click", function() {
        if (artContainer.classList.contains("S")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter T
      var filterT = document.querySelector(".lettert");
      filterT.addEventListener("click", function() {
        if (artContainer.classList.contains("T")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter U
      var filterU = document.querySelector(".letteru");
      filterU.addEventListener("click", function() {
        if (artContainer.classList.contains("U")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter V
      var filterV = document.querySelector(".letterv");
      filterV.addEventListener("click", function() {
        if (artContainer.classList.contains("V")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter W
      var filterW = document.querySelector(".letterw");
      filterW.addEventListener("click", function() {
        if (artContainer.classList.contains("W")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter X
      var filterX = document.querySelector(".letterx");
      filterX.addEventListener("click", function() {
        if (artContainer.classList.contains("X")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter Y
      var filterY = document.querySelector(".lettery");
      filterY.addEventListener("click", function() {
        if (artContainer.classList.contains("Y")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
      // filter by Letter Z
      var filterZ = document.querySelector(".letterz");
      filterZ.addEventListener("click", function() {
        if (artContainer.classList.contains("Z")) {
          artContainer.style.display = "block";
        } else {
          artContainer.style.display = "none";
        }
      });
        // reset all
        var resetAll = document.querySelector(".js-reset");
        resetAll.addEventListener("click", function() {
          artContainer.style.display = "block";
        });

    // add Letter as a class to each corresponding art containing 
    var artColors = art.fields.artColors;
    artContainer.classList.add(artColors)

    // filter by Color Warm
    var filterWARM = document.querySelector(".warm");
    filterWARM.addEventListener("click", function() {
      if (artContainer.classList.contains("Warm")) {
        artContainer.style.display = "block";
      } else {
        artContainer.style.display = "none";
      }
    });
     // filter by Color Cold
     var filterCOLD = document.querySelector(".cold");
     filterCOLD.addEventListener("click", function() {
       if (artContainer.classList.contains("Cold")) {
         artContainer.style.display = "block";
       } else {
         artContainer.style.display = "none";
       }
     });
     // filter by Color Monochrome
     var filterMONOCHROME = document.querySelector(".monochrome");
     filterMONOCHROME.addEventListener("click", function() {
       if (artContainer.classList.contains("Monochrome")) {
         artContainer.style.display = "block";
       } else {
         artContainer.style.display = "none";
       }
     });
   // reset all
   var resetAll = document.querySelector(".js-reset");
   resetAll.addEventListener("click", function() {
     artContainer.style.display = "block";
   });


        
  });
}