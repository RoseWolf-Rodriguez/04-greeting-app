// Get the input, button, and message elements from the page
let nameInput = document.getElementById("nameInput");
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

// Add a click event to the button
welcomeBtn.onclick = function() {
  // Get the user's name from the input field
  let userName = nameInput.value;

  // Check if the user entered a name
  if (userName === "") {
    // If no name is entered, ask the user to enter one
    welcomeMsg.textContent = "Please enter your name!";
  } else {
    // Show a fun personalized message using the user's name
    welcomeMsg.textContent = "Welcome, " + userName + "! 🎉 You are awesome!";
  }

  // Clear the input field after clicking the button
  nameInput.value = "";
};