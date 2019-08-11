var rg = getUrlVars()["rg"]

var menu = document.getElementById("v-pills-tab")

// menu.innerHTML = '<a class="nav-link active" href="?action=home1&office=rg4"><i class="fa fa-clipboard" aria-hidden="true"></i>สายงานการไฟฟ้าภาค 4</a>'





// alert(rg);
// var formdata = new FormData();
//     formdata.append('hub_code',hub_code);
//     formdata.append('cmd','office');
//     formdata.append('keyword',office);
//     $.ajax({
//         url: 'api/hub_query.php',
//         method: 'POST',
//         data:formdata,
//         async: true,
//         cache: false,
//         processData: false,
//         contentType: false,
//         success: function(response) {
//                     card_area.innerHTML = '';
//                     var obj = JSON.parse(response);
//                     var i = 0;
//                     while(obj[i])
//                     {
                        
//                         card_render(obj[i].peaname);
//                         i++;
//                     } 
//                     concole.log('success.....')
//                 }				
//         });