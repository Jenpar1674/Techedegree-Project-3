$('#name').focus();

//const jsPunShirtColors =("cornflowerblue","darkslategrey","gold");
//const heartJsShirtColors=("tomato","steelblue","dimgrey");

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

('input[type="checkbox"]')

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
//payment reflect


const nameInput = document.getElementById("name");
const zipInput = document.getElementById("zip");
const cvvInput = document.getElementById("cvv");
const emailInput = document.getElementById("mail");
const creditCardInput = document.getElementById("cc-num");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
/**
 * 
 * VALIDATORS
 *  
 */

//name Cant be blank
function isValidName(name) {
  return/\w+/.test(name)
  
  }
  
  // Must contain a lowercase, uppercase letter and a number
  //function isValidPassword(password) {
  
    //return/[a-z]/.test(password) && 
       //   /[A-Z]/.test(password) && 
        //  /[0-9]/.test(password)
 // }
  
  // The telephone number must be in the format of (555) 555-5555
  //function isValidTelephone(telephone) {
    
   // const regex=  /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/.test(telephone);
    //return text.replace(regex, ($1) $2-$3);
  
 // }
  
  //Must be a valid email address
  function isValidEmail(mail) {
  
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
  }
  
  /**
   * 
   * FORMATTING FUNCTIONS
   * 
   */
  
  
  
  function showOrHideTip(show, element) {
   // show element when show is true, hide when false
  if (show) {
      element.style.display = "inherit";
    } else {
     element.style.display = "none";
    }
  }
  
  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }
  
  nameInput.addEventListener("input", createListener(isValidName));
  
  //passwordInput.addEventListener("input", createListener(isValidPassword));
  
  //telephoneInput.addEventListener("input", createListener(isValidTelephone));
  
  emailInput.addEventListener("input", createListener(isValidEmail));
  


