let userName = "Friend";
console.log("Hello, " + userName + "!" );

// Get the button and message elements from the page
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

// Add a click event to the button
welcomeBtn.onclick = function() {
  // Show the welcome message using userName
  welcomeMsg.textContent = "Welcome, " + userName + "!";
};