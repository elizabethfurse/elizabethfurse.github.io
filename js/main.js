
$( document ).ready(function() {

    $('input, textarea').placeholder();

    $('.fb-like-box').css('height', '540px');
    // console.log("updated fb iframe");

    // wait a few seconds (for facebook content to load) then style it
    // Note - issue accessing https facebook iframe from non-https code.
    // setTimeout(
    //     function(){
    //         $('.fb-like-box iframe').contents()
    //             .find('.mhs.pluginBoxDivider.pluginBoxDividerGray')
    //             .css('margin', '0');
    //         console.log("hello rachel! I just waited a bit.");
    //     }, 3000
    // );

});

//.mhs.pluginBoxDivider.pluginBoxDividerGray
// //$('.fb-like-box iframe').contents().find('.fb-like-box')
        //delay(2000).css('height', '540px');
