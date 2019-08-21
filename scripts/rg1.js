var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab")


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
