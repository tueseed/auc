<?php
	require('../utils/db_connector.php');
	$peacode = $_POST["peacode"];
    $sql = "SELECT 
                * 
            FROM 
                tbl_office 
            WHERE 
                peacode 
            LIKE 
                '$peacode%'
            AND
                peacode
            LIKE
                '_____1'
			ORDER BY 
                peacode";//ภ4
	$query = mysqli_query($conn,$sql);
	$data = array();
    while($obj = mysqli_fetch_assoc($query))
    {
        array_push($data,$obj);
    }
    echo json_encode($data); 






?>