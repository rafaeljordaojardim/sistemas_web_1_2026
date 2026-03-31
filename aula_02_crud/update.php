<?php
include "db.php";

$id = $_POST["id"];
$nome = $_POST["nome"];
$email = $_POST["email"];
$idade = $_POST["idade"];

$sql = "UPDATE alunos SET nome='$nome', email='$email', idade='$idade' WHERE id=$id";

mysqli_query($conn, $sql);

header("Location: index.php");
?>
