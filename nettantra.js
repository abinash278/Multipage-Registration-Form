function adddata(){





var name1 = document.getElementById("nam1").value;
var name2=document.getElementById("nam2").value;
var date=document.getElementById("dob").value;
var email=document.getElementById("email").value;
var fathers_name1=document.getElementById("fn1").value;
var fathers_name2=document.getElementById("fn2").value;
var mothers_name1=document.getElementById("mn1").value;
var mothers_name2=document.getElementById("mn2").value;
var male=document.getElementById("mgen").value;
var female=document.getElementById("fgen").value;
var nationality=document.getElementById("nationality").value;
var home_address=document.getElementById("homadd").value;
var city=document.getElementById("city").value;
var telephone_home=document.getElementById("telhome").value;
var telephone_mobile=document.getElementById("telmob").value;






localStorage.setItem('usernam1' ,name1);
localStorage.setItem('usernam2' ,name2);
localStorage.setItem('userdob' ,date);
localStorage.setItem('useremail' ,email);
localStorage.setItem('userfn1' ,fathers_name1);
localStorage.setItem('userfn2' ,fathers_name2);
localStorage.setItem('usermn1' ,mothers_name1);
localStorage.setItem('usermn2' ,mothers_name2);
localStorage.setItem('mgen' ,male);
localStorage.setItem('fgen' ,female); 
localStorage.setItem('usernationality' ,nationality);
localStorage.setItem('userhomeadd' ,home_address);
localStorage.setItem('usercity' ,city);
localStorage.setItem('telhome' ,telephone_home);
localStorage.setItem('telmob' ,telephone_mobile); 
}
function adddata1(){
    var hsc_institution_name=document.getElementById("hsc").value;
    var hsc_board=document.getElementById("Board").value;
    var score_in_hsc=document.getElementById("schsc").value;
    var ssc_institution_name=document.getElementById("ssc").value;
    var ssc_board=document.getElementById("Board").value;
    var score_in_ssc=document.getElementById("scssc").value;
    var Currently_Pursuing=document.getElementById("curpury").value;
    var Currently_Pursuing =document.getElementById("curpurn").value;
    var Current_Educational_Institution_name=document.getElementById("curins").value;
    var Overall_Percentage=document.getElementById("ovperc").value;
    var Current_Backlogs_if_any=document.getElementById("curbacky").value;
    var Current_Backlogs_if_any=document.getElementById("curbackn").value;

    localStorage.setItem('userhsc' , hsc_institution_name); 
    localStorage.setItem('userBoard' ,  hsc_board); 
    localStorage.setItem('userschsc' ,  score_in_hsc); 
    localStorage.setItem('userssc' , ssc_institution_name); 
    localStorage.setItem('userBoard' , ssc_board); 
    localStorage.setItem('userscssc' , score_in_ssc); 
    localStorage.setItem('usercurpury' ,  Currently_Pursuing); 
    localStorage.setItem('usercurpurn' ,  Currently_Pursuing); 
    localStorage.setItem('usercurins' , Current_Educational_Institution_name); 
    localStorage.setItem('ovperc' , Overall_Percentage); 
     localStorage.setItem('usercurbacky' , Current_Backlogs_if_any); 
    localStorage.setItem('usercurbackn' , Current_Backlogs_if_any); 

}
function adddata3(){
    var Browse_1=document.getElementById("design.png").value;
    var Browse_2=document.getElementById(".png,.pdf,.doc").value;
    var Browse_3=document.getElementById(".png,.pdf,.doc").value;
    var Browse_4=document.getElementById(".pdf,.doc").value;

     localStorage.setItem('userdesign.png' ,Browse_1);
    localStorage.setItem('user.png,.pdf,.doc' ,Browse_2);
    localStorage.setItem('user.png,.pdf,.doc' ,Browse_3);
    localStorage.setItem('user.pdf,.doc' ,Browse_4);




}
