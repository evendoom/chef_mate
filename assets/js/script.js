$(document).ready(function() {

    $('.section-features-sticky').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        }

        else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '20%'
    })

    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
    }, {
        offset: '25%'
    })
    */
  
});