/* 
js 
*/

/*
var header = document.querySelector('header'),
	headerHeight = header.clientHeight,
	emptyArea = document.querySelector('.empty-area'),
	emptyHeight = emptyArea.clientHeight;

window.addEventListener('scroll', function () {
	var scrollOffset = window.pageYOffset;
	if (scrollOffset > emptyHeight + headerHeight) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
});

var logo = document.querySelector('.logo');

logo.addEventListener('dblclick', function (e) {
	e.preventDefault();
	header.classList.add('edit');
});

var input = document.querySelector('input');
var spanInLogo = document.querySelector('.logo span');

input.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		var text = this.value;
		spanInLogo.innerText = text;
		this.value = '';
		header.classList.remove('edit');
	}
});
*/

/*
jquery
*/

var header = $('header'),
    emptyArea = $('.empty-area'),
    headerHeight = header.outerHeight(),
    emptyHeight = emptyArea.outerHeight(),
    totalHeight = headerHeight + emptyHeight;
    
$(window).scroll(function(){
    var scrollOffset = window.pageYOffset;
    if(scrollOffset >= totalHeight){
        header.addClass('sticky');
    } else{
        header.removeClass('sticky');
    }
});

var logo = $('.logo');
logo.dblclick(function(){
    header.addClass('edit');
});

var input = $('input'),
    spanInLogo = $('.logo span');
input.keydown(function(e){
    if(e.which === 13){
        var text = $(this).val();
        spanInLogo.text(text);
        $(this).val('');
        header.removeClass('edit');
    }
});
