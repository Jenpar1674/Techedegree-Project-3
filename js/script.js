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
/*** ***
 * const odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
                
$secureLinks.attr('target','blank');
$pdfs.attr('download',true);



$pdfs.on('click', function(event){
  
  //check if checkbox has been checked
  //if zero chekboxes are checked
  if ($(':checked').length===0){
    event.preventDefault();
    
  //prevent download of document
  //aler the user
    alert('please check the box to allow PDF downloads.');
  //else allow the download
}


});

$('#links').append($pdfCheckbox);

$('a').each(function(index, link){

  console.log(index, $(element).attr('href'));
              
  


  });
 * 
 * 
 * 
 * 
 * 
 * 
 * */              


 







