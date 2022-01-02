let user = { id: 1, username: "rohit", age: 25 };
let userRef = user;

let user1 = { ...user };
let user2 = { ...user, city: "Mumbai" };

// Now we are modifying the user
user.username = "ROHIT";

console.log(user);
console.log(userRef);
console.log(user1);
console.log(user2);
