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
                (COALESCE(act_labor,0)+COALESCE(act_control,0)+COALESCE(act_tran,0)+COALESCE(act_general,0))/
                (COALESCE(p_labor,0)+COALESCE(p_cocntrol,0)+COALESCE(p_tran,0)+COALESCE(p_general,0))*100 AS per,
                act,
                tech_name,
                tech_id
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
    $spreadsheet->getActiveSheet()->setCellValue('B1', 'หน่วยงาน');
    $spreadsheet->getActiveSheet()->setCellValue('C1', 'องค์ประกอบ WBS');
    $spreadsheet->getActiveSheet()->setCellValue('D1', 'คำอธิบาย');
    $spreadsheet->getActiveSheet()->setCellValue('E1', 'สถานะผู้ใช้');
    $spreadsheet->getActiveSheet()->setCellValue('F1', 'วันที่เบิกของครั้งแรก');
    $spreadsheet->getActiveSheet()->setCellValue('G1', 'จำนวนวัน');
    $spreadsheet->getActiveSheet()->setCellValue('H1', 'ค่าแรง(%)');
    $spreadsheet->getActiveSheet()->setCellValue('I1', 'ค่าใช้จ่ายหน้างาน(%)');
    $spreadsheet->getActiveSheet()->setCellValue('J1', 'ค่าพัสดุ+ค่าใช้จ่ายหน้างาน');
    $spreadsheet->getActiveSheet()->setCellValue('K1', 'ผู้ควบคุมงาน');
    $spreadsheet->getActiveSheet()->setCellValue('L1', 'รหัสพนักงาน');
    




    $spreadsheet->getActiveSheet()->fromArray($obj, null, 'A2');
    

    // style
    // $spreadsheet->getActiveSheet()->getStyle('A2')
    //     ->getNumberFormat()
    //     ->setFormatCode(
    //         \PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1
    //     );
    $spreadsheet->getActiveSheet()->getStyle('A1:L1')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('ffff00');




    $writer = new Xlsx($spreadsheet);
    
    // save file to server and create link
    // $writer->save('excel/itoffside.xlsx');
    //  echo '<a href="excel/itoffside.xlsx">Download Excel</a>';

     // save with browser
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment; filename="itoffside.xlsx"');
    $writer->save('php://output');


?>