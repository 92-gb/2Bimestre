<?php
$_con = mysqli_connect('127.0.0.1','root','','bd_anime_tech');
if($_con===FALSE) {
 echo "Não foi possível conectar ao Servidor de banco de dados ";
} else {
 echo "Foi possível conectar ao Servidor de banco de dados ";
 mysqli_close($_con);
}
?>