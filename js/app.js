 $(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
      })
   });
  jQuery(document).ready(function(){
    "Use Strict"
    $(".carousel").ripples({
      dropRadius: 15,
      perturbance: 0.01,
    });
    $(".text").typed({
      strings: ["Lekan Dar Rocks", "Workhard play harder"],
      typespeed:0,
    });
  })

$("#but1").click(function(){
  $("#rid").slideToggle();
});
