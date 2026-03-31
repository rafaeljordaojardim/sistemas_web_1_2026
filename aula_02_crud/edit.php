<?php 
    include "db.php";

    $id = $_GET["id"];

    $sql = "SELECT * FROM alunos WHERE id=$id";
?>