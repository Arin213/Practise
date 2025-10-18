const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises


// 1) What is Madison Marshall's user id?
// solution:

const userID = users.filter(Name => Name.firstName === 'Madison' && Name.lastName === 'Marshall')
    .map(getId => getId.id);

console.log(userID);

                // or
const getId = users.reduce((acc, current) => {
    if (current.firstName === 'Madison' && current.lastName === "Marshall") {
        acc.push(current.id);
    }
    return acc;

}, []);
console.log(getId);

                            // or
const userIdFind = users.find(findId => findId.firstName === "Madison" && findId.lastName === "Marshall");
console.log(userIdFind);

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
// solution:

const firstComment = comments[0];
// console.log(firstComment.userId);
const userName = users.filter(userid => userid.id === firstComment.userId)
    .map(getName => {
        return getName.firstName + " " + getName.lastName;

    });

console.log(userName + " " + "wrote the first comment !");

                            // or
const getFirstComment = users.find(firstComment => firstComment.id === comments[0].userId);
console.log(getFirstComment);
// 3) Which user commented 'OK great thanks'?
// solution:

const userComment = comments.filter(commet => commet.text === 'OK great thanks')
// console.log(userComment[0].userId);
const getUserName = users.reduce((acc, current) => {
    if (current.id == userComment[0].userId) {
        acc.push(current.firstName + " " + current.lastName);
    }
    return acc;

}, []);

console.log(getUserName);

                            // or
const whoComment = users.find(user => user.id === comments.find(user => user.text === 'OK great thanks'));
console.log(whoComment);

// 4) Add the user's first and last name to each comment in the comments array
// solution:
const getfirstAndLastname = comments.map(comment => {
    const addName = users.reduce((acc, current) => {
        if (comment.userId === current.id) {
            acc['userName'] = current.firstName + " " + current.lastName;
        }
        return acc;
    }, {});
    return { ...comment, ...addName };
});

console.log(getfirstAndLastname);

// 5) Get a list of the users who haven't commented
// solution:

const userNoComment = users.map(userid => {
    const getCommentUser = comments.reduce((acc, current) => {

        /* 
            for users id goes   to every id of comments and matches untl last
            and if the mathces stays at true then it return true and even the last return is false 
            because acc works like that collect every returns  if true, true and finally false still stays true 
            thre is no reset for acc to false: 
        */ 
        if (userid.id === current.userId) {
            acc = true; //user has commented
        }
        return acc;
    }, false);
    return getCommentUser ? null :{
        ...userid, 
        userWithoutComment: `${userid.firstName} ${userid.lastName}` 
    };


})
.filter(Boolean); //removenulls

console.log(userNoComment);


