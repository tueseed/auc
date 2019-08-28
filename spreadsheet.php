<?php
    require('utils/db_connector.php');
    require 'vendor/autoload.php';
    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;


    $office = $_GET["office"];
    //select from sql
    $sql= "
            SELECT 
                ba,
                office_name,
                wbs,
                description,
                user_status,
                postg_date,
                DATEDIFF(now(),postg_date) AS day_now,
                percent,
                
            FROM 
                tbl_job
            WHERE
                ba
            LIKE
                '$office%'";
    $query = mysqli_query($conn,$sql);
    $obj = mysqli_fetch_all($query,MYSQLI_ASSOC);


    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();

    // cell value
    $spreadsheet->getActiveSheet()->setCellValue('A1', 'รหัสการไฟฟ้า');
    $spreadsheet->getActiveSheet()->setCellValue('B1', 'องค์ประกอบ WBS');
    $spreadsheet->getActiveSheet()->setCellValue('C1', 'คำอธิบายงาน');




    $spreadsheet->getActiveSheet()->fromArray($obj, null, 'A2');
    

    // style
    // $spreadsheet->getActiveSheet()->getStyle('A2')
    //     ->getNumberFormat()
    //     ->setFormatCode(
    //         \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1
    //     );

    $writer = new Xlsx($spreadsheet);
    
    // save file to server and create link
    // $writer->save('excel/itoffside.xlsx');
    //  echo '<a href="excel/itoffside.xlsx">Download Excel</a>';

     // save with browser
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment; filename="itoffside.xlsx"');
    $writer->save('php://output');


?>