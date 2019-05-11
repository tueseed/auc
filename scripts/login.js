function call_auth()
{
   var employeeCode = document.getElementById('employeeCode').value;
   var employeePassword = document.getElementById('employeePassword').value
   var formData = new FormData()
   formData.append('employeeCode',employeeCode); 
   formData.append('employeePassword',employeePassword);
   $.ajax({});
  
}