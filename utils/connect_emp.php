<?php
// phpinfo()
	ini_set('display_errors', 1);
	error_reporting(~0);

   $serverName = "172.30.200.118";
   $userName = "MINIBI";
   $userPassword = "MINIBI";
   $dbName = "MINIBI";
  
   $connectionInfo = array("Database"=>$dbName, "UID"=>$userName, "PWD"=>$userPassword, "MultipleActiveResultSets"=>true);

   $conn = sqlsrv_connect( $serverName, $connectionInfo);

	if($conn)
	{
		echo "Database Connected.";
	}
	else
	{
		die( print_r( sqlsrv_errors(), true));
	}

	sqlsrv_close($conn);
?>