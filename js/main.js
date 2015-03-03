var $btnShowhide = $('.btn-show-hide'); 
var $box = $('.box'); 

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand'); 
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce'); 
var $circle = $('.circle'); 

var $btnAppend = $('.btn-append'); 
var $list = $('.list');

$btnShowhide.on('click', function () { 
$box.toggleClass('js-box-hide');
}); 

$btnMove.on('click', function () { 
$diamond.toggleClass('js-move-diamond');
}); 

$btnCollapse.on('click', function () { 
$panel.toggleClass('js-panel-collapse');
}); 

$btnBounce.on('click', function () { 
$circle.toggleClass('js-circle-bounce');
}); 

$btnAppend.on('click', function () { 
	var $li = $('<li>').html('hello'); 
	$li.addClass('js-list-append'); 
	$list.append($li);
}); 
	