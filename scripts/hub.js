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

    card_area.innerHTML = card_area.innerHTML + '<a class="nav-link col-lg-4 mb-4" href="?action=office1&peaname='+peaname+'"><div class="card"><div class="card-body"><div class="row"><div class="col mr-2"><h3>'+peaname+'</h3></div><div class="col-auto"><i class="fas fa-building fa-4x"></i></div></div></div><div class="overlay">Click.</div></div></a>';
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
                
            }				
    });