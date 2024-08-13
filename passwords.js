// Define the passwords
const passwords = {
    uncommon: "uncommonPassword",
    rare: "rarePassword",
    special: "specialPassword"
};

// Function to check password
function checkPassword(correctPassword) {
    const userPassword = prompt("Enter the password to proceed:");
    if (userPassword === correctPassword) {
        alert("Access granted. You may proceed.");
        // Add the action you want to perform after successful password input
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Event listeners for each button
document.getElementById("uncommonButton").addEventListener("click", function() {
    checkPassword(passwords.uncommon);
});

document.getElementById("rareButton").addEventListener("click", function() {
    checkPassword(passwords.rare);
});

document.getElementById("specialButton").addEventListener("click", function() {
    checkPassword(passwords.special);
});
