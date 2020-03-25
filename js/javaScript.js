//alle jQuery begint met $
//bekijk met jQuery of het document is geladen voordat je er wat mee doet
//   en is een object die argumenten accepteert
$(document).ready( function(){
  //selecteer elementer verberg voor xyz secondes en transition is int en laat vervolgens na 300 int weergeven
//$('main').hide(300).delay(300).show(300);

$('figure img').mouseenter( function(){
    $(this).fadeTo(300, .01);
  }).mouseleave( function(){
  $(this).fadeTo(1000, 1);
}).click( function(){
  //laat alles weer zien
  $(this).next().toggle(700);
  });


    // footer
    $('footer').click( function(){
      $(this).animate( {
          top: '-20px',
          opacity: '-=,2'
      }, 900)
    }).dbclick( function(){
      $(this).animate({
        top: '0',
        opacity: '1'
      },900)
    })
});
