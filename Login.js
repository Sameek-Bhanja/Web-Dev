        var x = document.getElementById("login");
        var y = document.getElementById("Register");
        var z = document.getElementById("btn");
function register() {
          x.style.left = "-400px";
          y.style.left = "50px";
          z.style.left = "110px";
}
function login() {
          x.style.left = "50px";
          y.style.left = "450px";
          z.style.left = "0px";
}
function validate() {
   //alert("Start Validate");
   
   var var_username = document.getElementById("id_LoginUsername").value;
   var var_password = document.getElementById("id_LoginPassword").value;
   if(var_username == "" || var_password == "")
   {
      alert("Error: Fill the login/pwd fields..!!");
      return false;
   }
   else if(var_username == "A" && var_password == "B")
   {
       alert("Login Succesful");
       window.location = "empty.html";
       //window.location = "empty.html";
       //return false;
    }
    else 
     alert("Error: Incorrect Login/pwd");
     return false;
}
function ShowPassword()
         {
          //alert("Lstart ShowPassword");
           var var_sp = document.getElementById("id_LoginPassword");
          if (var_sp.type === "password"){
              var_sp.type = "text";
              }
              else
              var_sp.type = "password";
         }

       
        