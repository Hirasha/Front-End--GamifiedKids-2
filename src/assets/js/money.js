//=======================Grade 1========================
//=====================level1================================

//-------------money level 1 - grade 1--------------
      
function show_moneyL1(Page1, Page2) {
  document.getElementById(Page1).style.display='block';
  document.getElementById(Page2).style.display='none'; 
}

function test1_money()
{
document.f1.clip1.src="/assets/images/5.png";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/10.png";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a5").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_money()

}
function test2_money()
{
document.f1.clip1.src="/assets/images/10.png";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/5.png";
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("a10").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
enableSubmit_money()
}

function test3_money()
{
document.f1.clip2.src="/assets/images/2.jpg";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/5.png";
document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("b2").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_money()

}
function test4_money()
{
document.f1.clip2.src="/assets/images/5.png";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/2.jpg";
document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("b5").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
enableSubmit_money()
}

function test5_money()
{
document.f1.clip3.src="/assets/images/5.png";
document.f1.leaf1.src="/assets/images/trans.svg";
document.f1.leaf2.src="/assets/images/10.png";
document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("c5").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave wrong answer 
enableSubmit_money()

}
function test6_money()
{
document.f1.clip3.src="/assets/images/10.png";
document.f1.leaf2.src="/assets/images/trans.svg";
document.f1.leaf1.src="/assets/images/5.png";
document.f1.rw3.src="/assets/images/yay_bunny2.gif";
document.getElementById("c10").style.pointerEvents = "none";  
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_money()
}

function enableSubmit_money(){
var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk == 3){
document.getElementById("submit").style.display="block";
document.getElementById("arrow1").style.display="block";

}
else{
document.getElementById("submit").style.display="none";
}
}
function show_moneyL1(Page1, Page2) {
  document.getElementById(Page1).style.display='block';
  document.getElementById(Page2).style.display='none'; 
}

function test1_money()
{
document.f1.clip1.src="/assets/images/5.png";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/10.png";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a10").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_money()

}
function test2_money()
{
document.f1.clip1.src="/assets/images/10.png";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/5.png";
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("a5").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
enableSubmit_money()
}

function test3_money()
{
document.f1.clip2.src="/assets/images/2.jpg";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/5.png";
document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("b5").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_money()

}
function test4_money()
{
document.f1.clip2.src="/assets/images/5.png";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/2.jpg";
document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("b2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
enableSubmit_money()
}

function test5_money()
{
document.f1.clip3.src="/assets/images/5.png";
document.f1.leaf1.src="/assets/images/trans.svg";
document.f1.leaf2.src="/assets/images/1.jpg";
document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("c10").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave wrong answer 
enableSubmit_money()

}
function test6_money()
{
document.f1.clip3.src="/assets/images/1.jpg";
document.f1.leaf2.src="/assets/images/trans.svg";
document.f1.leaf1.src="/assets/images/5.png";
document.f1.rw3.src="/assets/images/yay_bunny2.gif";
document.getElementById("c5").style.pointerEvents = "none";  
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_money()
}

function enableSubmit_money(){
var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk == 3){
document.getElementById("submit").style.display="block";
document.getElementById("arrow1").style.display="block";

}
else{
document.getElementById("submit").style.display="none";
}
}


//===================Level 2========================================

