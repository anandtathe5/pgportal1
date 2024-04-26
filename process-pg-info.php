<?php

$recipientEmail = 'anandtathemahrashtra@gmail.com';


$pgAddress = filter_input(INPUT_POST, 'pg_address', FILTER_SANITIZE_STRING);
$availableRooms = filter_input(INPUT_POST, 'available_rooms', FILTER_SANITIZE_NUMBER_INT);
$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);


$message = "PG Information:\n";
$message .= "Address: " . $pgAddress . "\n";
$message .= "Available Rooms: " . $availableRooms . "\n";
$message .= "Description:\n" . $description . "\n";


$mailSent = mail($recipientEmail, "PG Information Submission", $message);

if ($mailSent) {
  echo "Your PG information has been submitted successfully.";
} else {
  echo "There was an error sending your information. Please try again later.";
}
?>
