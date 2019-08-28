<?php
    require('../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    
    $peacode = $_POST["peacode"];
    //if($_POST["peacode"]){$peacode = $_POST["peacode"];}
    $sql = "
                SELECT 
	                user_status,
	                COUNT(user_status) AS num_wbs,
	                (SUM(act))/1000000 AS val 
                FROM 
	                tbl_job 
                WHERE 
	                ba 
                LIKE 
                    '$peacode%'
                AND
                    wbs NOT LIKE 'C-5%' 
                GROUP BY 
                    user_status
                ORDER BY
                    user_status";
        //     WHERE 
        //     office_name LIKE '%$pea_name%'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
            
    echo json_encode($obj_case);
?>