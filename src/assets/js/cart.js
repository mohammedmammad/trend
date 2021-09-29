$(".remove_item").click(function() {
  $(this).parents(".cartparent").fadeOut(200).remove();
  var price = Number($(this).parents(".cartparent").find('.tdValue').text());
var $input = $(this).parent().find('input');

var count = parseInt($input.val(0)) ;
var total1 = $(this).parents(".cartparent").find('.totaloneprice');
var total2 = Number($(total1).text( count * price));
$(".row").each(function() {
     var sum = 0;
     $(".totaloneprice").each(function() {
        var priceto = Number($(this).text());
        sum += priceto
        document.getElementById("totalss").innerHTML = sum;
        var disc = Number($('#discount').text());
        var shipping = Number($('#Shipping').text());
        var final_total = sum - disc +  shipping;
        document.getElementById("totalafterdisc").innerHTML = final_total;

     });
  });

});

$( ".quantity" ).change(function() {

var price = Number($(this).parents(".cartparent").find('.tdValue').text());
console.log(price)
var $input = $(this).parent().find('input');

var count = parseInt($input.val()) ;
console.log(count);
var total1 = $(this).parents(".cartparent").find('.totaloneprice');
var total2 = Number($(total1).text( count * price));
total1.text( count * price)

$(".row").each(function() {
     var sum = 0;
     $(".totaloneprice").each(function() {
        var priceto = Number($(this).text());
        sum += priceto
        document.getElementById("totalss").innerHTML = sum;
        var disc = Number($('#discount').text());
        var shipping = Number($('#Shipping').text());
        var final_total = sum - disc +  shipping;
        document.getElementById("totalafterdisc").innerHTML = final_total;

     });
  });
});

$(".divbutton").click(function(){
var price = Number($(this).parents(".cartparent").find('.tdValue').text());
var $input = $(this).parent().find('input');

var count = parseInt($input.val()) ;
var total1 = $(this).parents(".cartparent").find('.totaloneprice');
var total2 = Number($(total1).text( count * price));
$(".row").each(function() {
     var sum = 0;
     $(".totaloneprice").each(function() {
        var priceto = Number($(this).text());
        sum += priceto
        document.getElementById("totalss").innerHTML = sum;
        var disc = Number($('#discount').text());
        var shipping = Number($('#Shipping').text());
        var final_total = sum - disc +  shipping;
        document.getElementById("totalafterdisc").innerHTML = final_total;

     });
  });

});
$(document).ready(function() {

cart();
})
function cart(){
$(".cartparent").each(function() {
var price = Number($(this).parents(".cartparent").find('.tdValue').text());
var $input = $(this).parent().find('input');
var count = parseInt($input.val()) ;
var total1 = $(this).parents(".cartparent").find('.totaloneprice');
var total2 = Number($(total1).text( count * price));
          var sum = 0;
     $(".totaloneprice").each(function() {
        var priceto = Number($(this).text());
        sum += priceto
        document.getElementById("totalss").innerHTML = sum;
        var disc = Number($('#discount').text());
        var shipping = Number($('#Shipping').text());
        var final_total = sum - disc +  shipping;
        document.getElementById("totalafterdisc").innerHTML = final_total;

     }); 
  });           
}