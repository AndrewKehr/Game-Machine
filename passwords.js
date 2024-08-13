// Define the passwords
const passwords = {
    uncommon: "Redisbest",
    rare: "Bluechip",
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
