$(document).ready(function() {
    // Select the violet panels and remove the color-white class
    var $violetPanels = $('.panel[data-color="violet"]');
    $violetPanels.removeClass('color-white');

    // Select the white panels and add the color-white class
    var $whitePanels = $('.panel[data-color="white"]');
    $whitePanels.addClass('color-white');
});
