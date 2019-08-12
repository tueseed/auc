var menu = document.getElementById("v-pills-tab") 
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



var peacode = getUrlVars()["peacode"];
// var peaname_e = decodeURIComponent(peaname);
// $('#head_peaname').text(peaname_e);
var action = getUrlVars()["action"];
if(action == "office1"){$("#circularMenu").show()}
menu.innerHTML = "";
var formdata = new FormData();
formdata.append('peacode',peacode);
$.ajax({
    url: 'api/query_office_api.php',
    method: 'POST',
    data:formdata,
    async: true,
    cache: false,
    processData: false,
    contentType: false,
    success: function(response) {
                var obj = JSON.parse(response);
                var i = 0;
                
                while(obj[i])
                {
                    
                    menu_render(obj[i].peaname,obj[i].peacode);
                    i++;
                } 
                
            }				
    });

function menu_render(peaname)
{
  menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=J"><i class="fa fa-clipboard" aria-hidden="true"></i> ' + peaname + '</a>'
}