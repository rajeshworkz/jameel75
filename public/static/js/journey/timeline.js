                
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
     


     
 $(".years-list").click(function(){
    
     
     console.log("years clicked");
     
 $('.timeline-col').animate({
 scrollTop: $('.timeline-title.'+$(this).data("year")).offset().top - 130},
 'slow');
         
 });    



  
    
    
$(".timeline-col").on('resize scroll',function() {

    $('.timeline .timeline-title').each(function() {
        
           if($(this).inViewport('-100')) {              
                    $(this).addClass("active");    
                  $('.'+$(this).data("year")).addClass("active");             
               
                  console.log("scroll");
  //               $('.years-scroll').animate({
  //                scrollTop: $('.years-list.active').offset().top},
  //                'slow');
               
           }else{
               $('.'+$(this).data("year")).removeClass("active"); 
               $(this).removeClass("active");    
        
           }
  
  
    });
  
  });

}
    