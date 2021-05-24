let user = prompt("Who's there?");
let password;

if(user === "Admin") {
    password = prompt("Please enter the password.")

    if(password === "TheMaster") {
        alert("Welcome!");
    } else if(password === '' || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password.");
    }

} else if(user === '' || user === null) {
    alert("Canceled");
} else {
    alert("I don't know you.")
}