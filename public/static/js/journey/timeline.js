                

function timelineFun(){
$(".timeline-box").click(function(){
    $(".detail-col").addClass("on");
     
 });
     
     $(".globe-slider-item").click(function(){
    $(".detail-col").addClass("on");
     
 });
     
  $(".timeline-click").click(function(){
    $(".globe-col").removeClass("on"); 
      
      $(".globe-click").removeClass("active");
      $(".timeline-click").addClass("active");
 }); 
     
  $(".globe-click").click(function(){
    $(".globe-col").addClass("on");  
      
      $(".timeline-click").removeClass("active");
      $(".globe-click").addClass("active");
 });     
     
     
     
 $(".close").click(function(){
    $(".detail-col").removeClass("on");
     
 });
     
     
 $(".fliter-click").click(function(){
     
    $(".filters").toggleClass("on");
     
 });
     


     
   




 
 
 



// $('.timeline-col').scroll(function(){
//   var scrollPos = $('.timeline-col').scrollTop();
//   // console.log(scrollPos);

//   if(scrollPos < 10000) {  
 
//     // scrollYears();
    
//   }else{
       
//   }


// $(".years-list.active")[0].scrollIntoView({
//   behavior: "smooth", // or "auto" or "instant"
//   block: "start" // or "end"
// });

  
// });



$(".years-list").click(function(){
  $(".timeline-title."+$(this).data("year"))[0].scrollIntoView({
    behavior: "smooth", 
    block: "start" 
  });
}); 
   

var scrollTimer;    
$(".timeline-col").on('scroll',function(e) {
  clearTimeout(scrollTimer);
  scrollTimer=setTimeout(function(){afterScroll()},500);
  function afterScroll(){
    if($(".years-list").hasClass("active")){
$(".years-list.active")[0].scrollIntoView({
  behavior: "smooth", 
  block: "center" 
});
}
}
$('.timeline .timeline-title').each(function() {
if($(this).inViewport('-100')) {              
$(this).addClass("active");    
$('.'+$(this).data("year")).addClass("active");     
 }else{
$('.'+$(this).data("year")).removeClass("active"); 
$(this).removeClass("active");         
}
 });
});

}
    