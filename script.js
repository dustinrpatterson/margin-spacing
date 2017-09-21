    //Spaces the margins on the pinned nav
    $(window).resize(function () {
        if ($(window).width() > 1300) {
            var extraSpace = $(window).width() - 1300;
            var halfExtraSpace = extraSpace / 2;
            $('.pinned-search').css("margin-right", halfExtraSpace);
            $('.pinned-brand').css("margin-left", halfExtraSpace);
        } else {
            $('.pinned-search').css("margin-right", 5);
            $('.pinned-brand').css("margin-left", 5);
        }
    });
