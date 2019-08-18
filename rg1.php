<div class="card">
<div class="card-body">
    <table 
      id="tbl_data"
      data-toggle="table" 
      data-pagination="true"
      data-pagination-v-align="both"
      data-fixed-columns="true"
      data-sticky-header="true"
      data-search="true"
      data-page-list="[5, 10, 20, 100, ALL]"
      data-url="./api/datatable/job_api.php?peacode="
      data-page-size="5">
      <thead>
        <tr> 
        <th data-field="ba" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> ba</th>
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
<div class="card-footer">
<div class="float-left">
        <div class="dropup d-inline-block">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            คอลัมน์
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label class="dropdown-item" ><input type="checkbox" id="check_field" value="wbs" onclick="col(this.value)"/>&nbsp;WBS</label>
            <a class="dropdown-item" href="#" ><input id="check_field" type="checkbox" value="des" onclick="col(this.value)"/>&nbsp;รายละเอียด</a>
          </div>
        </div>
        </div>
</div>  
</div>
