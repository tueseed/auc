<?php
    require('../utils/db_connector.php');
    $wbs = $_POST["wbs"];
    $u_number = $_POST["u_number"];
    $u_name = $_POST["u_name"];
    $msg = $_POST["msg"];
    $sql = "
                INSERT INTO 
                    tbl_msg(wbs,u_number,u_name,datetime,msg) 
                    VALUES('$wbs','$u_number','$u_name',NOW(),'$msg')";
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    mysqli_query($conn,$sql);
?>