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
                  $("#wbs_no").html(wbs)
                  $("#office").html(' '+ obj[0].office_name)
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

function insert_msg()
{
  
  //alert($("#text_msg").val() + $('#wbs_no').text() + session.EmployeeId + session.TitleFullName + session.FirstName + " " + session.LastName)
  var formdata = new FormData()
  formdata.append('wbs',$('#wbs_no').text())
  formdata.append('u_number',session.EmployeeId)
  formdata.append('u_name',session.TitleFullName + session.FirstName + " " + session.LastName)
  formdata.append('msg',$("#text_msg").val())
  $.ajax({
      url: 'api/insert_msg_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      beforeSend : function()
            {
                $('#row_msg').block({
                  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                  overlayCSS : { 
                    backgroundColor: '#ffffff',
                    opacity: 1
                  },
                  css : {
                    opacity: 1,
                    border: 'none',
                  }
                });
            },
      success: function(response) {
                  console.log('success')
              },
      complete :function(){
                        $('#row_msg').unblock()        
                        query_msg()
                        document.getElementById("text_msg").value=''
                }					
      });
}

function query_msg()
{
  var msg_card = document.getElementById("msg_area")
  msg_card.innerHTML = ''
  var formdata = new FormData()
  formdata.append('wbs',$('#wbs_no').text())
  $.ajax({
      url: 'api/query_msg_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      beforeSend : function()
            {  
              $('#row_msg').block({
                  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                  overlayCSS : { 
                    backgroundColor: '#ffffff',
                    opacity: 1
                  },
                  css : {
                    opacity: 1,
                    border: 'none',
                  }
                });
            },
      success: function(response) {
                  var obj = JSON.parse(response)
                  if(obj.length == 0 )
                  {
                    $('#row_msg').hide()
                  }
                  else if(obj.length > 0 )
                  {
                    $('#row_msg').show()
                    var i = 0
                    while(obj[i])
                    {
                      render_msg(obj[i].u_name,obj[i].datetime,obj[i].msg)  
                      i++
                    }
                  } 
              },
        complete :function(){
                                $('#row_msg').unblock()        
                        }					
      });
}

function render_msg(u_name,datetime,msg)
{
    var msg_card = document.getElementById("msg_area")
    msg_card.innerHTML = msg_card.innerHTML + '<div class="card shadow mt-1"><div class="card-body"><span class="font-weight-bold"><i class="fas fa-user"></i> ' + u_name + '</span> <span class="text-success"><i class="fas fa-clock" aria-hidden="true"></i> ' + datetime + '</span><br><span class="text-info"><i class="fas fa-comment-dots"></i> ' + msg + '</span></div></div>' 
}

function check_emp()
{
  var formdata = new FormData()
  formdata.append('emp_id',$('#tech_i').text())
  $.ajax({
      url: 'api/check_emp_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      beforeSend : function()
            {  
              $('#head_of').block({
                  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                  overlayCSS : { 
                    backgroundColor: '#ffffff',
                    opacity: 1
                  },
                  css : {
                    opacity: 1,
                    border: 'none',
                  }
                });
            },
      success: function(response) {
                  var obj = JSON.parse(response)
                  $("#head_of").text(obj.DEPT_SHORT)
              },
        complete :function(){
                                $('#head_of').unblock()        
                        }					
      });
}
$("#job_detail").on('shown.bs.modal', function(){
  query_msg();
  check_emp()
 });

 $("#job_detail").on('hide.bs.modal', function(){
  var msg_card = document.getElementById("msg_area")
  msg_card.innerHTML = ''
  $('#row_msg').hide()
 });
