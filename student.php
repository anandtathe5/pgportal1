<?php

$pgData = array(
    "pune" => array(
        array(
            "name" => "PG 1 in Pune",
            "address" => "Address 1, Pune",
            "contact" => "1234567890"
        ),
        array(
            "name" => "PG 2 in Pune",
            "address" => "Address 2, Pune",
            "contact" => "9876543210"
        )
    ),
    "mumbai" => array(
        array(
            "name" => "PG 1 in Mumbai",
            "address" => "Address 1, Mumbai",
            "contact" => "4567891230"
        ),
        array(
            "name" => "PG 2 in Mumbai",
            "address" => "Address 2, Mumbai",
            "contact" => "7890123456"
        )
    ),
    
);


if (isset($_GET['city']) && array_key_exists($_GET['city'], $pgData)) {
    $city = $_GET['city'];
    $pgs = $pgData[$city];

    
    echo json_encode($pgs);
} else {
    
    echo json_encode([]);
}
?>
