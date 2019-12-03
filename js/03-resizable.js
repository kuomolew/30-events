//Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

$(document).ready( function () {
    
    
    $('body').on('mousedown', '.corner', (e) => {
        console.log('Start');
        let initialHeight = $('.resizable').outerHeight();
        let initialWidth = $('.resizable').outerWidth();
        let x = e.pageX; 
        let y = e.pageY; 
        $(document).mousemove(function(e){
            let width = initialWidth + (e.pageX - x);
            let height = initialHeight + (e.pageY - y);
            $('.resizable').css('width', `${width}px`)
                            .css('height', `${height}px`);
        });     
    });

} );