<?php
    require('../utils/db_connector.php');
    $sql = "SELECT 
	                *
            FROM 
	                tbl_office 
            WHERE 
	                (
		                (peacode LIKE 'J%' OR peacode LIKE 'K%' OR peacode LIKE 'L%') 
		            AND 
		                peacode LIKE '___1%'
	                ) 
		        OR 
	                (
		                (peacode LIKE 'J%' OR peacode LIKE 'K%' OR peacode LIKE 'L%') 
		            AND 
		                peacode LIKE '%00000'
                    )
            ORDER BY peacode";//ภ4






?>