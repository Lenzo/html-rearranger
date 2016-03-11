var $belowHeading = $('<h2>');
var $aboveHeading = $('<h2>');
var $body = $('body');
var $li = $('li')
var $belowUl = $('<ul>');
var $aboveUl = $('<ul>');

$belowHeading.html('Below ground veggies');

$aboveHeading.html('Above ground veggies');

$body.append($belowHeading);
$body.append($belowUl);


$body.append($aboveHeading);
$body.append($aboveUl);

$li.each(function () {
	if ($(this).hasClass('below')) {
		$belowUl.append($(this));
} else {
		$aboveUl.append($(this));
}

});