var emptyArea = document.querySelector('.empty-area'),
    header = document.querySelector('header'),
    emptyHeight = emptyArea.clientHeight,
    headerHeight = header.clientHeight;

window.addEventListener('scroll', function(){
    currentOffset = window.pageYOffset;
    if(currentOffset > emptyHeight + headerHeight){
        header.classList.add('sticky');
    }else {
        header.classList.remove('sticky');
    }
});

var logo = document.querySelector('.logo');
    logo.addEventListener('dblclick', function(){
    header.classList.add('edit');    
    });

var input = document.querySelector('header input'),
    span = document.querySelector('h1 span');

    input.addEventListener('keydown', function(ev){
        if(ev.keyCode === 13){
            var text = this.value;
            span.innerText = text;
            this.value = '';
            header.classList.remove('edit');
        }
    });
    
    
    
    
    
    
    
    
