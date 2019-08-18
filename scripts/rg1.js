var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab")


function col(val)
{
  // var $table = $('#tbl_data')
  // $table.bootstrapTable('hideColumn', 'wbs')
  alert(val)
}




///////////////////////table
function textCenterFormatter(value, row, index) {
    return "<div class='text-center'>" + value + "</div>";
  }

  function textnumberFormatter(value, row, index) {
      // var v = numberWithCommas(value);
      return "<div class='text-center'>" + v + "</div>";
    }
    function textpercentFormatter(value, row, index) {
      //   var per = parseFloat(value);
      return "<div class='text-center'>" + per.toFixed(2) + "</div>";
    }
