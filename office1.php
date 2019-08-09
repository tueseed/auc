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
      data-url="./api/datatable/job_api.php?pea_name=<?=$_GET['peaname']?>"
      data-page-size="10">
      <thead>
        <tr> 
        <th data-field="wbs" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> WBS</th>
        <th data-field="description" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> คำอธิบาย</th>
        <th data-field="office_name" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> หน่วยงาน</th>
        <th data-field="user_status" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> สถานะผู้ใช้</th>
        <th data-field="network" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> โครงข่าย</th>
        <th data-field="postg_date" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> วันที่เบิกของครั้งแรก</th>
        <th data-field="day_now" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> จำนวนวัน</th>
        <th data-field="percent" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> ค่าแรง%</th>
        <th data-field="tech_name" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> ผู้ควบคุมงาน</th>
        <th data-field="tech_id" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> รหัสพนักงาน</th>
        </tr>
      </thead>
    </table>
  </div>