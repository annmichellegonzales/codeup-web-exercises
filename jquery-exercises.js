"use strict"

// window.onload = function () {
//     alert("Ding, fries are done!");
// }

// console.log("test");
// console.log(jQuery);
// console.log($);
// $


// $(document).ready(function() {
//     alert("I gotta run I gotta run");
// });

// $(document).ready(function () {
//     alert("The DOM has finished loading.");
// });



// $('#para-id').css('background-color', 'purple');
// $('#divvy').css('background-color', 'red');

// $(document).ready(function () {
//     alert("The paragraph and div bg color changed.");
// });

// $('.codeup').css('background-color', 'yellow');
// $('.codeup').css('border', '1px solid #F00');

//
// $('li').css('font-size', '20px');
// $('h1').css('border', '2px dotted blue');
//
// $('.ele-class').css('background-color', 'pink');

// $('h1').css('background-color', 'purple');
// $('p').css('background-color', 'red');
// $('li').css('background-color', 'gray');

// $('h1, p, li').css('color', 'green');

// var contents = $('#codeup').html();
// alert(contents);

// alert($('#codeup').html());
$('h1').each(function() {
    alert($(this).html());
})