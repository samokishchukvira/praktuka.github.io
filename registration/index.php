<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="icon" href="images/people.png" type="image/png">
</head>
<body>
    <div class="container" id="signUp" style="display: none;">
        <h1 class="form-title">Register</h1>
        <form method="post" action="register.php">
            <div class="input-group">
                <i class="fas fa-user"></i>
                <input type="text" name="fName" id="fName" placeholder="First Name" maxlength="50" required>
                <label for="fname">First Name</label>
            </div>
            <div class="input-group">
                <i class="fas fa-user"></i>
                <input type="text" name="lName" id="lName" placeholder="Last Name" maxlength="50" required>
                <label for="lName">Last Name</label>
            </div>
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" name="email" id="email" placeholder="Email" maxlength="100" required>
                <label for="email">Email</label>
            </div>
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="Password" maxlength="255" required>
                <label for="password">Password</label>
            </div>
            <input type="submit" class="btn" value="Sign Up" name="signUp">
        </form>
        <p class="or">
            or
        </p>
        <div class="icons">
        <a href="https://www.google.com.ua/?hl=uk" class="google-signin-btn">
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.facebook.com/?locale=uk_UA" class="google-signin-btn">
            <i class="fab fa-facebook"></i>
        </a>
        </div>
        <div class="links">
            <p>Already Have Account?</p>
            <button id="signInButton">Sign In</button>
        </div>
    </div>

    <div class="container" id="signIn" style="display: block;">
        <h1 class="form-title">Sign In</h1>
        <form method="post" action="register.php">
            
            <div class="input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" name="email" id="email" placeholder="Email" required>
                <label for="email">Email</label>
            </div>
            <div class="input-group">
                <i class="fas fa-lock"></i>
                <input type="password" name="password" id="password" placeholder="Password" required>
                <label for="password">Password</label>
            </div>
            <p class="recover">
                <a href="#">Recover Password</a>
            </p>
            <input type="submit" class="btn" value="Sign In" name="signIn">
        </form>
        <p class="or">
           or
        </p>
        <div class="icons">
        <a href="https://www.google.com.ua/?hl=uk" class="google-signin-btn">
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.facebook.com/?locale=uk_UA" class="google-signin-btn">
            <i class="fab fa-facebook"></i>
        </a>        
    </div>
        <div class="links">
            <p>Don`t have account yet?</p>
            <button id="signUpButton">Sign Up</button>
        </div>
    </div>
     
    <script src="js/script.js"></script>
</body>
</html>