//Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

$(document).ready( function () {
    console.log('Start');
    $('#table_id').DataTable({
        searching: false,
    });
} );