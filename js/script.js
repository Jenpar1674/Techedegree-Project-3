
var checkbox1 = $("input[name='all']")
var checkbox2 = $("input[name='js-frameworks']")
var checkbox3 = $("input[name='js-libs']")
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
$('#colors-js-puns').hide();


$(document).ready(function () {

    $('#title').click(function () {
        if ($('#title').val() === 'other') {
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
            checkbox4.parent().append('<span class="unavailable" >&nbsp; Unavailable  </span>');
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
            checkbox5.parent().append('<span class="unavailable">&nbsp; Unavailable </span>');
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
            checkbox2.parent().append('<span class="unavailable">&nbsp; Unavailable </span>');
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
            checkbox3.parent().append('<span class="unavailable">&nbsp; Unavailable </span>');
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
    
    var emailRegEX = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var zipRegex = /^\d{1,5}$/;
    var CVVRegex = /^\d{3}$/;
    var errorMessage=" "
    var username = $('input[name="username"]').val();

   
   $('form').prepend(<h1 style="font-family:verdana;"('<p id="error-message" style="font-family:courier"></h1></p>'));
    //check to make sure name field isn't blank and show error if it is
    $(errorMessage).hide();
    
    $(function() {
        $('form').submit(function(e) {
            e.preventDefault(); 
            
            if ( username == '') {
                $('#name').addClass('error');
                $('#errors').text('*Please enter a username*');
                return false;
                $('errors').innerHTML="*Please enter a username*";
                errorMessage = "Please ensure you have entered all required fields.";
            }

        });
    });.




    //     if ($('#name').val === '') {

    
//             $('#errors').text('*Please enter a username*');
//         }
//     });
// });
//             // //errorMessage = "Please ensure you have entered all required fields.";
//             // $('#name').addClass('error');
//             // $('errors').innerHTML="*Please enter a username*";
//             // $('#errors').text('*Please enter a username*');
//             // return false;
 $('#name').focus();
    
//     }
    
    
    // //function validateForm() {
    //     var form = document.forms[action='index.html'],
    //         inputs = form.getElementsByTagName('input'),
    //         errors = form.getElementsByClassName('error'),
    //         regex = /\S+@\S+\.\S+/,
    //         setErrorMsg = function(str, msg) {
    //           return str.replace('_', ' ') + ' ' + msg;
    //         },
    //         countErrors = 0;

    //     // loop all elements but not submit button
    //     for (var i = 0, l = inputs.length - 1; i < l; i++) {
    //       var val = form[inputs[i].name].value;

    //       // clear all errors
    //       errors[i].innerHTML = '';

    //       // validate email
    //       if (inputs[i].name === 'mail' && !regex.test(val)) {
    //         errors[i].textContent = setErrorMsg(inputs[i].name, 'should be valid');
    //         countErrors++;
    //       }

    //       // validate required
    //       if (!val) {
    //         errors[i].textContent = setErrorMsg(inputs[i].name, 'field is required');
    //         countErrors++;
    //       }
    //     }

    //     return countErrors === 0;
    //   }







    //$(document).ready(function() {

    // $('#first_form').submit(function(e) {
    //       e.preventDefault();
    //       var first_name = $('#name').val();
    //       //var last_name = $('#last_name').val();
    //       var email = $('#mail').val();
    //       //var password = $('#password').val();

    //       $(".error").remove();

    //       if (first_name.length < 1) {
    //         $('#name').after('<span class="error">This field is required</span>');
    //       }
    //       //if (last_name.length < 1) {
    //         //$('#last_name').after('<span class="error">This field is required</span>');
    //       //}
    //       if (email.length < 1) {
    //         $('#mail').after('<span class="error">This field is required</span>');
    //       } else {
    //         var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //         var validEmail = regEx.test(email);
    //         if (!validEmail) {
    //           $('#mail').after('<span class="error">Enter a valid email</span>');
    //         }
    //      // }
    //       //if (password.length < 8) {
    //         //$('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    //       }
    //     });

    //     $('form[id="second_form"]').validate({
    //       rules: {
    //         fname: 'required',
    //         lname: 'required',
    //         user_email: {
    //           required: true,
    //           email: true,
    //         },
    //         psword: {
    //           required: true,
    //           minlength: 8,
    //         }
    //       },
    //       messages: {
    //         fname: 'This field is required',
    //         lname: 'This field is required',
    //         user_email: 'Enter a valid email',
    //         psword: {
    //           minlength: 'Password must be at least 8 characters long'
    //         }
    //       },
    //       submitHandler: function(form) {
    //         form.submit();
    //       }
    //     });

    //   });















    //$(document).ready(function() {

    //     $("body > div > form").submit(function(e) {
    //       e.preventDefault();
    //       var validName = $('#name').val();
    //       var validEmail = $('#mail').val();
    //       var validCCnum = $('#cc-num').val();

    //       $(".error").remove();

    //       if (name.length < 1) {
    //         $('#name').after('<span class="error">This field is required</span>');
    //       }

    //       if (mail.length < 1) {
    //         $('#mail').after('<span class="error">This field is required</span>');
    //       } else {
    //         var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //         var validEmail = regEx.test(mail);
    //         if (!validEmail) {
    //           $('#mail').after('<span class="error">Enter a valid email</span>');
    //         }
    //     //   //}
    //     //   if (password.length < 8) {
    //     //     $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    //     //   }
    // };

    //});



    //)
    /** 
    VALIDATORS
    *  
    */

    //name Cant be blank
    //function isValidName(name) {
    // return/\w+/.test(name)

    // }

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
    //function isValidEmail(mail) {
    //if
    //return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
    //}

    /**
     * 
     * FORMATTING FUNCTIONS
     * 
     */



    //function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    //if (show) {
    // element.style.display = "inherit";
    //} else {
    // element.style.display = "none";
    //}
    //}

    //function createListener(validator) {
    //   return e => {
    //     const text = e.target.value;
    //     const valid = validator(text);
    //     const showTip = text !== "" && !valid;
    //     const tooltip = e.target.nextElementSibling;
    //     showOrHideTip(showTip, tooltip);
    //   };
    // }

    //nameInput.addEventListener("input", createListener(isValidName));

    //passwordInput.addEventListener("input", createListener(isValidPassword));

    //telephoneInput.addEventListener("input", createListener(isValidTelephone));

    //emailInput.addEventListener("input", createListener(isValidEmail));

})
