$(document).ready(
    function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa fa-pause');
            $('#carouselButton').children('span').addClass('fa fa-play');
        } 
        else if($('#carouselButton').children('span').hasClass('fa fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa fa-play');
            $('#carouselButton').children('span').addClass('fa fa-pause');
        }

    });
    // $('#carousel-play').click(function(){
    //     $('#mycarousel').carousel('cycle');
    // });

    // login modal sript
    // $('#loginModal').modal({
    //     keyboard: false
    // });
    // $('#loginModal').click(function(){
    //     $('#loginModal').modal('hide');
    //     $('#loginModal').modal('toggle');
    //     $('#loginModal').modal('show');

    // });
    
    $("#loginModal").click(function(){
        $("loginModal").modal('toggle');
    });

    // reserve table modal script
    // $('#ReserveForm').modal({
    //     keyboard: false
    // });
    // $('#ReserveForm').click(function(){
    //     $('#ReserveForm').modal('hide');
    //     $('#ReserveForm').modal('toggle');
    //     $('#ReserveForm').modal('show');

    // });

    $("#ReserveForm").click(function(){
        $("ReserveForm").modal('toggle');
    });
    
 });