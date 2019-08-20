<div class="row ml-2 mr-2">
  <div class="col-lg-2">
    <div class="card mt-2">
      <div class="card-header">
      <span class="font-weight-bold text-primary">สถานะงาน C1(กำลังก่อสร้าง)</span>
      </div>
      <div class="card-body">
        <!-- <div class="text-center" style="font-size:50px;">
          <span class="font-weight-bold text-danger" id="high_load">--</span>
        </div>
        <div class="float-right" style="font-size:14px;">
              <span class="font-weight-bold text-danger">เครื่อง</span>
        </div> -->
        <div class="font-weight-bold text-primary float-left" tyle="font-size:14px;">
          <p  id="c1_num"><i class="fas fa-folder-open"></i></p>
          <p  id="c1_num"><i class="fas fa-dollar-sign"></i></p>
        </div>
        <div class="font-weight-bold text-primary float-right" tyle="font-size:14px;">
          <p  id="c1_num">จำนวน 25 งาน</p>
          <p  id="c1_num">มูลค่า 2.5 ล้านบาท</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row mt-3 ml-2 mr-2">

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
          <th data-field="ba" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> รหัสการไฟฟ้า</th>
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
          <th data-field="act" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-bolt"></i> ค่าใช้จ่าย</th>
          </tr>
        </thead>
      </table>
  </div> 
<div class="card-footer">
  <div class="float-left">
        <!-- <div class="dropup d-inline-block">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            คอลัมน์
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label class="dropdown-item" ><input type="checkbox" id="wbs" value="wbs" onclick="col(this.value)" checked/>&nbsp;WBS</label>
            <a class="dropdown-item" href="#" ><input id="description" type="checkbox" value="description" onclick="col(this.value)" checked/>&nbsp;รายละเอียด</a>
          </div>
        </div> -->
        <button class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal"  data-target="#column_modal">
          คอลัมน์
        </button>
  </div>
</div>  
</div>

<div class='modal fade' tabindex='-1' role='dialog' id='column_modal'>
  <div class='modal-dialog modal-lg' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">เลือกกการแสดงคอลัมน์ <span id="pea_no"></span></h5>
        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div class='modal-body'>
        <div class="row">
          <div class="col-lg-4">
            <label class="dropdown-item" ><input type="checkbox" id="ba" value="ba" onclick="col(this.value)" checked/>&nbsp;รหัสการไฟฟ้า</label>
            <label class="dropdown-item" ><input type="checkbox" id="wbs" value="wbs" onclick="col(this.value)" checked/>&nbsp;WBS</label> 
            <label class="dropdown-item" ><input type="checkbox" id="description" value="description" onclick="col(this.value)" checked/>&nbsp;คำอธิบาย</label> 
            <label class="dropdown-item" ><input type="checkbox" id="office_name" value="office_name" onclick="col(this.value)" checked/>&nbsp;หน่วยงาน</label>
          </div>
          <div class="col-lg-4">
            <label class="dropdown-item" ><input type="checkbox" id="user_status" value="user_status" onclick="col(this.value)" checked/>&nbsp;สถานะผู้ใช้</label> 
            <label class="dropdown-item" ><input type="checkbox" id="network" value="network" onclick="col(this.value)" checked/>&nbsp;เลขที่โครงข่าย</label>
            <label class="dropdown-item" ><input type="checkbox" id="postg_date" value="postg_date" onclick="col(this.value)" checked/>&nbsp;วันที่เบิกของครั้งแรก</label> 
            <label class="dropdown-item" ><input type="checkbox" id="day_now" value="day_now" onclick="col(this.value)" checked/>&nbsp;จำนวนวัน</label> 
          </div>
          <div class="col-lg-4">
            <label class="dropdown-item" ><input type="checkbox" id="percent" value="percent" onclick="col(this.value)" checked/>&nbsp;ค่าแรง(%)</label> 
            <label class="dropdown-item" ><input type="checkbox" id="tech_name" value="tech_name" onclick="col(this.value)" checked/>&nbsp;ชื่อ-สกุล</label>
            <label class="dropdown-item" ><input type="checkbox" id="tech_id" value="tech_id" onclick="col(this.value)" checked/>&nbsp;รหัสพนักงาน</label> 
            <label class="dropdown-item" ><input type="checkbox" id="act" value="act" onclick="col(this.value)" checked/>&nbsp;ค่าใช้จ่ายจริง</label> 
          </div>
                  
        </div> 
      </div>
                        
    </div>
  </div>
</div>
</div>
