<?php
    require('../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    
    $wbs = $_POST["wbs"];
    //if($_POST["peacode"]){$peacode = $_POST["peacode"];}
    $sql = "
            SELECT
                 *,
                 DATEDIFF(now(),postg_date) AS day_now,
                 (COALESCE(act_labor,0)+COALESCE(act_control,0)+COALESCE(act_tran,0)+COALESCE(act_general,0))/
                 (COALESCE(p_labor,0)+COALESCE(p_cocntrol,0)+COALESCE(p_tran,0)+COALESCE(p_general,0))*100 AS per 
            FROM 
                tbl_job 
            WHERE wbs = '$wbs'";
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
            
    echo json_encode($obj_case);
?>