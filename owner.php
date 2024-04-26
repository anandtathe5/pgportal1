<?php

// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$facilities = $_POST["facilities"];
$roomCount = $_POST["roomCount"];
$price = $_POST["price"];
$location = $_POST["location"];

// Prepare and execute SQL statement (prevents SQL injection)
$sql = "INSERT INTO pg_facilities (facilities, room_count, price, location) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $facilities, $roomCount, $price, $location);
$stmt->execute();

// Close connection
$stmt->close();
$conn->close();

// Display success message (optional)
echo "Information uploaded successfully!";

?>
