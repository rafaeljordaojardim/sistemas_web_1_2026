<?php
include "db.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$idade = $_POST["idade"];

$sql = "INSERT INTO alunos (nome,email,idade) VALUES ('$nome','$email', '$idade')";

mysqli_query($conn, $sql);

header("Location: index.php");


?>