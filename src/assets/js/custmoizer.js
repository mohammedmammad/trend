$(document).ready(function() {
    $('#distance1').click(function() {
       if ($(this).prop("checked") == true) {
         $('.div-none').css({"display": "block"})
         
       } else if ($(this).prop("checked") == false) {
          $('.div-none').css({"display": "none"})
       }
    });


    $('.servces1 input').click(function() {
       if ($(this).prop("checked") == true) {
         $('.price-none').css({"display": "block"})
       } else if ($(".servces1 input").prop("checked") == false) {
          $('.price-none').css({"display": "none"})
       }
    });


    /************** * check Introductory pages * ****************/
    $('#no1').change(function() {
      if ($(this).is(":checked")) {
         $("#collapseOne4 input:checkbox").click(function() { 
            $(this).prop('checked', false);
         });
         $("#collapseOne5 input:checkbox").click(function() { 
            $(this).prop('checked', false);
         });
         $("#collapseOne5 #type2").click(function() { 
            $(this).prop('checked', true);
         })
       
      }
      else{
         $("#collapseOne4 input:checkbox").click(function() { 
            $(this).prop('checked', true);
         });
         $("#collapseOne5 input:checkbox").click(function() { 
            $(this).prop('checked', true);
         });
         $("#collapseOne5 #type2").click(function() { 
           return true
         })
      }
    });
      
 });