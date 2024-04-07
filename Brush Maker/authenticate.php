<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $file = fopen('credentials.csv', 'r');
    while (($row = fgetcsv($file)) !== false) {
        if ($row[0] == $username && $row[1] == $password) {
            fclose($file);
            header("Location: Kanvas.html");
            exit();
        }
    }
    fclose($file);
    echo "Pogrešni podatci za prijavu, pokušaj ponovno!";
}
?>