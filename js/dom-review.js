// ================= Review, pt deux =================

/*
    TODO: When a list item inside of .data-example-container is clicked,
     -return its data-value attribute value to the element with an id of #show-data-attr
*/

$('.data-example-container li').click(function () {
    // console.log(this);
    let dataOfThis = $(this).attr("data-value");
    // console.log(dataOfThis);
    $('#show-data-attr').text(dataOfThis);

});

/*
    TODO: When a list item inside of .data-example-container is double clicked,
     -return its text value to the all elements with a class of .show-list-item-text
 */

$('.data-example-container li').dblclick(function () {
    let textOfThis = $(this).text();
    $('.show-list-item-text').text(textOfThis);

});

/*

    TODO: When an immediate child element of the parent with an id of #hover-container is hovered
     -change the child's text to 'You are hovering here!' and
     -add a border to the child.
     -Be sure to reset the text and border upon hovering out

 */

$('#hover-container h2').hover(function () {
    $(this).text("You are hovering here!");
    $(this).css('border', 'solid');
}, function () {
    $(this).remove();
});

/*

    TODO: When an element with the class of .background-color-change is clicked,
     -cycle between background-colors of 'red', 'blue', 'green', and back to the default
     -the colors should change in the above order
     -only affect one element at a time

 */

// $('.background-color-change').click(function () {
//         $(this).css('backgroundColor', 'red');
//     },
//     function () {
//         $(this).css('backgroundColor', 'green');
//     },
//     function () {
//         $(this).css('backgroundColor', 'blue');
//     });


/*

    TODO: When a user enters a string (and only a string) into the input of id #input,
     -concatenate that string to what is already in the element with an id of #output
     -when the user double clicks the element with an id #output
     -the string resets to its original text

*/

// $('#input').














