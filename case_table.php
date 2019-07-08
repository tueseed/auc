<div class="row">
    <h5 class="header text-primary font-weight-bold ml-3" id="head_case"></h5>
  <div class="col-sm-12 col-md-12 col-lg-12">
    <table 
      data-toggle="table" 
      data-pagination="true"
      data-pagination-v-align="both"
      data-fixed-columns="true"
      data-sticky-header="true"
      data-search="true"
      data-page-list="[5, 10, 20, 100, ALL]"
      data-url="./api/datatable/case_api.php"
      data-page-size="10">
      <thead>
        <tr> 
        <th data-field="w" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> หมายเลขงาน</th>
        <th data-field="date" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> วันที่ชำระเงิน</th>
        <th data-field="pln" data-sortable="true" data-formatter="textnumberFormatter"><i class="fas fa-bolt"></i> ค่าใช้จ่ายตามแผน</th>
        <th data-field="act" data-sortable="true" data-formatter="textnumberFormatter"><i class="fas fa-bolt"></i> ค่าใช้จ่ายจริง</th>
        <th data-field="per" data-sortable="true" data-formatter="textpercentFormatter"><i class="fas fa-bolt"></i> เปอร์เซนต์การเบิกจ่าย</th>
        <th data-field="tech_name" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> ผู้ควบคุมงาน</th>
        <th data-field="status" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> สถานะระบบ</th>
        <th data-field="u_status" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> สถานะผู้ใช้</th>
        </tr>
      </thead>
    </table>
  </div>