## Prompt 1
Add only a button to the page. When the button is clicked, display a "Welcome!" message below the button using the value of `userName`. 

Add comments to help me understand the JS code.

## Prompt 2
Allow the user to enter their name in an input field and display a fun personalized message on the page after clicking the button.

Copilot's Response:

## JS Review 

I am new to JavaScript. Please help me understand the basics of these concepts:  

- Variables  
  - Variables are used to store information (like numbers or text) that you want to use later in your code.  
  - In JavaScript, we use `let` to create a variable.  
  - Example:  
    ```javascript
    let name = "Sam";
    ```

- Strings and Concatenation  
  - A string is a type of variable that holds text.  
  - Concatenation means joining strings together.  
  - In JavaScript, you can join strings using the `+` sign.  
  - Example:  
    ```javascript
    let greeting = "Hello, " + name + "!";
    ```

- document.getElementById()  
  - This is a way to find an element on your web page using its `id`.  
  - It lets you work with that element in your JavaScript code.  
  - Example:  
    ```javascript
    let button = document.getElementById("myButton");
    ```

- addEventListener()  
  - This lets you run some code when something happens, like when a button is clicked.  
  - Example:  
    ```javascript
    button.addEventListener("click", function() {
      // code to run when button is clicked
    });
    ```
  - (You can also use `onclick` for simple cases.)

- console.log()  
  - This prints a message to the console (a tool for developers to see messages and errors).  
  - It's useful for checking your code.  
  - Example:  
    ```javascript
    console.log("Hello, world!");
    ```

- textContent  
  - This lets you change the text inside an HTML element.  
  - Example:  
    ```javascript
    let message = document.getElementById("welcomeMsg");
    message.textContent = "Welcome!";
    ```
