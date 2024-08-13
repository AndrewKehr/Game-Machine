// Define the passwords
const passwords = {
    uncommon: "Bluechip",
    rare: "Redisbest",
    special: "Purple!"
};

// Function to check password and trigger pullGacha
function checkPasswordAndPullGacha(correctPassword, gachaType) {
    const userPassword = prompt("Enter the password to proceed:");
    if (userPassword === correctPassword) {
        pullGacha(gachaType);
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Event listeners for each password-protected pull
document.getElementById("uncommonButton").addEventListener("click", function() {
    checkPasswordAndPullGacha(passwords.uncommon, 'uncommon');
});

document.getElementById("rareButton").addEventListener("click", function() {
    checkPasswordAndPullGacha(passwords.rare, 'rare');
});

document.getElementById("specialButton").addEventListener("click", function() {
    checkPasswordAndPullGacha(passwords.special, 'special');
});
