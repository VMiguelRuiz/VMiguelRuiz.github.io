// btn-menu toggle
    $(document).ready(function() {
        $('.btn-menu').click(function() {
            $('.navbar').slideToggle();
        });
        $(window).resize(function() {
            if ($(window).width() > 950) {
                $('.navbar').show();
            } else {
                $('.navbar').hide();
            }
        });
    });

// plus/minus toggle
    $(function() {
        $('.expand').click(function() {
            $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
        });
    });

// section expansivel
    $(document).ready(function() {
        $('.expand').click(function(e) {
            e.preventDefault();
            if ($(this).next().is(':hidden') === true) {
                $(this).next().slideDown('normal');
            }else{
                $(this).next().slideUp('normal');
            }
        });
        $('.expand-section').hide();
    });

// Barra de progresso
jQuery(document).ready(function(){
    jQuery('.progress-bar').each(function() {
        jQuery(this).find('.progress-content').animate({
            width:jQuery(this).attr('data-percentage')
        },2000);

        jQuery(this).find('.progress-number-mark').animate(
            {left:jQuery(this).attr('data-percentage')},
            {
                duration: 2000,
                step: function(now, fx) {
                    var data = Math.round(now);
                    jQuery(this).find('.percent').html(data + '%');
                }
            });
        });
    });


// Botao subir ao topo
$(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
        $('.btn-topo').addClass('btn-topo-ativo');
    } else {
        $('.btn-topo').removeClass('btn-topo-ativo');
    }
});

//Scroll Suave Link Interno
// $('.scroll-suave').click(function(e){
//     e.preventDefault();
//     var id = $(this).attr('href'),
//         targetOffset = $(id).offset().top;
//     $('html, body').animate({
//         scrollTop: targetOffset
//     }, 500)
// });

$('.scroll-suave').click(function() {
    var $doc = $('html, body');
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
