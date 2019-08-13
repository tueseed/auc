var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab") 

if(key == '4')
{
    menu.innerHTML = "";
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=J"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=K"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=L"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.3</a>'
    $('#head_peaname').text(' สายงานการไฟฟ้าภาค 4 ');
}
else if(key == '3')
{
    menu.innerHTML = "";
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=G"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=H"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=I"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.3</a>'
    $('#head_peaname').text(' สายงานการไฟฟ้าภาค 3');}

else if(key == '2')
{
    menu.innerHTML = "";
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=D"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=E"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=F"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.3</a>'
    $('#head_peaname').text(' สายงานการไฟฟ้าภาค 2');
}
else if(key == '1')
{
    menu.innerHTML = "";
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=A"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=B"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=C"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.3</a>'
    $('#head_peaname').text(' สายงานการไฟฟ้าภาค 1');
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
