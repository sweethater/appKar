$(window).load(function() {

	// hide_body_parts();
	// $("#loader").fadeOut("slow");

});

$(document).ready(function() {


	// var fullDate = new Date()
	// var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
	// var currentDate = fullDate.getDate() + "." + twoDigitMonth + ".";
	// $('#calendar').text(currentDate)

	var player1 = new MediaElementPlayer('video#disease1-vid1');
	var player2 = new MediaElementPlayer('video#disease1-vid2');
	var player3 = new MediaElementPlayer('video#disease1-vid3');
	var player4 = new MediaElementPlayer('video#disease1-vid4');

	$('.mejs-controls').hide();

    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '#pushobj' )],
        collapsed: true,
        overlapWidth: 60,
        menuWidth: 550,
        menuHeight: 700
    });

	$("#bgvid").bind("ended", function() {
		var vid = $("#bgvid");
		$("#bgvid")[0].play();
	});

})
