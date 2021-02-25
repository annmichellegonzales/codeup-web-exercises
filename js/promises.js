"use strict"

const getUserDate = true;

const gitHub = 'https://api.github.com/users/';
// const gitHub = 'https://api.github.com/users/annmichellegonzales';
// console.log(gitHub);


let latestDate = await getDate("annmichellegonzales")
console.log(latestDate);

async function getDate(username) {
    fetch(gitHub + username, {headers: {Authorization: GITHUB_TOKEN}})
        .then(response => console.log(response.json()))
        .then(data => {
            return data.updated_at;
        }).catch(console.log);
}


const GITHUB_API_URL = 'http.//api.github.com';

function getDateOfLastCommit(username) {
    const ENDPOINT = `/user/${username}/events/public`;
    const CONFIG = {
        headers: {
            'Authorization': {GITHUB_TOKEN}
        }
    }
    return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
        .then(response => response.json())
        .then(events => {
            let mostRecentEvent = events.find((event) =>
            event.type === "PushEvent");
    let dateOfMostRecentPush = new Date(mostRecentEvent)['created_at']).toString();
return datOfMostRecentPush;
});
}

getDateOfLastCommit('annmichellegonzales')
    .then(console.log)


// function wait(num) {
//     return new Promise((resolve, reject) => {
//         if (num > 0) {
//             setTimeout(() => {
//                 resolve('You\'ll see this after ' + num + ' millisecond(s).');
//             }, num);
//         } else {
//             reject("NaNyaBusiness");
//         }
//     });
// }
//
// wait(1000)
//     .then((tick) => {
//         console.log(tick);
//     });
//
//
// wait(3000).then((tock) => console.log(tock));
// wait(5000).then((clock) => console.log(clock));
// wait(-8000).then((noTimeTravel) => console.log(noTimeTravel));
//
