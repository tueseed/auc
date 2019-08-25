<?php
require('../utils/connect_emp.php');
$emp_id = $_POST["emp_id"];
$emp_sub = substr($emp_id,-6);
$sql = "SELECT DEPT_SHORT FROM CMNDB_EMPLOYEE_INFO WHERE EMPLOYEE_ID LIKE '__$emp_sub'"; 
$stmt = sqlsrv_query( $conn, $sql);
$obj = sqlsrv_fetch_array($stmt,SQLSRV_FETCH_ASSOC);
echo json_encode($obj);
sqlsrv_close($conn);
?>