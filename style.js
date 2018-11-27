// NAVBAR //

$('.hometext').hide();
$('.abouttext').hide();
$('.worktext').hide();
$('.contacttext').hide();
$('.skillstext').hide();

$('.homeicon').mouseover(function(){
	$('.homeicon').hide();
	$('.hometext').fadeIn();
});

$('.hometext').mouseout(function(){
	$('.hometext').hide();
	$('.homeicon').fadeIn();
});

$('.abouticon').mouseover(function(){
	$('.abouticon').hide();
	$('.abouttext').fadeIn();
});

$('.abouttext').mouseout(function(){
	$('.abouttext').hide();
	$('.abouticon').fadeIn();
});

$('.workicon').mouseover(function(){
	$('.workicon').hide();
	$('.worktext').fadeIn();
});

$('.worktext').mouseout(function(){
	$('.worktext').hide();
	$('.workicon').fadeIn();
});

$('.skillsicon').mouseover(function(){
	$('.skillsicon').hide();
	$('.skillstext').fadeIn();
});

$('.skillstext').mouseout(function(){
	$('.skillstext').hide();
	$('.skillsicon').fadeIn();
});


$('.contacticon').mouseover(function(){
	$('.contacticon').hide();
	$('.contacttext').fadeIn();
});

$('.contacttext').mouseout(function(){
	$('.contacttext').hide();
	$('.contacticon').fadeIn();
});

// HOME //

$('.frontName').hide().delay(0500).fadeIn(3000);
$('.frontLocation').hide().delay(1500).fadeIn(2000);
$('.frontName').mouseover(function(){
	$('.frontName').css('font-size', 60);
	$('.frontLocation').css('font-size', 21);
});
$('.frontName').mouseout(function(){
	$('.frontName').css('font-size', 55);
	$('.frontLocation').css('font-size', 26)
});

$('.frontLocation').mouseover(function(){
	$('.frontLocation').slideUp().delay(1500).fadeIn(1000);
});

// EXPERIENCE //

$('.info').hide();
$('.info1').hide();
$('.info2').hide();
$('.info3').hide();
$('.info4').hide();
$('.info5').hide();
$('.info6').hide();

$('.mainwork').hide().delay(0500).slideDown(1000);
$('#work1').hide().delay(1000).slideDown(1000);
$('#work2').hide().delay(1500).slideDown(1000);
$('#work3').hide().delay(2000).slideDown(1000);
$('#work4').hide().delay(2500).slideDown(1000);
$('#work5').hide().delay(3000).slideDown(1000);
$('#work6').hide().delay(3500).slideDown(1000);

$('.mainwork').mouseover(function(){
	$('.info').fadeIn(1000);
});
$('.mainwork').mouseout(function(){
	$('.info').hide();
});

$('#work1').mouseover(function(){
	$('.info1').fadeIn(1000);
});
$('#work1').mouseout(function(){
	$('.info1').hide();
});

$('#work2').mouseover(function(){
	$('.info2').fadeIn(1000);
});
$('#work2').mouseout(function(){
	$('.info2').hide();
});

$('#work3').mouseover(function(){
	$('.info3').fadeIn(1000);
});
$('#work3').mouseout(function(){
	$('.info3').hide();
});

$('#work4').mouseover(function(){
	$('.info4').fadeIn(1000);
});
$('#work4').mouseout(function(){
	$('.info4').hide();
});

$('#work5').mouseover(function(){
	$('.info5').fadeIn(1000);
});
$('#work5').mouseout(function(){
	$('.info5').hide();
});

$('#work6').mouseover(function(){
	$('.info6').fadeIn(1000);
});
$('#work6').mouseout(function(){
	$('.info6').hide();
});

// SKILLS //

$('.softskillitem').hide();
$('.techitem').hide();

$('.softskills').mouseover(function(){
	$('.softskillitem').slideDown(2000);
});

$('.softskills').click(function(){
	$('.softskillitem').slideUp(2000);
});

$('.techskills').mouseover(function(){
	$('.techitem').slideDown(2000);
});

$('.techskills').click(function(){
	$('.techitem').slideUp(2000);
});

// CONTACT //
$('.git').hide();
$('.linked').hide();
$('.emails').hide();

$('.git1').mouseover(function(){
	$('.git').fadeIn(1000);
});

$('.git1').mouseout(function(){
	$('.git').fadeOut(1000);
});

$('.link2').mouseover(function(){
	$('.linked').fadeIn(1000);
});

$('.link2').mouseout(function(){
	$('.linked').fadeOut(1000);
});

$('.email1').mouseover(function(){
	$('.emails').fadeIn(1000);
});

$('.email1').mouseout(function(){
	$('.emails').fadeOut(1000);
});

// ABOUT //

$('.about1').hide().fadeIn(2000);
$('.about2').hide().fadeIn(2700);
$('.about3').hide().fadeIn(3500);
$('.about4').hide().fadeIn(4200);