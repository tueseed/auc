<?php
  session_start();
  
  $IDMAuthenKey = '3a243291-44d0-4171-8b17-347cfc1472ea';
  $EmployeeAuthenKey = '93567815-dfbb-4727-b4da-ce42c046bfca';
  $IDMGateWay = 'http://idm-ws.pea.co.th/IdmServices.asmx?wsdl';
  $EmployeeGateWay = 'http://idm-ws.pea.co.th/employeeservices.asmx?wsdl';

  $data = [
    'WSAuthenKey' => $IDMAuthenKey,
    'Username' => $_POST["UserName"], 
    'Password' => $_POST["PassWord"]
  ];

  try {
    $client = new SoapClient($IDMGateWay);
    $loginResult = $client->Login_SI($data);
  } catch (Exception $e) { 
    header("HTTP/1.1 500 เกิดข้อผิดพลาดจากระบบยืนยันตัวตน");
    exit(0);
  }

  $loginResultJSON = json_decode(json_encode($loginResult), TRUE);

  $responseCode = $loginResultJSON['Login_SIResult']['ResponseCode'];
  if($responseCode !== "WSV0000"){
    $responseMsg = $loginResultJSON['Login_SIResult']['ResponseMsg'];
    header("HTTP/1.1 401 $responseMsg");
    exit(1);
  }

  $userId = $loginResultJSON['Login_SIResult']['ResultObject']['UserId'];
  $data = [
    'request' => [
      'WSAuthenKey' => $EmployeeAuthenKey,
      'InputObject' => [
        'UserId' => $userId
      ]
    ]
  ];
  try {
    $employeeWSClient = new SoapClient($EmployeeGateWay);
    $employeeInfo = $employeeWSClient->GetEmployeeInfoByUserId($data);
  } catch (Exception $e) { 
    header("HTTP/1.1 500 เกิดข้อผิดพลาดจากระบบยืนยันตัวตน");
    exit(1);
  }
  $employeeResultsJSON = json_decode(json_encode($employeeInfo), TRUE);
  $responseCode = $employeeResultsJSON['GetEmployeeInfoByUserIdResult']['ResponseCode'];
  if($responseCode !== "WSV0000")
  {
    header("HTTP/1.1 500 Webservice_เกิดข้อผิดพลาด");
    exit(1);
  }
  $employee_data = $employeeResultsJSON['GetEmployeeInfoByUserIdResult']['ResultObject'];
  $_SESSION['isLogin'] = true;
  echo json_encode($employee_data);
  header("HTTP/1.1 200 Login successfully");
  exit(0);