//-------------money level 2 - grade 1--------------

      // function show_moneyL1(Page1, Page2) {
      //   document.getElementById(Page1).style.display='block';
      //   document.getElementById(Page2).style.display='none'; 
      // }
      
    
      function test1_money2()
      {
      document.f1.clip1.src="/assets/images/5.png";
      document.f1.brown.src="/assets/images/trans.svg";
      document.f1.red.src="/assets/images/1.jpg";
      document.f1.green.src="/assets/images/2.jpg";
  
      document.f1.rw1.src="/assets/images/yay_bunny2.gif";
      document.getElementById("a2").style.pointerEvents = "none";
      document.getElementById("a1").style.pointerEvents = "none";
      document.getElementById("mark1").checked = true; //kid gave right answer 
      enableSubmit_money()
      
      }
      function test2_money2()
      {
      document.f1.clip1.src="/assets/images/1.jpg";
      document.f1.red.src="/assets/images/trans.svg";
      document.f1.brown.src="/assets/images/5.png";
      document.f1.green.src="/assets/images/2.jpg";
     
      document.f1.rw1.src="/assets/images/w.gif";
      document.getElementById("a5").style.pointerEvents = "none";
      document.getElementById("a2").style.pointerEvents = "none";
      document.getElementById("unmark1").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      }
  
      function test3_money2()
      {
      document.f1.clip1.src="/assets/images/2.jpg";
      document.f1.green.src="/assets/images/trans.svg";
      document.f1.brown.src="/assets/images/5.png";
      document.f1.red.src="/assets/images/1.jpg";
  
      document.f1.rw1.src="/assets/images/w.gif";
      document.getElementById("a1").style.pointerEvents = "none";
      document.getElementById("a5").style.pointerEvents = "none";
      document.getElementById("unmark1").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      }
      
      function test4_money2()
      {
      document.f1.clip2.src="/assets/images/1.jpg";
      document.f1.rect.src="/assets/images/trans.svg";
      document.f1.sqr.src="/assets/images/2.jpg";
      document.f1.cir.src="/assets/images/5.png";
  
      document.f1.rw2.src="/assets/images/w.gif";
      document.getElementById("b2").style.pointerEvents = "none";
      document.getElementById("b5").style.pointerEvents = "none";
      document.getElementById("unmark2").checked = true; //kid gave right answer 
      enableSubmit_money()
      
      }
      function test5_money2()
      {
      document.f1.clip2.src="/assets/images/2.jpg";
      document.f1.sqr.src="/assets/images/trans.svg";
      document.f1.rect.src="/assets/images/1.jpg";
      document.f1.cir.src="/assets/images/5.png";
  
      document.f1.rw2.src="/assets/images/yay_bunny2.gif";
      document.getElementById("b1").style.pointerEvents = "none";
      document.getElementById("b2").style.pointerEvents = "none";
      document.getElementById("mark2").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      }
  
      function test6_money2()
      {
      document.f1.clip2.src="/assets/images/5.png";
      document.f1.cir.src="/assets/images/trans.svg";
      document.f1.sqr.src="/assets/images/2.jpg";
      document.f1.rect.src="/assets/images/1.jpg";
  
      document.f1.rw2.src="/assets/images/w.gif";
      document.getElementById("b2").style.pointerEvents = "none";
      document.getElementById("b1").style.pointerEvents = "none";
      document.getElementById("unmark2").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      }
      
      function test7_money2()
      {
      document.f1.clip3.src="/assets/images/5.png";
      document.f1.leaf1.src="/assets/images/trans.svg";
      document.f1.leaf2.src="/assets/images/1.jpg";
      document.f1.leaf3.src="/assets/images/2.jpg";
  
      document.f1.rw3.src="/assets/images/w.gif";
      document.getElementById("c1").style.pointerEvents = "none";
      document.getElementById("c2").style.pointerEvents = "none";
      document.getElementById("unmark3").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      
      }
      function test8_money2()
      {
      document.f1.clip3.src="/assets/images/1.jpg";
      document.f1.leaf2.src="/assets/images/trans.svg";
      document.f1.leaf1.src="/assets/images/5.png";
      document.f1.leaf3.src="/assets/images/2.jpg";
  
      document.f1.rw3.src="/assets/images/yay_bunny2.gif";
      document.getElementById("c5").style.pointerEvents = "none";  
      document.getElementById("c2").style.pointerEvents = "none"; 
      document.getElementById("mark3").checked = true; //kid gave right answer 
      enableSubmit_money()
      }
  
      function test9_money2()
      {
      document.f1.clip3.src="/assets/images/2.jpg";
      document.f1.leaf3.src="/assets/images/trans.svg";
      // document.f1.leaf1.src="/assets/images/5.png";
      // document.f1.leaf2.src="/assets/images/1.png";
  
      document.f1.rw3.src="/assets/images/w.gif";
      document.getElementById("c5").style.pointerEvents = "none";
      document.getElementById("c1").style.pointerEvents = "none";
      document.getElementById("unmark3").checked = true; //kid gave wrong answer 
      enableSubmit_money()
      
      }
  
