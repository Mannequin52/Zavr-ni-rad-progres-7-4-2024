<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $data = array($username, $password);

    $file = fopen('credentials.csv', 'a');
    fputcsv($file, $data);
    fclose($file);

    echo "Uspješno ste registrirani!";
}
?>