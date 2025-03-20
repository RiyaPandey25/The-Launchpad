<?php
$servername = "localhost"; // Your MySQL server address
$username = "root";        // Your MySQL username
$password = "2501";            // Leave the password empty if there is no password set
$dbname = "books";      // The name of your database

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

// Close connection
mysqli_close($conn);
?>