//==========================Grade 2========================
//==========Money level 2
//---------------------------money grade 2 page level 1--------------------------------


function showpages_mon1(page){
  var p1 = document.getElementById(page).getAttribute("id");
  if (p1=="page1-mon1"){	
      document.getElementById("page1-mon1").style.display='block';	
      document.getElementById("page2-mon1").style.display='none'; 	
      document.getElementById("page3-mon1").style.display='none';
      document.getElementById("page4-mon1").style.display='none';  	
  }
  else if (p1=="page2-mon1"){
      document.getElementById("page1-mon1").style.display='none';	
      document.getElementById("page2-mon1").style.display='block'; 	 
      document.getElementById("page3-mon1").style.display='none'; 
      document.getElementById("page4-mon1").style.display='none'; 	
      }
  else if (p1=="page3-mon1"){
      document.getElementById("page2-mon1").style.display='none';	
      document.getElementById("page3-mon1").style.display='block'; 	 
      document.getElementById("page1-mon1").style.display='none'; 	
      document.getElementById("page4-mon1").style.display='none'; 
        }
  else if (p1=="page4-mon1"){
      document.getElementById("page2-mon1").style.display='none';	
      document.getElementById("page4-mon1").style.display='block'; 	 
      document.getElementById("page3-mon1").style.display='none'; 	
      document.getElementById("page1-mon1").style.display='none'; 
            }
}	

//----------------Grade 2 level 1-------------------


//----------------page 1----------------

function test1_mono()
{
document.f1.clip1.src="/assets/images/a_1.JPG";
document.f1.a.src="/assets/images/trans.svg";
document.f1.b.src="/assets/images/a_2.JPG";
document.f1.c.src="/assets/images/a_3.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark1").checked = true; //kid gave right answer 
}

function test2_mono()
{
document.f1.clip1.src="/assets/images/a_2.JPG";
document.f1.b.src="/assets/images/trans.svg";
document.f1.a.src="/assets/images/a_1.JPG";
document.f1.c.src="/assets/images/a_3.JPG";

document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("mark1").checked = true; //kid gave right answer 
}

function test3_mono()
{
document.f1.clip1.src="/assets/images/a_3.JPG";
document.f1.c.src="/assets/images/trans.svg";
document.f1.a.src="/assets/images/a_1.JPG";
document.f1.b.src="/assets/images/a_2.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("unmark1").checked = true; //kid gave right answer 
}


//----------------page 2----------------

function test4_mono()
{
document.f2.clip1.src="/assets/images/a_1.JPG";
document.f2.a.src="/assets/images/trans.svg";
document.f2.b.src="/assets/images/a_2.JPG";
document.f2.c.src="/assets/images/a_4.JPG";

document.f2.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark2").checked = true; //kid gave right answer 
}

function test5_mono()
{
document.f2.clip1.src="/assets/images/a_2.JPG";
document.f2.b.src="/assets/images/trans.svg";
document.f2.a.src="/assets/images/a_1.JPG";
document.f2.c.src="/assets/images/a_4.JPG";

document.f2.rw1.src="/assets/images/w.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark2").checked = true; //kid gave right answer 
}

function test6_mono()
{
document.f2.clip1.src="/assets/images/a_4.JPG";
document.f2.c.src="/assets/images/trans.svg";
document.f2.a.src="/assets/images/a_1.JPG";
document.f2.b.src="/assets/images/a_2.JPG";

document.f2.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("mark2").checked = true; //kid gave right answer 
}


//----------------page 3----------------

