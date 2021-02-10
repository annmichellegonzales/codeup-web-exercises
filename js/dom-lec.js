// $(".card").click(function() { //click loops through the card collection
//     $(this).css("background-color", "lightblue");
// });

// $(".card").click(function() { //click loops through the card collection
//     $(this).toggleClass("zebra");
// });

let hoverIn = function () {
    $(this).css({
        backgroundColor: "black",
        color: "white"
    });
}

$(".card").hover(hoverIn);
//
// let hoverOut = function() {
//     $(this).css({
//         backgroundColor: "green",
//         color: "yellow"
//     })
// }
//
// $(".card").hover(hoverOut);

$(".list-group>li").dblclick(function () {
    $(this).text("I GOT CLICKED!");
    $(this).click(function () {
        $(this).text("AHHHH... better");
    })
});


// get the data,

//MAKING A NEW OBJECT
function getInputData() {
    let first = $("#first").val();
    let last = $('#last').val();
    let handleField = $("#handleField").val();

    return {
        id: 4, firstName: first, lastName: last, handleField: handleField
    };
}

$("#submitBtn").click(function () {
    console.log(getInputData());



// bundle the data, create the elements that match the html,

let inputData = getInputData();


let cellCount = $("tr").first().children().length;
console.log(cellCount);


let tableRow = $("<tr></tr>");

console.log(tableRow);


// for(let i = 0; i <= cellCount; i++) {
let td1 = $("<td></td>").text(inputData.id);
let td2 = $("<td></td>").text(inputData.firstName);
let td3 = $("<td></td>").text(inputData.lastName);
let td4 = $("<td></td>").text(inputData.handleField);


tableRow.append([td1,td2,td3,td4]);
$("tbody").append(tableRow);

// tableRow.appendTo($("body"));
// }
});

// inject the data into the elements, add the elements to the dom.



$("img").click(function() {
    $(this).attr("src", "img/sushi.jpg");
    $(this).attr("alt", "resistance is futile")
})









