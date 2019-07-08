<?php

  ini_set('display_errors', 1);
	error_reporting(~0);

  // $url = parse_url(getenv("CLEARDB_DATABASE_URL"));

  $server = "localhost";
	$username = "root";
	$password = "";
  $db = "auc";
  

	
  $conn = new mysqli($server, $username, $password, $db);

	// $conn = mysqli_connect($serverName, $userName, $userPassword, $dbName, $db_port) or die('Unable to establish a CRM_BU connection');
  $conn->set_charset("utf8");
