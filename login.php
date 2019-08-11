<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Est-Sap - โปรแกรมติดตามงานก่อสร้างระบบไฟฟ้า</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/theme_1545570683953.css">
    <link href="https://fonts.googleapis.com/css?family=Sarabun|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap-table-sticky-header.css">
    <link rel="stylesheet" href="./assets/css/effect.css">
    <script src="./scripts/login.js"></script>
    <style>
      * {
        font-family: 'Sarabun', 'Roboto', sans-serif;
      }
    </style>
  </head>

<div class="row">
    <div class="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
      <div class="animated fadeIn card shadow p-3">
        <div class="card-body">
          <p style="text-align:center;">
            <img src="http://dynamicwork.net/wp/wp-content/uploads/2014/01/logo-PEA.png" width="150" height="100">
          </p>
          <h6 class="card-title font-weight-bold text-center">
                โปรแกรมติดตามงานก่อสร้างระบบจำหน่าย
          </h6>
          <div class="dropdown-divider"></div>
            <div class="form-group" id="error-message"></div>
            <div class="form-group">
              <label for="employeeCode">
                <i class="fas fa-user-shield"></i> รหัสประจำตัวพนักงาน</label>
              <input type="text" class="form-control" id="employeeCode" name="employeeCode" aria-describedby="employeeCodeHelp" placeholder="Fill your employee code." autocomplete="off" autofocus="" required="">
              <small id="employeeCodeHelp" class="form-text text-muted">กรอกรหัสประจำตัวพนักงานของท่าน</small>
            </div>
            <div class="form-group">
              <label for="employeePassword"><i class="fas fa-key"></i> รหัสผ่านเข้าคอมพิวเตอร์</label>
              <input type="password" class="form-control" id="employeePassword" name="employeePassword" placeholder="Fill your password." required="">
            </div>
            <button type="button" class="btn btn-primary btn-block" onclick="call_auth()">เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  </div>

  <?php
    require("./partials/scripts.php");
  ?>