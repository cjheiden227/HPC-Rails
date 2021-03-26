
$(document).foundation();

//Initialize the sticky navbar
$('.navbarWrapper').stickyNavbar({
        startAt: 0,
        selector: "a",
});

$(document).ready(function(){
    $('.sub-nav dd').click(function(){
        $('.sub-nav').find('.active').removeClass("active");
        $(this).addClass('active');
    });

    
    //Set up scrolling behavior
    $('#banner_contact').on('click', function(e){
        $.scrollTo('#contact', 600, {offset:{top:-120, left:0}});

    });

    $('.service_contact').on('click', function(e){
       
        $.scrollTo('#contact', 600, {offset:{top:-60, left:0}});

    });

    $('#service_footer').on('click', function(e){
        $.scrollTo('#services', 600, {offset:{top:-60, left:0}});
    });

    $('#banner_service').on('click', function(e){
        $.scrollTo('#services', 600, {offset:{top:-120, left:0}});
    });

     $('#location_footer').on('click', function(e){
        $.scrollTo('#locations', 600, {offset:{top:-60, left:0}});
    });

     //Grab map coordinates from link
    //Listen for clicks on the map links
    $('.map-link').on('click', function(e){
    	e.preventDefault();
    	address=encodeURIComponent($(this).attr('data-map'));
    	map= $("<iframe height='400' scrolling='no'  marginheight='0' marginwidth='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCnXy5N52r2BsyqhjIU-T4shbIqgeaf34g&amp;q="+ address + "'></iframe>");
    	map.addClass('map-target small-12 columns big-icon');
    	$('.map-target').replaceWith(map);
    });

    
});

