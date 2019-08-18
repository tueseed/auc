<?php
    require('../../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    $peacode = $_GET["peacode"];
    $sql = "
            SELECT 
                *,
                DATEDIFF(now(),postg_date) AS day_now
            FROM 
                tbl_job
            WHERE
                ba
            LIKE
                '$peacode%'";
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
            
    echo json_encode($obj_case);
?>