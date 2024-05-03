<?php

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$facilities = $_POST["facilities"];
$roomCount = $_POST["roomCount"];
$price = $_POST["price"];
$location = $_POST["location"];

$sql = "INSERT INTO pg_facilities (facilities, room_count, price, location) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $facilities, $roomCount, $price, $location);
$stmt->execute();


$stmt->close();
$conn->close();

echo "Information uploaded successfully!";

?>
