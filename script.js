//jshint esversion:6
// function durationvalue(){

//     var duartion = parseInt( document.getElementById("duration").value);
//     duartion = duartion + 5;


   
   
//     document.write("Duration is: " + duartion + "<br>");
//     document.write("scheme type is:"+"<br>");
//     document.write("broadband type:"+"<br>");
//     document.write("your bill is = "+"<br>");
    
    
    
    
// }
function calc(){
    let change=document.getElementsByClassName('edited')[0];
    let type=document.getElementById("connectiontype").value;
    
    let val=document.getElementById("duration").value;
    val = parseInt(val);


    /*let a = document.forms.type;
    
    if(a[0].checked==true){
        res = val + 100;
    }else if(a[1].checked==true){
        res = val + 200;
    }else if(a[2].checked==true){
        res = val + 3000000;
    }
           
     */
    let res = 0;

    var abhi = document.getElementsByName('type');
    if(document.getElementById("scheme1").checked==true){
        
        res = val*200;
        //alert(res)
        
    }else if(document.getElementById("scheme2").checked==true){
        res = val*350;
    }else if(document.getElementById("scheme3").checked==true){
        res = val*500;
    }
    


    //let res=0;
    if(type=='pre'){
        res= res+75;
    }else if(type=="post"){
        res= res+150;
    }
    change.innerHTML="The Total Monthly Rental Cost is Rs." + res; 
}