function test7_mono()
{
document.f4.clip1.src="/assets/images/a_1.JPG";
document.f4.a.src="/assets/images/trans.svg";
document.f4.b.src="/assets/images/a_2.JPG";
document.f4.c.src="/assets/images/a_3.JPG";

document.f4.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("mark3").checked = true; //kid gave right answer 
}

function test8_mono()
{
document.f4.clip1.src="/assets/images/a_2.JPG";
document.f4.b.src="/assets/images/trans.svg";
document.f4.a.src="/assets/images/a_1.JPG";
document.f4.c.src="/assets/images/a_3.JPG";

document.f4.rw1.src="/assets/images/w.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark3").checked = true; //kid gave right answer 
}

function test9_mono()
{
document.f4.clip1.src="/assets/images/a_3.JPG";
document.f4.c.src="/assets/images/trans.svg";
document.f4.a.src="/assets/images/a_1.JPG";
document.f4.b.src="/assets/images/a_2.JPG";

document.f4.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("unmark3").checked = true; //kid gave right answer 
}


// function moneycheck(){
//   var x=(document.f1.clip1.src);
//   var y=(document.f1.clip2.src);
//   var z=(document.f1.clip3.src); 
  // if ((x!="http://localhost:4200/assets/images/question_mark.png") && (y!="http://localhost:4200/assets/images/question_mark.png")){
  //   if((x == "http://localhost:4200/assets/images/10.png") || (x =="http://localhost:4200/assets/images/5.png")){
  //     if((y == "http://localhost:4200/assets/images/10.png") || (y == "http://localhost:4200/assets/images/5.png")){
  //     document.f1.rw1.src="http://localhost:4200/assets/images/yay_bunny2.gif";
  //     document.getElementById("mark1").checked = true;
  //     }
  //   }
  // }

//   if ((x!="http://localhost:4200/assets/images/question_mark.png") && (y!="http://localhost:4200/assets/images/question_mark.png")){
//     if((x == "http://localhost:4200/assets/images/10.png") && (y =="http://localhost:4200/assets/images/5.png")){
//       document.f1.rw1.src="http://localhost:4200/assets/images/yay_bunny2.gif";
//       document.getElementById("mark1").checked = true;
//     }
  
//   }else if((x!="http://localhost:4200/assets/images/question_mark.png") && (z!="http://localhost:4200/assets/images/trans.svg")){
//     if((x == "http://localhost:4200/assets/images/10.png") && (z =="http://localhost:4200/assets/images/2.jpg")){
//     document.f1.rw1.src="http://localhost:4200/assets/images/w.gif";
//     document.getElementById("unmark1").checked = true;
// }
//   }
//   else if ((x!="http://localhost:4200/assets/images/question_mark.png") && (z!="http://localhost:4200/assets/images/trans.svg")){
//     if((y == "http://localhost:4200/assets/images/5.png") && (z =="http://localhost:4200/assets/images/2.jpg")){
//       document.f1.rw1.src="http://localhost:4200/assets/images/w.gif";
//       document.getElementById("unmark1").checked = true;
//   }
// }

//   }
    

//----------------Grade 2 level 2-------------------


//---------------------------money grade 2 page transition level 1--------------------------------

function showpages_mon2(page){
  var p1 = document.getElementById(page).getAttribute("id");
  if (p1=="page1-mon2"){	
      document.getElementById("page1-mon2").style.display='block';	
      document.getElementById("page2-mon2").style.display='none'; 	
      document.getElementById("page3-mon2").style.display='none';
      document.getElementById("page4-mon2").style.display='none';  	
  }
  else if (p1=="page2-mon2"){
      document.getElementById("page1-mon2").style.display='none';	
      document.getElementById("page2-mon2").style.display='block'; 	 
      document.getElementById("page3-mon2").style.display='none'; 
      document.getElementById("page4-mon2").style.display='none'; 	
      }
  else if (p1=="page3-mon2"){
      document.getElementById("page2-mon2").style.display='none';	
      document.getElementById("page3-mon2").style.display='block'; 	 
      document.getElementById("page1-mon2").style.display='none'; 	
      document.getElementById("page4-mon2").style.display='none'; 
        }
  else if (p1=="page4-mon2"){
      document.getElementById("page2-mon2").style.display='none';	
      document.getElementById("page4-mon2").style.display='block'; 	 
      document.getElementById("page3-mon2").style.display='none'; 	
      document.getElementById("page1-mon2").style.display='none'; 
            }
}	
//--------money game  level 2 grade 2 -------------
//----------------page 1----------------

