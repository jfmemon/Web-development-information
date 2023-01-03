<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
</head>

<?php

include 'connection.php';

$query = "SELECT * FROM info";

$run = mysqli_query($con, $query);

if(mysqli_num_rows($run) > 0){
    echo "<table><tr><th>NAME</th><th>PASSWORD</th><th>Options</th></tr>";
    while($row = mysqli_fetch_assoc($run)){
        echo "<tr>
                    <td>".$row["username"]."</td>
                    <td>".$row["password"]."</td>
                    <td>
                    <button>Edit</button>
                    </td>
            </tr>";
    }
    echo "</table>";
} else{
    echo "0 rows found";
}

?>

</html>