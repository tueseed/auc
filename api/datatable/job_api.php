<?php
    require('../../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    //$pea_name = $_GET["pea_name"];
    $sql = "
            SELECT 
                    *,
                    DATEDIFF(now(),postg_date) AS day_now
            FROM tbl_job";
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
            
    echo json_encode($obj_case);
?>