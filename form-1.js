function validate()
{
    if(document.form.text1.value == ""){
        alert("please provide your firstname!");
        return false;
    }
    if(document.form.text2.value == ""){
        alert("please provide your lastname!");
        return false;
    }
    if (document.form.telephone.value == ""){
        alert("please provide your numaber phone!");
        return false;
    }
    if(document.form.email1.value == ""){
        alert("please provide yourr email!");
        return false;
    }
    if(document.form.password1.value == ""){
        alert("please provide your password!");
        return false;
    }
    if(document.form.confpassword.value == ""){
        alert("please provide your configuration");
        return false;
    }
    if(document.form.date1.value == ""){
        alert("please provide your birth date");
        return false;
    }
    if(document.form.date2.value == ""){
        alert("please provide your birth date");
        return false;
    }
    if(document.form.date3.value == ""){
        alert("please provide your birth date");
        return false;
    }
    return(true);
}
function imputsValidation()
{
    var numbers = /^[0-9]+$/ ;
    var letters = /^[A-Za-z]+$/;
    var pss = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var pw1 = document.getElementById("password1");  
   var pw2 = document.getElementById("confpassword");  
   var dt1 = document.getElementById("date1") ;
   var dt2 = document.getElementById("date2");
   var dt3 = document.getElementById("date3");
    var sp = 0;
    if(document.form.text1.value.match(numbers)){
        alert("please enter only alphabet!");
        return false;
    }
    if(document.form.text2.value.match(numbers)){
        alert("please enter only alphabet!");
        return false;
    }
    if(document.form.telephone1.value.match(letters) && document.form.telephone1.value.length != 8){
        alert("please enter the right number phone!");
        return false;
    }
    if(document.form.password1.value.match(pss)){
        sp = 1;
    }
    if(sp == 0){
     alert("please enter other password!");
     return false;
    }
    if(pw1 != pw2){
        alert("incorrect confirmation!");
        return false;
    }
    if(document.form.date1.value.length != 2 && dt1 > 31){
        alert("wrong date!");
        return false;
    }
    if(document.form.date2.value.length != 2 && dt2 > 12){
        alert("wrong date!");
        return false;
    }
    if( dt3 > 2004){
        alert("you can't enter!");
        return false;
    }
    return (true) ;
}
function Change()
{
if(document.getElementById("radio1").checked == true)
        {
            document.getElementById("radio2").checked = false;
        }
        else
        {
            document.getElementById("radio1").checked = false;
        }
}   

        
      
    