$(document).ready(function () {

    $("#nav-icon1").click(function () {
        $(this).toggleClass("open"), $(".navy").toggleClass("back-nav"),
            $(".nav-r").toggleClass("fixed-r"), $(".body-overlay").toggleClass("back"), $("body").toggleClass("body-over")
    }), $(".body-overlay").click(function () {
        $(this).toggleClass("back"), $("#nav-icon1").toggleClass("open"), $(".navy").toggleClass("back-nav"),
            $(".nav-r").toggleClass("fixed-r"),
            $("body").toggleClass("body-over")
    });


    var o;
    jQuery(window).load(function () {
            $(".loader").fadeOut(500, function () {
                $(".loading").fadeOut(500), $("body").css("overflow-y", "auto")
            })
        }), $(".navbar a, .header a, .footer a, .top-nav a").click(function (o) {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1e3), o.preventDefault()
        })  , o = $("#scroll-top"), $(window).scroll(function () {
            $(this).scrollTop() >= 500 ? o.show() : o.hide()
        }), $("#scroll-top").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600)
        });


        /** Fixed Navbar **/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 40) {
            $(".navbar").addClass('fixd-navbar');
        } else {
            $(".navbar").removeClass('fixd-navbar');
        }
    });

        /** Fixed Filtering **/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 300) {
            $(".filtering").addClass('fixd_f');
        } else {
            $(".filtering").removeClass('fixd_f');
        }
    });

//////// like button
$(".likerr").click(function() {
    $(this).toggleClass("i_liked");
 });
    ///////////// Font awesome 5 on pseudo elements
    window.FontAwesomeConfig = {
    searchPseudoElements: true
  }
    ///////////// current year 
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
});
