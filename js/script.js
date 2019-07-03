var checkbox1 = $("input[name='all']" ) 
var checkbox2 = $("input[name='js-frameworks']")
var checkbox3 = $("input[name='js-libs']" )
var checkbox4 = $("input[name='express']") 
var checkbox5 = $("input[name='node']") 
var checkbox6 = $("input[name='build-tools']") 
var checkbox7 = $("input[name='npm']") 
$('#name').focus();
//const nameInput = document.getElementById("name");
// const zipInput = document.getElementById("zip");
// const cvvInput = document.getElementById("cvv");
// const emailInput = document.getElementById("mail");
// const creditCardInput = document.getElementById("cc-num");
// const expMonth = document.getElementById("exp-month");
// const expYear = document.getElementById("exp-year");
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

//}
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
