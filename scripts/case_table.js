
    function numberWithCommas(number) {
        var parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function textCenterFormatter(value, row, index) {
      return "<div class='text-center'>" + value + "</div>";
    }

    function textnumberFormatter(value, row, index) {
        var v = numberWithCommas(value);
        return "<div class='text-center'>" + v + "</div>";
      }
      function textpercentFormatter(value, row, index) {
          var per = parseFloat(value);
        return "<div class='text-center'>" + per.toFixed(2) + "</div>";
      }

var case_cmd = getUrlVars()["case_cmd"];
if(case_cmd =="1")
{
    $("#head_case").html("งานก่อสร้างค้างนานเกิน 180 วันและเบิกค่าใช้จ่ายเกิน 80 %");
}
else if(case_cmd =="2")
{
    $("#head_case").html("งานก่อสร้างค้างนานไม่เกิน 180 วันและเบิกค่าใช้จ่ายเกิน 80 %");
}
else if(case_cmd =="3")
{
    $("#head_case").html("งานก่อสร้างค้างนานเกิน 180 วันและเบิกค่าใช้จ่ายไม่เกิน 80 %");
}
else if(case_cmd =="4")
{
    $("#head_case").html("งานก่อสร้างค้างนานไม่เกิน 180 วันและเบิกค่าใช้จ่ายไม่เกิน 80 %");
}
