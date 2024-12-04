<?php 
session_start();
include("connect.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="icon" href="images/people.png" type="image/png">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
        }
        .container {
            text-align: center;
            padding: 10% 0;
        }
        .greeting {
            font-size: 50px;
            font-weight: bold;
            color: #ff3b3b; 
            margin-bottom: 20px;
        }
        .text {
            font-size: 24px;
            color: #ccc;
        }
        .logout {
            display: block; 
            max-width: 400px;
            margin: 20px auto; 
            padding: 10px 20px;
            background-color: #ff3b3b;
            color: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s;
            text-align: center; 
        }
        .logout:hover {
            background-color: #cc0000;
        }
        img {
            width: 24px;
            height: 24px;
        }
    </style>
</head>
<body>
    <div class="container">
        <p class="greeting">
            We welcome you <?php
                if(isset($_SESSION['email'])){
                    $email = $_SESSION['email'];
                    $query = mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
                    while($row = mysqli_fetch_array($query)){
                        echo $row['firstName'].' '.$row['lastName'];
                    }
                }
            ?>
            to our gym
        </p>
        <p class="text">
            Enjoy your training with us!
            <img src="images/logo.png" alt="Logo">
        </p> 
        <a href="plan.html" class="logout">Choose your plan in our gym <img src="images/click.png" alt="click"></a>
        <a href="logout.php" class="logout">Logout</a>
    </div>
</body>
</html>
