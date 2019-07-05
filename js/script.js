
var checkbox1 = $("input[name='all']")
var checkbox2 = $("input[name='js-frameworks']")
var checkbox3 = $("input[name='js-libs']")
var checkbox4 = $("input[name='express']")
var checkbox5 = $("input[name='node']")
var checkbox6 = $("input[name='build-tools']")
var checkbox7 = $("input[name='npm']")
// const nameInput = document.getElementById("name");
// const zipInput = document.getElementById("zip");
// const cvvInput = document.getElementById("cvv");
// const emailInput = document.getElementById("mail");
// const creditCardInput = document.getElementById("cc-num");
// const expMonth = document.getElementById("exp-month");
// const expYear = document.getElementById("exp-year");


$('#name').focus();
$('#colors-js-puns').hide();


$(document).ready(function () {
    
         
    
    
    
        $('#title').click(function () {
        if ($('#title').val() === 'other') {$
            $('#other-title').show();

        }
        else $('#other-title').hide();

    });




    $('#design').on('change', function () {

        if ($(this).val() === "js puns") {
            $('#colors-js-puns').show();
            $('#color option').show();
            $('#color option:contains(JS Puns)').show();
            $('#color option:not(:contains(JS Puns))').hide();
            $('#color').val('cornflowerblue');

        }

        else if ($(this).val() === "heart js") {

            $("#color option").show();
            $('#color option:not(:contains(I))').hide();
            $('#color option:contains(I)').show();
            $('#color').val('tomato');
        }
        else {
            $('#colors-js-puns').hide();

        }
    });

    //payment info

    $("#payment").val('credit card'); // starts out at credit card 

    $('.credit-card').show();
    $('p:first').hide();
    $('p:last').hide();

    //credit card option first/hide other two
    $("#payment").on('change', function () {

        if ($(this).val() === 'credit card') {

            $('.credit-card').show();

        }
        else {
            $('.credit-card').hide();

        }
        if ($(this).val() === 'paypal') {


            $('p:first').show();
        }
        else {
            $('p:first').hide();

        }

        if ($(this).val() === 'bitcoin') {
            $('p:last').show();
        }
        else {

            $('p:last').hide();
        }
    })

    //activities checkboxes
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

            checkbox4.prop("disabled", true);
            checkbox4.parent().addClass("disabled");
            checkbox4.parent().append('<span class="unavailable" > ***Unavailable***  </span>');
            updateCost(100);
        }

        else {

            checkbox4.prop("disabled", false);
            checkbox4.parent().removeClass("disabled");
            checkbox4.parent().find('.unavailable').remove();
            updateCost(-100);
        }

    });
    $('input[name="js-libs"]').change(function () {
        if ($(this).prop("checked")) {

            checkbox5.prop("disabled", true);
            checkbox5.parent().addClass("disabled");
            checkbox5.parent().append('<span class="unavailable">***  Unavailable ***  </span>');
            updateCost(100);
        }

        else {

            checkbox5.prop("disabled", false);
            checkbox5.parent().removeClass("disabled");
            checkbox5.parent().find('.unavailable').remove();
            updateCost(-100);
        }
    });
    $('input[name="express"]').change(function () {
        if ($(this).prop("checked")) {

            checkbox2.prop("disabled", true);
            checkbox2.parent().addClass("disabled");
            checkbox2.parent().append('<span class="unavailable">*** Unavailable *** </span>');
            updateCost(100);

        }
        else {

            checkbox2.prop("disabled", false);
            checkbox2.parent().removeClass("disabled");
            checkbox2.parent().find('.unavailable').remove();
            updateCost(-100);
        }
    });
    $('input[name="node"]').change(function () {

        if ($(this).prop("checked")) {
            checkbox3.prop("disabled", true);
            checkbox3.parent().addClass("disabled");
            checkbox3.parent().append('<span class="unavailable" >  ***Unavailable*** </span>');
            updateCost(100);

        }

        else {

            checkbox3.prop("disabled", false);
            checkbox3.parent().removeClass("disabled");
            checkbox3.parent().find('.unavailable').remove();
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
   
    
    
    
    var regexCC = /\b\d{13,16}\b/;
    
    var zipRegex = /^\d{1,5}$/;
    var CVVRegex = /^\d{3}$/;
    var regExMail = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //var validEmail = regEx.test(email);

    //$('form').append('<p id="invalidEntry"></p>');
    ('#error-message').hide();
    
    $('form').submit(function (){
    
        e.preventDefault(); 
    
        
        if ($('#name').length < 1) {
        $('#name').after('<span class="error-message">This field is required</span>');
            //       }
        //if ( $('#name').val() === "" ) {
            //invalidEntry= "SORRY YOU MUST ENTER YOUR NAME";
            $('#name').focus();
        }
        
        if (email.length < 1) {
                
            $('#mail').after('<span class="error-message">This field is required</span>');
            $('#mail').focus();
        }
        //($('#mail').val() = emailRegEX) {
        //invalidEntry.text = " THIS IS NOT A VALID EMAIL, PLEASE ENTER AGAIN";
         else 
         
         if (!regExMail) {
         
            $('#mail').after('<span class="error-message">Enter a valid email</span>');
            $('#mail').focus();
        }
        
        if ( $(".activities").checked.length === 0 ) {
            $(".activities").after('<span class="error-message">Please check at least one acivity</span>');
           
            // invalidEntry = "Please select at least one activitytivity.";
            $('.activities').focus();
        
        } else if ( $("#payment").val() === "select_method" )  {
            $('form').append("Please select a payment method.");
            $('#payment').focus();
        
        } else if ( $("#payment").val() === "credit card" && (!regexCC).test($("#cc-num").val()) )  
        
        {
            $('form').append("Please enter a valid credit card number.");         
            $('#cc-num').focus();
        
        } else if ( $("#payment").val() === "credit card" && (!zipRegex).test($("#zip").val()) 
        )  
        {
            $('form').append("Please enter a valid zip code."); 
            $('#zip').focus();
        
        } else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
            $('form').append("CVV MUST BE THREE NUMBERS."); 
            
            $('#cvv').focus();
        } 
        
        document.getElementById('error-message').innerHTML = errorMessage;
        $('#error-message').show();
        
    });
    
    
    }); 
