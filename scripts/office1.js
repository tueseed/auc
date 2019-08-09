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



      var peaname = getUrlVars()["peaname"];
var peaname_e = decodeURIComponent(peaname);
$('#head_peaname').text(peaname_e);
var action = getUrlVars()["action"];
if(action == "office1"){$("#circularMenu").show()}