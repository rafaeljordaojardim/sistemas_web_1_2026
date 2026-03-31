
<?php
    include "db.php";

    $sql = "SELECT * FROM alunos";

    $resultado = mysqli_query($conn, $sql);
?>

<h2>Lista de Alunos</h2>

<a href="create.php" class="btn">Novo Aluno</a>

<table>
    <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
        <th>Ações</th>
    </tr>

    <?php while($row = mysqli_fetch_assoc($resultado)) { ?>
     <tr>
        <td> <?php echo $row["id"]; ?> </td>
        <td> <?php echo $row["nome"]; ?> </td>
        <td> <?php echo $row["email"]; ?> </td>
        <td> <?php echo $row["idade"]; ?> </td>
        <td> 
            <a href="delete.php?id=<?php echo $row["id"]; ?>" class="btn btn-danger">Excluir</a>
            <a href="edit.php?id=<?php echo $row["id"]; ?>" class="btn btn-success">Editar</a>
        </td>
     </tr>

     <?php } ?>
</table>

