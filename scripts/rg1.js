var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab") 
if(key == '4')
{
    menu.innerHTML = '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> สายงานการไฟฟ้าภาค 4</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.3</a>'
}
else if(key == '3')
{
    menu.innerHTML = '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> สายงานการไฟฟ้าภาค 3</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.1</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.2</a>'
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.3</a>'
}