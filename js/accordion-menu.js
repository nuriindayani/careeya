jQuery(function($) { var menu_ul = $('.generic-sliding-menu > li.add-sub-menu > ul'),
        menu_a = $('.generic-sliding-menu > li.add-sub-menu > a');
    menu_ul.hide();
    menu_a.first().addClass();
    menu_a.click(function(e) { e.preventDefault(); if (!$(this).hasClass('open')) { menu_a.removeClass('open');
            menu_ul.filter(':visible').slideUp();
            $(this).addClass('open').next().stop(true, true).slideDown(); } else { $(this).removeClass('open');
            $(this).next().stop(true, true).slideUp(); } }); var hash = window.location.hash; var thash = hash.substring(hash.lastIndexOf('#'), hash.length);
    $('.generic-accord-container').find('a[href*=' + thash + ']').each(function() { var anchor = $(this).attr("href"); var anchorName = anchor.replace('#', '');
        $(this).attr("name", anchorName); }); });