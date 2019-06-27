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
   //if ($(this).val() ==="js puns"){
   
   //$('#color').show();
    $('#color option:contains(JS Puns)').show('#color option');
    

    $('#color option:not(:contains(JS Puns))').hide();

   }
     
    //$('#color option [value = "cornflowerblue" ]').show();
    //$('#color option [value = "darkslategrey" ]').show();
   //$('#color option [value = "gold" ]').show();
    //$('#color option [value="tomato"]').hide();
    //$('#color option [value="steelblue"]').hide();
    //$('#color option [value="dimgrey"]').hide();
    //$('#color').val("cornflowerblue");

  
   


 //else if ($(this).val()==="heart js"){
 // $("#color").show();
  $('#color option:not(:contains(JS Puns))').show();
  $('#color option:contains(JS Puns)').hide();
  
  //

      // }
   //$('#color option[value="tomato"]').show();
    //$('#color option[value="steelblue"]').show();
    //$('#color option[value="dimgrey"]').show();
    //$('#color option[value="cornflowerblue"]').hide();
    //$('#color option[value="darkslategrey"]').hide();
    //$('#color option[value="gold"]').hide();
    //$('#color').val("tomato");
  
 // }
 

//});










 







