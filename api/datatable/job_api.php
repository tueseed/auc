<?php
    require('../../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    $peacode = $_GET["peacode"];
    $sql = "
            SELECT 
                *,
                DATEDIFF(now(),postg_date) AS day_now,
                (COALESCE(act_labor,0)+COALESCE(act_control,0)+COALESCE(act_tran,0)+COALESCE(act_general,0))/
	            (COALESCE(p_labor,0)+COALESCE(p_cocntrol,0)+COALESCE(p_tran,0)+COALESCE(p_general,0))*100 AS per
            FROM 
                tbl_job
            WHERE
                ba
            LIKE
                '$peacode%'
            AND
                wbs  NOT LIKE 'C-5%'"; //// ซ่อน F2 ไปก่อน
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
            
    echo json_encode($obj_case);
?>