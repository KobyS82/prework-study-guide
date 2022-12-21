var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";
//var galaxy = [];

function display(spaceArray) {
    for (i = 0; i < spaceArray.length; i++){
        console.log(spaceArray[i]);
    } 
    console.log("---------------------------");
}

// Add Canis Major to "0" position without removing an element
constellations.unshift("Canis Major");
display(constellations);


// Remove Venus
planets.pop("Venus");
display(planets);

// It's done when the arrays constellations and planets are joined to form 
// a new array named galaxy. The arrays constellations and planets should not be altered.
var galaxy = constellations.concat(planets);
display(galaxy);

// It's done when the string "polaris" is converted into all capital letters and the new 
// string is stored in a variable.
var starV2 = star.toUpperCase()
console.log(starV2);
