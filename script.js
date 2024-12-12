$(document).ready(function() {
    // Ajuste do footer logo após o carregamento da página
    function adjustFooter() {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var footerHeight = $('footer').outerHeight();

        // Se o conteúdo for menor que a altura da janela, empurre o footer para o fundo
        if (documentHeight < windowHeight) {
            $('footer').css({
                'position': 'absolute',
                'bottom': '0',
                'width': '100%'
            });
        } else {
            $('footer').css({
                'position': 'relative',
                'bottom': 'auto'
            });
        }
    }

    // Verifica o ajuste do footer ao carregar a página
    adjustFooter();

    // Verifica se o tamanho da página muda ao redimensionar
    $(window).resize(function() {
        adjustFooter();
    });

    // Ajusta o footer conforme a rolagem (se necessário)
    $(window).scroll(function() {
        adjustFooter();  // Chama a função para garantir que o footer se comporta corretamente
    });
});
