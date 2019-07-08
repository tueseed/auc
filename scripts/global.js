window.onload = function() {};
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var action = getUrlVars()["action"];
if(action != 'login')
{
    var session  = JSON.parse(sessionStorage.getItem('data'));
    //console.log(session.BaCode);
    if(session == null)
                    {
                        window.location.href = "?action=login"
                    }
    var logged = session.TitleFullName + session.FirstName + " " + session.LastName +"        "+'<img src="https://epi.pea.co.th/Images/' + session.Username + '.jpg" class="img-profile rounded-circle" width="50" height="50">'
    document.getElementById('user_logged').innerHTML = logged;
    document.getElementById('drop_img').setAttribute("src","http://mis.pea.co.th/misadmin/image/" + session.Username + ".jpg");
    
}



