(function(){
    "use strict";
    //
    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;
    //
    // /**
    //  * TODO:
    //  * Convert planetsString to an array, and save it in a variable named
    //  * planetsArray.
    //  * console.log planetsArray to check your work
    //  */
    //
    // var planetsArray = planetsString.split("|");
    //
    // console.log(planetsArray);
    //
    //
    //
    // /**
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *
    //  * BONUS:
    //  * Create another string that would display your planets in an undordered
    //  * list. You will need an opening AND closing <ul> tags around the entire
    //  * string, and <li> tags around each planet.
    //  */
    //
    // var breakingPlanets = planetsArray.join(" <br> ");
    //
    // console.log(breakingPlanets);
    //
    //
    // var planetList = "<ul> <li> " + planetsArray.join(" </li><li> ") + " </li> </ul>";
    // console.log(planetList);


    var fruits =['apple', 'banana', 'orange', 'apple', 'pineapple'];

    function allIndexesOf(array, val) {
        for (var i = 0; i < array.length; i++) {
            if array.indexof(val) {
                return [array, val];
            }

        }
    }
    console.log(allIndexesOf(fruits, "apple"));

    // for (var i = 0; i < instructors.length; i++) {
    //     console.log("One of your instructors is named: " + instructors[i]);
    // }


})();