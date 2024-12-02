function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // You can add your login logic here, e.g., send the data to a server for authentication
    // For this example, we'll just display the entered email and password in the console
    console.log("Email: " + email);
    console.log("Password: " + password);
  }