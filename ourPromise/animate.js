$(document).ready(function () {
    var spoilers = $(".ingredient");
    spoilers.each(function () {
        var spoiler = $(this);
        spoiler.find(".moreOpen").click(function () {
            if ($(this).hasClass("moreOpen")) {
                //                заміна + на -
                $(this).removeClass("moreOpen").addClass("moreClose");
                spoiler.find(".ingredientInfo").slideToggle("slow");
            } else {
                $(this).removeClass("moreClose").addClass("moreOpen");
                spoiler.find(".ingredientInfo").slideToggle("slow");
            }
        });
    });


})
