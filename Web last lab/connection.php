<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "test";

$con = mysqli_connect($host, $user, $password, $db);

if(!$con){
    echo "Connection failed!";
} else{
    echo "Connection successful!";
}

?>