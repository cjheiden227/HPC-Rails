

//Initialize the sticky navbar
$('.navbarWrapper').stickyNavbar({
        startAt: 0,
        selector: "a",
});
//Grab map coordinates from link
$(document).ready(function(){
    
    //Listen for clicks on the map links
    $('.map-link').on('click', function(e){
    	e.preventDefault();
    	address=encodeURIComponent($(this).attr('data-map'));
    	map= $("<iframe height='500' scrolling='no'  marginheight='0' marginwidth='0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCnXy5N52r2BsyqhjIU-T4shbIqgeaf34g&amp;q="+ address + "'></iframe>");
    	map.addClass('map-target small-12 columns big-icon');
    	$('.map-target').replaceWith(map);
    });

    //listen for form submission
    $('#new_message').submit(function(e){
     
        if($(this).valid()){
            $('#submit').prop('disabled', 'disabled');
            $('#spinner').show();
            var target = document.getElementById('spinner');
            var opts = {
                lines: 13, // The number of lines to draw
                length: 10, // The length of each line
                width: 10, // The line thickness
                radius: 20, // The radius of the inner circle
                corners: 1, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#000', // #rgb or #rrggbb or array of colors
                speed: 1, // Rounds per second
                trail: 60, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)
                top: '50%', // Top position relative to parent
                left: '50%' // Left position relative to5 parent
            };
            var spinner = new Spinner(opts).spin(target);
        }
        else{
            e.preventDefault();
        }
    });
    //Validate the form
    $('#new_message').validate({
        errorPlacement:function(error, element){
            element.prev().addClass('label-error');
            element.prev().after(error);
        },
        rules: {
            'message[name]' : {required: true},
            'message[email]': {required: true, email: true},
            'message[phone]': {required: true, phoneUS: true}, 
            'message[body]' : {required: true}
        
        },
        messages: {
             'message[name]': {
                required: "We need your name to contact you"
            },
            'message[email]': {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
            },
            'message[phone]': {
                required: "We need your phone number contact you",
                phoneUS: "Please enter a valid phone number"
            },
             'message[body]': {
                required: "We need a message"
            }
        }
    });

    $('#new_message input').on('blur', function () {
        if ($(this).valid() && $('#new_message').valid()) {                 
            $('#submit').prop('disabled', false);        
        } else {
            $('#submit').prop('disabled', 'disabled');   
        }
    });
});

