var $btnShowhide = $('.btn-show-hide'); 
var $box = $('.box'); 

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand'); 
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce'); 
var $circle = $('.circle'); 

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