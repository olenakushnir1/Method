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


    //    slider
    const items = document.querySelectorAll('table');
    const itemCount = items.length;
    const nextItem = document.querySelector('.arrowNext');
    const previousItem = document.querySelector('.arrowPrew');
    let count = 0;

    function showNextItem() {
        items[count].classList.remove('active');
         $('.next').removeClass('nextDefoult');
        $('.fa-chevron-right').removeClass('fa-chevron-rightDef');
        $('.previous').removeClass('previousDefoult');
        $('.fa-chevron-left').removeClass('fa-chevron-leftDef');
        if (count < itemCount - 1) {
            count++;
        }
        if (count == 11) {
            $('.next').addClass('nextDefoult');
            $('.fa-chevron-right').addClass('fa-chevron-rightDef');
        }

        items[count].classList.add('active');
        console.log(count);
    }

    function showPreviousItem() {
        items[count].classList.remove('active');
        $('.next').removeClass('nextDefoult');
        $('.fa-chevron-right').removeClass('fa-chevron-rightDef');
        $('.previous').removeClass('previousDefoult');
        $('.fa-chevron-left').removeClass('fa-chevron-leftDef');

        if (count > 0) {
            count--;
        }
        if (count == 0) {
            $('.previous').addClass('previousDefoult');
            $('.fa-chevron-left').addClass('fa-chevron-leftDef');
        }

        items[count].classList.add('active');
        console.log(count);
    }

    function keyPress(e) {
        e = e || window.event;

        if (e.keyCode == '37') {
            showPreviousItem();
        } else if (e.keyCode == '39') {
            showNextItem();
        }
    }

    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);
})
