$(function() {
    $('.filter').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-galeria').show('1000');
        } else {
            $('.cont-galeria').not('.' + valor).hide('1000');
            $('.cont-galeria').filter('.' + valor).show('1000');
        }
    });
});