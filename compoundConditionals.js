// CODE ALONG

// 1. Create a secret username and password.
//  - The variables are declared already. Update the values.
let secretUsername = ("amely");
let secretPassword = ("1234");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");

    // 2. Create a compound conditional statement to check for the following:
    if (username === "amely" && password === "1234") {
        message.innerHTML = "Success!"
    } else if (username === "amely" && password !== "1234"){
        message.innerHTML = "Wrong password - be careful, don't mess this up too many times.";
    } else if (username !== "amely" && password !== "1234"){
        message.innerHTML = "Incorrect username and password. Hmm. Suspicious.";
    } else {
        message.innerHTML = "Something else is wrong.";
    }
    //  - If the username AND password is correct, update the text of the message div to say "Success!"

    // CODE SOLO
    // 3. Create additional compound conditionals that check for the following:
    //  - If the username is correct AND the password is incorrect, update the text of the message div to say "Wrong password - be careful, don't mess this up too many times."
    //  - If the password is incorrect AND the username is incorrect, update the text of the message div to say "Incorrect username and password. Hmm. Suspicious."
    //  - Finally, add a catch-all else statement (so, no conditions) which changes the text to "Something else is wrong."    

    // Bonus: If the username OR password fields are empty, update the text of the message div to say "You need to enter SOMETHING."
    //  - Hint: What string represents an "empty" message.
    
});
