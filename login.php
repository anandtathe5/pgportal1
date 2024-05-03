<?php
session_start(); // Start the PHP session to enable session variables

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'project'); // Connect to the MySQL database

// REGISTER USER
if (isset($_POST['reg_user'])) { // Check if the registration form is submitted
  // receive all input values from the form
  $username = mysqli_real_escape_string($db, $_POST['username']); // Escape special characters in a string for use in an SQL statement
  $email = mysqli_real_escape_string($db, $_POST['email']); // Escape special characters in a string for use in an SQL statement
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']); // Escape special characters in a string for use in an SQL statement
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']); // Escape special characters in a string for use in an SQL statement

  // Form validation: ensure that the form is correctly filled by adding errors to $errors array
  if (empty($username)) { array_push($errors, "Username is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }
  if (empty($password_1)) { array_push($errors, "Password is required"); }
  if ($password_1 != $password_2) { // Check if passwords match
	array_push($errors, "The two passwords do not match");
  }

  // Check the database to make sure a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // If user exists
    if ($user['username'] === $username) { // Check if username already exists
      array_push($errors, "Username already exists");
    }

    if ($user['email'] === $email) { // Check if email already exists
      array_push($errors, "Email already exists");
    }
  }

  // Register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1); // Encrypt the password before saving in the database using md5 hash function

  	$query = "INSERT INTO users (username, email, password) 
  			  VALUES('$username', '$email', '$password')";
  	mysqli_query($db, $query); // Execute the SQL query to insert user data into the database
  	$_SESSION['username'] = $username; // Set session variables
  	$_SESSION['success'] = "You are now logged in";
  	header('location: index.php'); // Redirect to index.php after successful registration
  }
}

// LOGIN USER
if (isset($_POST['login_user'])) { // Check if the login form is submitted
  $username = mysqli_real_escape_string($db, $_POST['username']); // Escape special characters in a string for use in an SQL statement
  $password = mysqli_real_escape_string($db, $_POST['password']); // Escape special characters in a string for use in an SQL statement

  if (empty($username)) {
  	array_push($errors, "Username is required"); // Add error if username is empty
  }
  if (empty($password)) {
  	array_push($errors, "Password is required"); // Add error if password is empty
  }

  if (count($errors) == 0) {
  	$password = md5($password); // Encrypt the password before comparing with database

  	$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  	$results = mysqli_query($db, $query); // Execute the SQL query to retrieve user data

  	if (mysqli_num_rows($results) == 1) { // If a user is found with provided credentials
  	  $_SESSION['username'] = $username; // Set session variables
  	  $_SESSION['success'] = "You are now logged in";
  	  header('location: index.php'); // Redirect to index.php after successful login
  	} else {
  		array_push($errors, "Wrong username/password combination"); // Add error if username/password combination is incorrect
  	}
  }
}

?>
