function search_office()
{
    var card_area = document.getElementById("card_area")
    var office = document.getElementById('search_text').value
    var hub_code = getUrlVars()["hub_code"];
    var formdata = new FormData();
    formdata.append('hub_code',hub_code);
    formdata.append('cmd','office');
    formdata.append('keyword',office);
    $.ajax({
        url: 'api/hub_query.php',
        method: 'POST',
        data:formdata,
        async: true,
        cache: false,
        processData: false,
        contentType: false,
        success: function(response) {
                    card_area.innerHTML = '';
                    var obj = JSON.parse(response);
                    var i = 0;
                    while(obj[i])
                    {
                        
                        card_render(obj[i].peaname);
                        i++;
                    } 
                    concole.log('success.....')
                }				
        });
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function card_render(peaname)
{
    var card_area = document.getElementById("card_area")
    card_area.innerHTML = card_area.innerHTML + '<div class="col-xl-4 col-md-6 col-lg-4 mb-4"><a class="card border-left-pea shadow h-100 py-2" href="#"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-md font-weight-bold text-pea text-uppercase mb-1"><h1>'+peaname+'</h1></div></div><div class="col-auto"><i class="fas fa-building fa-4x" style="color:#703E91"></i></div></div></div></a></div>';
}
var hub_code = getUrlVars()["hub_code"];
var formdata = new FormData();
formdata.append('hub_code',hub_code);
formdata.append('cmd','all');
formdata.append('keyword','all');
$.ajax({
    url: 'api/hub_query.php',
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
                    
                    card_render(obj[i].peaname);
                    i++;
                } 
                concole.log('success.....')
            }				
    });