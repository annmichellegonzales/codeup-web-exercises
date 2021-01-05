// // - brandName
// // - type
// // - volumeInLiters
// // - priceInCents
// // - expirationDate
// // - datesOfPreviousSips (use an array of strings)
// // - isOpen
//
// var beverage1 = {
//     brandName: "Butter Beer",
//     type: "Cream soda",
//     volumeInLiters: "1",
//     priceInCents: "150",
//     experationDate: "05 FEB 2021",
//     datesOfPreviousSips: ["01 JUN 1984", "0 JUN 1984"],
//     isOpen: true,
// }
//
// beverage2 = {};
// beverage2.brandName = "Peksi";
//
// console.log(beverage2);
//
//
// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34,
//     },
//     {
//         givenName: 'Karen',
//         age: 43,
//     }
// ]
//
// console.log(users[0].givenName, users[1].givenName, users[2].givenName);
//
//
// users.forEach(function (user) {
//     user.givenName = "John Doe";
// })
//
// console.log(users);

// Create a dog object...
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     canBreed (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log “Woof!”
//     getOlder() - will increase age by 1
// disableBreeding() - will set canBreed to false
// vaccinate(nameOfVaccination) - takes in an argument for the name of the vaccination and adds a new shot with the current date to the shotRecords array

var shotRecord = {};
var shotRecord2 = {};

shotRecord.name = "Parvo";
shotRecord.date = "01 JAN 2021";
shotRecord2.name = "Rabies";
shotRecord2.date = "02 JAN 2021";

var dog = {
        breed: "Yorkie",
        age: 5,
        color: "tan",
        canBreed: true,
        shotRecords: [shotRecord, shotRecord2],
        bark: function() {
            console.log("Woof!")
        },
        getOlder: function() {
            this.age += 1;
        },
    }

dog.disableBreeding = function () {
    this.canBreed = false;
};

dog.vaccinate = function (date, name) {
    var obj = {};
    obj.date = date;
    obj.name = name;
    dog.shotRecords.push(obj);
}


dog.disableBreeding();
dog.getOlder();
dog.vaccinate("01 JAN 2021", "Parvo");
console.log(dog);
dog.bark();















