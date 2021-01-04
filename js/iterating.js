(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var peopleNames = ["Bobby", "Mary", "Mikey", "Alex"];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(peopleNames.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    peopleNames.forEach(function (name, index) {
        console.log(name, index);
    });

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < peopleNames.length; i++) {
        console.log(peopleNames[i] + " is a nice name.");
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    peopleNames.forEach(function (name) {
        console.log(name + " is a nice name.");
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var thisArray = [1, 2, 3, 4, 5];

    function firstElement() {
    var first = thisArray[0];
    return first;
}

    console.log(firstElement());

    function secondElement() {
        var second = thisArray[1];
        return second;
    }

    console.log(secondElement());

    function lastElement() {
        var last = thisArray.length -1;
        return last;
    }

    console.log(lastElement());

    // function last(array) {
    //     return thisarray.length -1;
    // }


//     (function(thisArray) {
//         console.log(thisArray[1]);
//     });
//
//
//
//     function theseNumbers(thisArray) {
//         return(thisArray[0]);
//
//     }
//
//     function returnSecond(thisArray) {
//         console.log(thisArray[1]);
//     }
//
//     function returnLast(thisArray) {
//         console.log(thisArray[4]);
//     }
//
//     console.log(theseNumbers());
//     console.log(returnSecond());
//     console.log(returnLast());
//
// first(names)
//     second(names)
//
})();