$(document).ready(function(){
    $("#mycarousel").carousel ({ interval: 1000 });
    $("#carouselBtn").click(function(){
      if ($("#carouselBtn").children("span").hasClass("fa-pause")){
          $("#mycarousel").carousel("pause");
          $("#carouselBtn").children("span").removeClass("fa-pause");
          $("#carouselBtn").children("span").addClass("fa-play");
      }
      else if ($("#carouselBtn").children("span").hasClass("fa-play")){
          $("#mycarousel").carousel("cycle");
          $("#carouselBtn").children("span").removeClass("fa-play");
          $("#carouselBtn").children("span").addClass("fa-pause");
      }
    });
    //reserve button click -> Reserve modal
    $("#reserveBtn").click(function(){
      $("#reserveModal").modal('toggle');
    });

    //login link click -> Login modal
    $("#loginLink").click(function(){
      $("#loginModal").modal('toggle');
    });

});
