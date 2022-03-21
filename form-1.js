var rIndex,
    table = document.getElementById("table");
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
    var pw1 = document.getElementById("password1").value;  
   var pw2 = document.getElementById("confpassword").value;  
   var dt1 = document.getElementById("date1").value ;
   var dt2 = document.getElementById("date2").value;
   var dt3 = document.getElementById("date3").value;
    var sp = 0;
    const d =["1","3","5","7","8","10","12"];
    const dt =["4","6","9","11"]
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
    if( d.includes(dt2) && dt1 > 30){
        alert("wrong date!");
        return false;
    }
    if(dt2 == 2 && dt1 > 29 && dt3 % 4 == 0){
        alert("wrong date!");
        return false;
    }
    if(dt2 == 2 && dt1>28 && dt3 % 4 != 0){
        alert("wrong date!");
        return false;
    }
    if(dt.includes(dt2) && dt1 > 30){
        alert("wrong date!");
        return false;
    }
    
    if( dt2 > 12){
        alert("wrong date!");
        return false;
    }
    if( dt3 > 2004){
        alert("you can't enter!");
         return false;
    }
    return (true) ;
}
function display(event)
{ event.preventDefault()
    if(imputsValidation())
    {
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0) ;
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);
        var cell10 =  newRow.insertCell(9);
        var text1 = document.getElementById("text1").value;
        var text2 = document.getElementById("text2").value;
        var telephone1 = document.getElementById("telephone1").value;
        var password1 = document.getElementById("password1").value;
        var confpassword = document.getElementById("confpassword").value;
        var radio1 = document.getElementById("radio1").value;
        var date1 = document.getElementById("date1").value;
        var date2 = document.getElementById("date2").value;
        var date3 = document.getElementById("date3").value ; 
        var email1 = document.getElementById("email1").value;
        cell1.innerHTML= text1;
        cell2.innerHTML = text2;
        cell3.innerHTML = telephone1;
        cell4.innerHTML = email1;
        cell5.innerHTML = password1  ;
        cell6.innerHTML = confpassword ;
        cell7.innerHTML = radio1;
        cell8.innerHTML = date1 ;
        cell9.innerHTML = date2;
        cell10.innerHTML = date3;
          selectRow();
}
}
function selectRow()
{     
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
         
          rIndex = this.rowIndex;
          document.getElementById("text1").value = this.cells[0].innerHTML;
          document.getElementById("text2").value = this.cells[1].innerHTML;
          document.getElementById("telephone1").value = this.cells[2].innerHTML;
          document.getElementById("email1").value = this.cells[3].innerHTML;
          document.getElementById("password1").value = this.cells[4].innerHTML;
          document.getElementById("confpassword").value = this.cells[5].innerHTML;
         document.getElementById("radio1").value = this.cells[6].innerHTML;
         document.getElementById("date1").value = this.cells[7].innerHTML;
         document.getElementById("date2").value = this.cells[8].innerHTML;
         document.getElementById("date3").value = this.cells[9].innerHTML;
          
          
        };
    }
}
 selectRow();

function editHtmlTbleSelectedRow(event)
            {
                event.preventDefault()
                var text1 = document.getElementById("text1").value;
                var text2 = document.getElementById("text2").value;
                var telephone1 = document.getElementById("telephone1").value;
                var password1 = document.getElementById("password1").value;
                var confpassword = document.getElementById("confpassword").value;
                var date1 = document.getElementById("date1").value;
                var date2 = document.getElementById("date2").value;
                var date3 = document.getElementById("date3").value ; 
                var email1 = document.getElementById("email1").value;
               if(imputsValidation()){
                table.rows[rIndex].cells[0].innerHTML = text1;
                table.rows[rIndex].cells[1].innerHTML = text2;
                table.rows[rIndex].cells[2].innerHTML = telephone1;
                table.rows[rIndex].cells[3].innerHTML = email1;
                table.rows[rIndex].cells[4].innerHTML = password1;
                table.rows[rIndex].cells[5].innerHTML = confpassword;
                table.rows[rIndex].cells[7].innerHTML = date1;
                table.row[rIndex].cells[8].innerHTML = date2;
                table.row[rIndex].cells[9].innerHTML = date3 ;
                
                
              
              }
              
            }
function removeSelectedRow(event)
     {event.preventDefault()
        table.deleteRow(rIndex);
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        document.getElementById("telephone1").value = "";
        document.getElementById("email1").value = "";
        document.getElementById("password1").value = "";
        document.getElementById("confpassword").value = "";
        document.getElementById("date1").value = "";
        document.getElementById("date2").value = "";
        document.getElementById("date3").value = "";
    }            

        
      
    