function test1_mono2()
{
document.f1.clip1.src="/assets/images/s17.JPG";
document.f1.a.src="/assets/images/trans.svg";
document.f1.b.src="/assets/images/s25.JPG";
document.f1.c.src="/assets/images/s30.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark1").checked = true; //kid gave right answer 
}

function test2_mono2()
{
document.f1.clip1.src="/assets/images/s25.JPG";
document.f1.b.src="/assets/images/trans.svg";
document.f1.a.src="/assets/images/s17.JPG";
document.f1.c.src="/assets/images/s30.JPG";

document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("mark1").checked = true; //kid gave right answer 
}

function test3_mono2()
{
document.f1.clip1.src="/assets/images/s30.JPG";
document.f1.c.src="/assets/images/trans.svg";
document.f1.a.src="/assets/images/s17.JPG";
document.f1.b.src="/assets/images/s25.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("unmark1").checked = true; //kid gave right answer 
}


//----------------page 2----------------

function test4_mono2()
{
document.f2.clip1.src="/assets/images/s17.JPG";
document.f2.a.src="/assets/images/trans.svg";
document.f2.b.src="/assets/images/s25.JPG";
document.f2.c.src="/assets/images/s30.JPG";

document.f2.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark2").checked = true; //kid gave right answer 
}

function test5_mono2()
{
document.f2.clip1.src="/assets/images/s25.JPG";
document.f2.b.src="/assets/images/trans.svg";
document.f2.a.src="/assets/images/s17.JPG";
document.f2.c.src="/assets/images/s30.JPG";

document.f2.rw1.src="/assets/images/w.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark2").checked = true; //kid gave right answer 
}

function test6_mono2()
{
document.f2.clip1.src="/assets/images/s30.JPG";
document.f2.c.src="/assets/images/trans.svg";
document.f2.a.src="/assets/images/s17.JPG";
document.f2.b.src="/assets/images/s25.JPG";

document.f2.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("mark2").checked = true; //kid gave right answer 
}


//----------------page 3----------------

function test7_mono2()
{
document.f4.clip1.src="/assets/images/s17.JPG";
document.f4.a.src="/assets/images/trans.svg";
document.f4.b.src="/assets/images/s25.JPG";
document.f4.c.src="/assets/images/s30.JPG";

document.f4.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("mark3").checked = true; //kid gave right answer 
}

function test8_mono2()
{
document.f4.clip1.src="/assets/images/s25.JPG";
document.f4.b.src="/assets/images/trans.svg";
document.f4.a.src="/assets/images/s17.JPG";
document.f4.c.src="/assets/images/s30.JPG";

document.f4.rw1.src="/assets/images/w.gif";
document.getElementById("a").style.pointerEvents = "none";  
document.getElementById("c").style.pointerEvents = "none"; 
document.getElementById("unmark3").checked = true; //kid gave right answer 
}

function test9_mono2()
{
document.f4.clip1.src="/assets/images/s30.JPG";
document.f4.c.src="/assets/images/trans.svg";
document.f4.a.src="/assets/images/s17.JPG";
document.f4.b.src="/assets/images/s25.JPG";

document.f4.rw1.src="/assets/images/w.gif";
document.getElementById("b").style.pointerEvents = "none";  
document.getElementById("a").style.pointerEvents = "none"; 
document.getElementById("unmark3").checked = true; //kid gave right answer 
}