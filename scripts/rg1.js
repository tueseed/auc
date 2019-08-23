var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab")
var $table = $('#tbl_data')
$table.bootstrapTable('hideColumn', 'ba')

function col(val)
{
   var $table = $('#tbl_data')
   
  $("#"+ val).prop("checked") ? $table.bootstrapTable('showColumn', val) : $table.bootstrapTable('hideColumn', val)
  
}




///////////////////////table
function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
}

function textnumberFormatter(value, row, index)
{
   var v = numberWithCommas(value);
  return "<div class='text-center'>" + v + "</div>";
}
function textpercentFormatter(value, row, index) 
{
  //   var per = parseFloat(value);
  return "<div class='text-center'>" + per.toFixed(2) + "</div>";
}

function text_user_sts(value, row, index)
{
  var status = {C1:"กำลังก่อสร้าง",D1:"แล้วเสร็จ-ตรวจสอบพัสดุ",D2:"แล้วเสร็จทางเทคนิค",D3:"รับเอกสารปิด กส.",F2:"ปิด กส.ทางบัญชีระดับ WBS"}
  return "<div class='text-center'>" + value +"-" + status[value] + "</div>";
} 

function job_detail(value, row, index) 
{
  return [
      '<a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_job('+"'" + value + "'" +')"  data-target="#job_detail">',
      '<i class="fa fa-eye"></i> รายละเอียด..',
      "</a>  "
    ].join("")
  }

function query_job(wbs)
{
  $("#wbs_no").html(wbs)
  var status = {C1:"กำลังก่อสร้าง",D1:"แล้วเสร็จ-ตรวจสอบพัสดุ",D2:"แล้วเสร็จทางเทคนิค",D3:"รับเอกสารปิด กส.",F2:"ปิด กส.ทางบัญชีระดับ WBS"}
  var formdata = new FormData()
  formdata.append('wbs',wbs)
  $.ajax({
      url: 'api/query_job_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      success: function(response) {
                  var obj = JSON.parse(response)
                  $("#wbs_no").html(wbs +' '+ obj[0].office_name)
                  $('#des').html(obj[0].description)
                  $('#user').html(obj[0].user_status +'-'+ status[obj[0].user_status])
                  $('#f_date').html(obj[0].postg_date)
                  $('#num_day').html(obj[0].day_now)
                  $('#labor').html(obj[0].percent)
                  $('#act_value').html(numberWithCommas(obj[0].act))
                  $('#tech_n').html(obj[0].tech_name)
                  $('#tech_i').html(obj[0].tech_id)
              }				
      });
}
