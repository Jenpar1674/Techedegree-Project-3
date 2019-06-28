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

//$("input[type=checkbox]").on('check','uncheck',function(){

   
//}


//const odd = $('a:odd');
//odd.hide();
//const $secureLinks = $(a'[href^=https://"]');
//const $pdfs = $('a[hrefs=".pdf"]');
                
//$secureLinks.attr('target','blank');
////$pdfs.attr('download',true);

//$odd.css('backgroundColor')
                


 







