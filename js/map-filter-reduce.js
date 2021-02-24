const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// console.log(users);

{
    let threeLanguages = users.filter(function (user) {
        return user.languages.length >= 3;

    });
    console.log(threeLanguages);



    let emails = users.map(function (user) {
        return user.email;
    });
    console.log(emails);



    let yearsOfExp = users.map(function (user) {
        return user.yearsOfExperience;
    });
    console.log(yearsOfExp);

    let yearsOfXP = yearsOfExp.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(yearsOfXP);

    let averageYears = yearsOfExp.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue / users.length;
    }, 0)
    console.log(averageYears);





    let longestEmail = emails.reduce(function(a, b) {
        return a.length > b.length ? a:b
    });
    console.log(longestEmail);



    let userNames = users.map(function(user) {
        return user.name;
    });
    console.log(userNames);
    let usersString = userNames.reduce(function(accumulator, currentValue) {
        return accumulator + ', ' + currentValue;
    });
    console.log(usersString);



    let languages = users.map(function (user) {
        return user.languages;
    });
    console.log(languages);
    let uniqueLanguages = languages.reduce(function (value, index, self) {
        return self.indexOf(value) === index;
    });
    console.log(uniqueLanguages);


    


}

