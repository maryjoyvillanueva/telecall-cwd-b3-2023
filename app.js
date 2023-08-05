$(document).ready(function () {
    
    //parallax init
    $('.parallax').parallax();

    //sidebar init
    $('.sidenav').sidenav({
        inDuration: 500,
        outDuration: 500
    });

    //carousel init
    $('.carousel').carousel();

    //autoplay for carousel 
    autoplay(); 
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 2000);
    }

    //slider init
    $('.slider').slider({
        indicators:false,
        height: 475,
        interval: 3000
    });

    //materialboxed
    $('.materialboxed').materialbox({
        inDuration: 800,
        outDuration: 500
    });

     //scrollspy init
     $('.scrollspy').scrollSpy();

     //modals init
     $('.modal').modal();
     
});
