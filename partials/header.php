<!DOCTYPE html>
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
    <style>
      * {
        font-family: 'Sarabun', 'Roboto', sans-serif;
      }
    </style>
  </head>

  <body>
    <header class="pb-3">
      <!-- Image and text -->
      <nav class="shadow-sm navbar navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand font-weight-bold" href="?action=rg">
            <img src="./assets/images/pea-logo.png" width="100" class="d-inline-block align-top" alt="">
            โปรแกรมติดตามงานก่อสร้างระบบไฟฟ้า
          </a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              <span class="header text-dark font-weight-bold text-center" id="user_logged">
                ยังไม่ได้เข้าสู่ระบบ
                <img src="http://dynamicwork.net/wp/wp-content/uploads/2014/01/logo-PEA.png" width="75" height="50">
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right justify-content-center">
                <div class="dropdown-item">
                  <img id="drop_img" src="http://dynamicwork.net/wp/wp-content/uploads/2014/01/logo-PEA.png" class="img-profile rounded-circle" width="50" height="50">
                </div>
                <div class="dropdown-item">
                  <i class="fas fa-user-tag fa-sm fa-fw mr-2 text-gray-400"></i>
                  <span id = "emp_name1"></span>
                </div>
                <div class="dropdown-item">
                  <i class="fas fa-building fa-sm fa-fw mr-2 text-gray-400"></i>
                  <span id = "office"></span>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="mb-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">