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
// $('h1').each(function() {
//     alert($(this).html());
// })


// $('h1').click(
//     function() {
//         $(this).css('background-color', '#FF0');
//     },
//     function() {
//         $(this).css('background-color', '#FFF');
//     }
// );

$('h1').click(function () {
    $(this).css('background-color', '#FF0');
});




$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});



(function(){

    let jqClassObjs = $('li');

    let handlerRedColor = function(e){
        $(this).css('color', '#FF0000');
    };

    let handlerNormalColor = function(e){
        $(this).css({
            color: '',
            transition: 'color .5s'
        })
    }

    jqClassObjs.hover(handlerRedColor, handlerNormalColor);

})()

$( "#target" ).toggle(function() {
    alert( "First handler for .toggle() called." );
}, function() {
    alert( "Second handler for .toggle() called." );
});

















