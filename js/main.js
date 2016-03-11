var $belowHeading = $('<h2>');
var $aboveHeading = $('<h2>');
var $body = $('body');
var $li = $('li')
var $belowUl = $('<ul>');
var $aboveUl = $('<ul>');

$belowHeading.html('Below ground veggies');
$aboveHeading.html('Above ground veggies');

$body.append($belowHeading);
$body.append($aboveHeading);

$li.each(function () {
	if ((this).hasClass('below')) {
		(this).$belowUl.append;
} else {
	$(this).append.$aboveUl;
};
