//Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

$(document).ready( function () {
    let pressed = false;
    $('body').on('click', '.corner', (e) => {
        pressed = false;
    });  
    $('body').on('mousedown', '.corner', (e) => {
        let initialHeight = $('.resizable').outerHeight();
        let initialWidth = $('.resizable').outerWidth();
        let x = e.pageX; 
        let y = e.pageY; 
        pressed = true;
        $(document).mousemove(function(event){
            $('body').on('mouseup', () => {
                pressed = false;
            });
            if (pressed) {
                let width = initialWidth + (event.pageX - x);
                let height = initialHeight + (event.pageY - y);
                $('.resizable').css('width', `${width}px`)
                                .css('height', `${height}px`);
            }
        });     
    });
});