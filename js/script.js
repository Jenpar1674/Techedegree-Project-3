var checkbox1 = $("input[name='all']" ) 
var checkbox2 = $("input[name='js-frameworks']")
var checkbox3 = $("input[name='js-libs']" )
var checkbox4 = $("input[name='express']") 
var checkbox5 = $("input[name='node']") 
var checkbox6 = $("input[name='build-tools']") 
var checkbox7 = $("input[name='npm']") 
const nameInput = document.getElementById("name");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");
const emailInput = document.getElementById("mail");
const creditCardInput = document.getElementById("cc-num");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
$('#name').focus();

$(document).ready(function(){
  
  
  




$('#other-title').hide()

$('#title').click(function(){
       if ($('#title').val()==='other'){
         $('#other-title').show();
        
    }
       else $('#other-title').hide();

      });


      $("#color option").hide();  
  
$('#design').on('change',function(){
   if ($(this).val() ==="js puns"){
   
      $('#color option').show();
      $('#color option:contains(JS Puns)').show();
      $('#color option:not(:contains(JS Puns))').hide();
      $('#color').val ('cornflowerblue');

  }
     
else if ($(this).val()==="heart js"){
   
   $("#color option").show();
   $('#color option:not(:contains(I))').hide();
   $('#color option:contains(I)').show();
   $('#color').val('tomato'); 
}
 
});
//activies register



//payment info

$("#payment").val ('credit card'); // starts out at credit card 

$('.credit-card').show();
$('p:first').hide();
$('p:last').hide();
//credit card option first/hide other two
$("#payment").on('change',function(){
  
  if ($(this).val() ==='credit card'){
    
    $('.credit-card').show();
    //$('p:first').hide();
    //$('p:last').hide();
    } 
  else { 
    $('.credit-card').hide();                            
    //$('p:first').show();
    //$('p:last').show();
  }
  if ($(this).val()==='paypal'){
  
 // $('.credit card').hide();
  //$('.Bitcoin').hide();
  $('p:first').show();
  }
else {
  $('p:first').hide();

}

if ($(this).val()==='bitcoin')
{
  //$('.Bitcoin').show();
 // $('.PayPal').hide();
  //$('.credit card').hide();
  $('p:last').show();
}
else {

 $('p:last').hide();  
}


}


)

//register for activities

  
$('.activities').change(function(){

// //let total = 0
// let totalSum = 0;
// let activities = $('.activities input[type = checkbox]');

// //total starts at 0
   
//items in check box (checked or not)
if (checkbox1.is(':checked')){
    
}
if (checkbox2.is(':checked')){
    
    checkbox4.prop('disabled',true);
}else {
    checkbox4.prop('disabled',false);
}

if (checkbox3.is(':checked')){
  
  checkbox5.prop('disabled',true);
}else {
 checkbox5.prop('disabled',false);
}
if (checkbox4.is(':checked')){
  
  checkbox2.prop('disabled',true);
}else {
 checkbox2.prop('disabled',false);
}
if (checkbox5.is(':checked')){
  
  checkbox3.prop('disabled',true);
}else {
 checkbox3.prop('disabled',false);
}
if (checkbox6.is(':checked')){
  
}else{}
if (checkbox7.is(':checked')){
  
}else{}


});

var totalCost = 0;

$('.activities').append('<div id="total"></div>');
var updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "Total: $" + totalCost;
};  
$('input[name="all"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(200);
    } else {
        updateCost(-200);
    }
});
$('input[name="js-frameworks"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$('input[name="js-libs"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$('input[name="express"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$('input[name="node"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$('input[name="build-tools"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$('input[name="npm"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});






})
/** 
VALIDATORS
*  
*/
function isValidUserName (name){
  let valid = /^\S/.test(name);
  if (valid) {
      $('#name-error').hide();
      return true;
  } else {
      $('#name-error').show();
      return false;
  }

//Must be a valid email address
//  //function isValidEmail(mail) {
//   let valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
//   if (valid) {
//       $('#email-error').hide();
//       return true;
//   } else {
//       $('#email-error').show();
//       return false;
//   }
//}
function isValidEmail(emailInput, alertMsg) {
  var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
  if (emailInput.value.match(emailExp)) {
  return true;
  } else {
  document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for email.
  emailInput.focus();
  return false;
  }
  }
 
 /**
  * 
  * FORMATTING FUNCTIONS
  * 
  */
 
 
 
//  //function showOrHideTip(show, element) {
//   // show element when show is true, hide when false
//  if (show) {
//      element.style.display = "inherit";
//    } else {
//     element.style.display = "none";
//    }
//  }
 
//  function createListener(validator) {
//     return e => {
//      const text = e.target.value;
//    const valid = validator(text);
//      const showTip = text !== "" && !valid;
//       const tooltip = e.target.nextElementSibling;
//     showOrHideTip(showTip, tooltip);
//     };
  //}
 
 nameInput.addEventListener("input", createListener(isValidName));
 
 //passwordInput.addEventListener("input", createListener(isValidPassword));
 
 //telephoneInput.addEventListener("input", createListener(isValidTelephone));
 
 emailInput.addEventListener("input", createListener(isValidEmail));
 
}
