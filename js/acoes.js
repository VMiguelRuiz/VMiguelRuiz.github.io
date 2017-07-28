<link rel="stylesheet" href="" data-href="css/style0.css" id="css-2" >

$(window).scroll(function () {
    var atual = $("#css-2").attr("href");
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass("navbar-invertida");
        $("#css-2").attr("href", $("#css-2").data("href"));
    } else {
        $("#css-2").attr("href", "");
        $('.navbar').removeClass("navbar-invertida");
    }
});
