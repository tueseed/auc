var menu = document.getElementById("v-pills-tab")
menu.innerHTML = "";

function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
}

function textnumberFormatter(value, row, index) 
{
  // var v = numberWithCommas(value);
  return "<div class='text-center'>" + v + "</div>";
}

function textpercentFormatter(value, row, index) 
{
  //   var per = parseFloat(value);
  return "<div class='text-center'>" + per.toFixed(2) + "</div>";
}

var peacode = getUrlVars()["peacode"];
var action = getUrlVars()["action"];
var cmd  = getUrlVars()["cmd"];
if(cmd == "hub")
{
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
                  $('#head_peaname').text(obj[0].peaname);
                  while(obj[i])
                  {  
                      menu_render(obj[i].peaname,obj[i].peacode);
                      i++;
                  } 
                  
              }				
      });

}
else if(cmd == "office")
{
  var formdata = new FormData();
  var peacode3 = peacode.substring(0,3);
  formdata.append('peacode',peacode3);
  $.ajax({
      url: 'api/query_office_api1.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      success: function(response) {
                  var obj = JSON.parse(response);
                  var i = 0;
                  $('#head_peaname').text(obj[0].peaname);
                  while(obj[i])
                  {  
                      menu_render(obj[i].peaname,obj[i].peacode);
                      i++;
                  } 
                  
              }				
      });
}

function menu_render(peaname,peacode)
{
  menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=office&peacode=' + peacode + '"><i class="fa fa-clipboard" aria-hidden="true"></i> ' + peaname + '</a>'
}

if(action == "office1"){$("#circularMenu").show()}