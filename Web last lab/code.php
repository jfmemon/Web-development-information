<?php

include 'connection.php';

 $username = $_POST["username"];
 $password = $_POST["password"];

$query = "INSERT INTO info(username, password) VALUES('$username', '$password')";
$run = mysqli_query($con, $query);

if(!$run){
    echo "<br>submission failed!";
} else{
    header("Location: list.php");
    exit();
}

?>