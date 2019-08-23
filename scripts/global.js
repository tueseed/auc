window.onload = function() {};
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function des_session()
{
    sessionStorage.removeItem('data');
    window.location.href = "login.php";
}
// var action = getUrlVars()["action"];
// if(action != 'login')
// {
//     var session  = JSON.parse(sessionStorage.getItem('data'));
//     //console.log(session.BaCode);
//     if(session == null)
//                     {
//                         window.location.href = "?action=login"
//                     }
//     var logged = session.TitleFullName + session.FirstName + " " + session.LastName +"        "+'<img src="https://epi.pea.co.th/Images/' + session.Username + '.jpg" class="img-profile rounded-circle" width="50" height="50">'
//     document.getElementById('user_logged').innerHTML = logged;
//     document.getElementById('drop_img').setAttribute("src","http://mis.pea.co.th/misadmin/image/" + session.Username + ".jpg");
    
// }

function toggle_menu()
{
  document.getElementById('circularMenu').classList.toggle('active');
  
}

//   $("#circularMenu").hide();
  var session  = JSON.parse(sessionStorage.getItem('data'));
  var action = getUrlVars()["action"];
  if(action == 'rg1')
  {
    
    if(session == null)
    {
        window.location.href = "login.php";
        
    }
}
    if(session != null)
    {
        var logged = session.TitleFullName + session.FirstName + " " + session.LastName +"        "+'<img src="https://epi.pea.co.th/Images/' + session.Username + '.jpg" class="img-profile rounded-circle" width="50" height="50">'
        document.getElementById('user_logged').innerHTML = logged;
        //document.getElementById('drop_img').setAttribute("src","http://mis.pea.co.th/misadmin/image/" + session.Username + ".jpg");
        document.getElementById('office_1').innerHTML = session.BaName;
        document.getElementById('position').innerHTML = session.Position + ' ' + session.LevelDesc;
        document.getElementById('DepartmentFullName').innerHTML = session.DepartmentFullName;
    }

function openNav() 
{
    document.getElementById("mySidenav").style.width = "350px";
    $('#left_menu').hide()
} 
      
function closeNav() 
{
    document.getElementById("mySidenav").style.width = "0";
    $('#left_menu').show()
}

function render_menu(key,office)
{
    var menu = document.getElementById("v-pills-tab")
    if(key == 4)
    {
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(99,'+"'J'"+')"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.1</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(99,'+"'K'"+')"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.2</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(99,'+"'L'"+')"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟต.3</a>'
        $('#head_peaname').text(' สายงานการไฟฟ้าภาค 4 ');
        
    }
    else if(key == 3)
    {
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=G"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.1</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=H"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.2</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=I"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟก.3</a>'
        $('#head_peaname').text(' สายงานการไฟฟ้าภาค 3');
    }
    else if(key == 2)
    {   
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=D"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.1</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=E"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.2</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&cmd=hub&peacode=F"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟฉ.3</a>'
        $('#head_peaname').text(' สายงานการไฟฟ้าภาค 2');
    }
    else if(key == 1)
    {
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=A"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.1</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=B"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.2</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="?action=office1&peacode=C"><i class="fa fa-clipboard" aria-hidden="true"></i> กฟน.3</a>'
        $('#head_peaname').text(' สายงานการไฟฟ้าภาค 1');
    }
    else if(key == 0)
    {
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(1)"><i class="fa fa-clipboard" aria-hidden="true"></i>  สายงานการไฟฟ้าภาค 1</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(2)"><i class="fa fa-clipboard" aria-hidden="true"></i>  สายงานการไฟฟ้าภาค 2</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(3)"><i class="fa fa-clipboard" aria-hidden="true"></i>  สายงานการไฟฟ้าภาค 3</a>'
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(4)"><i class="fa fa-clipboard" aria-hidden="true"></i>  สายงานการไฟฟ้าภาค 4</a>'
        query_data('')
        table_refresh('')
        $('#head_peaname').text('');
    }
    else if(key == 99)
    {
        table_refresh(office)
        query_data(office)
        menu.innerHTML = "";
        menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
        var formdata = new FormData();
        formdata.append('peacode',office);
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
                        // //
                        // var j =0;
                        // while(obj[j])
                        // {
                        //     if(office == obj[j].peacode){$('#head_peaname').text(obj[j].peaname);}
                        //     j++;
                        // }
                        // //
                        $('#head_peaname').text(obj[0].peaname)
                        var i = 0;
                        while(obj[i])
                        {  
                            menu_render(obj[i].peaname,obj[i].peacode);
                            i++;
                        } 
                        
                    }				
            });
    }
    
}

function menu_render(peaname,peacode)
{
    var menu = document.getElementById("v-pills-tab")
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="aj_render_menu_office(' + "'" + peacode + "'" + ')"><i class="fa fa-clipboard" aria-hidden="true"></i> ' + peaname + '</a>'
}

function aj_render_menu_office(peacode)
{
   
    var menu = document.getElementById("v-pills-tab")
    menu.innerHTML = "";
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="render_menu(0)"><i class="fa fa-clipboard" aria-hidden="true"></i> เมนูหลัก</a>'
    var formdata = new FormData();
    var peacode3 = peacode.substring(0,3);
    var peacode4 = peacode.substring(0,4);
    table_refresh(peacode4)
    query_data(peacode4)
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
                    var j =0;
                    while(obj[j])
                    {
                        if(peacode == obj[j].peacode){$('#head_peaname').text(obj[j].peaname);}
                        j++;
                        }
                    var i = 0;
                    while(obj[i])
                    {  
                        render_menu_office(obj[i].peaname,obj[i].peacode);
                        i++;
                    } 
                    console.log(response)
                }				
        });
        
}

function render_menu_office(peaname,peacode)
{
    var menu = document.getElementById("v-pills-tab")
    menu.innerHTML = menu.innerHTML + '<a class="nav-link" href="#" onclick="aj_render_menu_office(' + "'" + peacode + "'" + ')"><i class="fa fa-clipboard" aria-hidden="true"></i> ' + peaname + '</a>'
}

function table_refresh(peacode)
{
    var $table = $('#tbl_data');
     $table.bootstrapTable('refreshOptions', {
        url: './api/datatable/job_api.php?peacode=' + peacode
      })
}

function query_data(peacode)
{
    var card = document.getElementById("data_area")
    card.innerHTML = ""
    var formdata = new FormData();
    formdata.append('peacode',peacode);
    $.ajax({
        url: 'api/query_value_api.php',
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
                        render_card_value(obj[i]);
                        i++;
                    } 
                    console.log(obj)
                }				
        });
}

function render_card_value(data)
{
    var status = {C1:"กำลังก่อสร้าง",D1:"แล้วเสร็จ-ตรวจสอบพัสดุ",D2:"แล้วเสร็จทางเทคนิค",D3:"รับเอกสารปิด กส.",F2:"ปิด กส.ทางบัญชีระดับ WBS"}
    var card = document.getElementById("data_area")
    card.innerHTML = card.innerHTML + '<div class="col-lg-3"><div class="card mt-2"><div class="card-body"><h5 class="card-title"> สถานะงาน ' + data.user_status +' '+status[data.user_status]+'</h5><div class="float-right text-success font-weight-bold"><h5 class="card-title"><i class="fas fa-folder-open"></i> '+ data.num_wbs +' งาน</h5><h5 class="card-title"><i class="far fa-money-bill-alt"></i>  ' + data.val + ' ล้านบาท</h5></div></div></div></div>'
}
query_data('')
    



