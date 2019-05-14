<?php
	require('../connect-db.php');
	// case1
	$sql_case1 = "SELECT * FROM tbl_rbr WHERE DATEDIFF(NOW(),date) > 180 AND per > 70 AND (status LIKE '%CLSD%' OR status LIKE '%REL%')";
	$query_case1 = mysqli_query($conn,$sql_case1);
	$numcase1 = mysqli_num_rows($query_case1);
	//case2
	$sql_case2 = "SELECT * FROM tbl_rbr WHERE DATEDIFF(NOW(),date) < 180 AND per > 70 AND (status LIKE '%CLSD%' OR status LIKE '%REL%')";
	$query_case2 = mysqli_query($conn,$sql_case2);
	$numcase2 = mysqli_num_rows($query_case2);
	//case3
	$sql_case3 = "SELECT * FROM tbl_rbr WHERE DATEDIFF(NOW(),date) > 180 AND per < 70 AND (status LIKE '%CLSD%' OR status LIKE '%REL%')";
	$query_case3 = mysqli_query($conn,$sql_case3);
	$numcase3 = mysqli_num_rows($query_case3);
	///// status
	$sql_status = "SELECT status,count(status) AS num,round(sum(act),2) AS total_act_sts FROM tbl_rbr GROUP BY status ORDER BY CASE WHEN status = 'REL ' THEN 1 WHEN status = 'TECO' THEN 2 WHEN status = 'CLSD' THEN 3 END";
	$query_status = mysqli_query($conn,$sql_status);
	$sts = array();
	while($obj_sts = mysqli_fetch_assoc($query_status))
	{
		array_push($sts,$obj_sts);
	}
	
	$data = array("numcase1"=>$numcase1,"numcase2"=>$numcase2,"numcase3"=>$numcase3,"sts"=>$sts);
	echo json_encode($data);
?>