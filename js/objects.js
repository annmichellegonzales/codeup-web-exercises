(function() {
    "use strict";

    console.log("test");
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Ann",
        lastName: "Gonzales",
        sayHello: function() {
            return "Hello from " + person.firstName + " " + person.lastName + "!";
        }
    }
    console.log(person.firstName);
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function() {
        return 'Hello from ' + person.firstName + " " + person.lastName + "!"
    }
    console.log(person.sayHello());




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    function displayCurrency(amount) {
        return "$" + amount.toFixed(2);
    }

    function calculateDiscount(amount, discountAmountThreshold, discountPercentage) {
        // if (amount > discountAmountThreshold) {
        //     return amount * discountPercentage;
        // } else {
        //     return 0;
        // }
        return (amount > discountAmountThreshold ? amount * discountPercentage : 0);
    }

    var discountAmountThreshold = 200;
    var discountPercentage = .12;

    shoppers.forEach(function(shopper) { //higher order function can return a function as an output
        var shopperName = shopper.name;
        var amountPriorToDiscount = shopper.amount;
        var amountOff = calculateDiscount;
        if (shopper.amount > 200) {
            amountOff = amountPriorToDiscount * .12;
        } else {
            amountOff = 0;
        }
        var totalCost = amountPriorToDiscount - amountOff;
        var message = shopperName +
            ' purchased ' + amountPriorToDiscount + " and is getting " + displayCurrency(amountOff) + " off, and is paying " +
            displayCurrency(totalCost);
        console.log(message);
    });


    // shoppers.forEach(function(shopper){
    //     if (this.amount >= 200) {
    //         shoppers.discount = function () {
    //             newTotal = this.amount * .12;
    //             console.log(shoppers.name + " has a total of " + shoppers.amount + " with a discount of " + discount + ". Their new total with applied discount is " + shoppers.amount*discount);
    //         }
    //     } else {
    //
    //     }
    //
    // })
    //
    //
    // shoppers.discount = function() {
    //     newTotal = this.amount * .12;
    // }
    //
    // console.log(shoppers.discount());
    //
    // function numToDollars(num) {
    //     return '$' + num.toFixed(2);
    // }


    // shoppers.discountApplicable = function() {
    //     return this.amount >= 200;
    // };
    // shoppers.discountApplicable();
    //
    // shoppers.forEach(function(shopper) {
    //     shoppers.discountApplicable = function() {
    //         this.amount >= 200;
    //     };
    //     var neededForDiscount = 200 - shoppers[0].amount;
    //     var discount = .12;
    //     if (shoppers.amount < 200) {
    //         console.log(shoppers[0].name + " has a total of " + shoppers[0].amount + " and must spend " + neededForDiscount);
    //     }
    //     else if (shoppers.amount > 200) {
    //         console.log(shoppers.name + " has a total of " + shoppers.amount + " with a discount of " + discount + ". Their new total with applied discount is " + shoppers.amount*discount)
    //     }
    // })
    // dog.disableBreeding = function () {
    //     this.canBreed = false;
    // };


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */





    var books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Ghosts in the Mirror",
            author: {
                firstName: "Scary",
                lastName: "Mary"
            }
        },
        {
            title: "The Witch's Cry",
            author: {
                firstName: "Lady",
                lastName: "Scarlett"
            }
        },
        {
            title: "Tales of Terror and Treason",
            author: {
                firstName: "Shawn",
                lastName: "Larson"
            }
        },
        {
            title: "Hilda's Demise",
            author: {
                firstName: "Malice",
                lastName: "Macabre"
            }
        },
    ];

    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"


//     car.logMakeModel = function () {
//         console.log("Car make/model is: " + this.make + " " + this.model);
//     };
//
// // log the make/model
//     car.logMakeModel();

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book) {
    //     var bookTitle = book.title;
    //     var authorFirstName = book.author.firstName;
    //     console.log("Title: " + bookTitle + " Author: " + authorFirstName);
    // })

    for (var i = 0 ; i < books.length; i++) {
        console.log('Book #' + (i + 1));
        console.log(books[i].title);
        console.log(books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

    books.forEach(function(book, index) {
        var bookNumber = index + 1;
        console.log('Book #: ' + bookNumber);
        console.log(book.title);
        console.log(book.author.firstName + " " + book.author.lastName);
        console.log("---")

    })



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBookTitle() {
        var name
    }



    var newBook1 = {};
    var newBook2 = {};

    newBook1.title = "Happy Hippy/'s guide to a good time";
    newBook1.author = "Happy Hippy";
    newBook2.title = "Sad Times";
    newBook2.author = "Mary Graves";


    var newBooks = [
        {
        title: [newBook1, newBook2],
}
    ]

    newBooks.addOn = function (title, author) {
        var obj = {};
        obj.title = title;
        obj.author = author;
        newBooks.addOn.push(obj);
    }








})();