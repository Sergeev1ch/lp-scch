$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        responsive: {
        	0: {
        		items: 1
        	},
        	768:{
        		items: 3
        	}
        }
    });
});