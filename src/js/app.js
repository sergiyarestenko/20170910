

createSlider($( "#sms-alert-scale" ),$( "#sms-alert-scale-handle" ));
createSlider($( "#email-alert-scale" ),$( "#email-alert-scale-handle" ));


function createSlider(parent, children) {
    var handle = $(children);
   handle.append("<span></span>");
    $(parent).slider({
        create: function() {
            handle.find('span').text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.find('span').text( ui.value );
        },
        min:1,
        max:100
    });
}


$('.alerts-scale-max').blur(function () {
   var currentScale =  $(this).parent().find('.alerts-scale');
    $(currentScale).slider( "option", "value", 1 );
    $(currentScale).find('.ui-slider-handle').find('span').text('1');
    $(currentScale).slider( "option", "max", $(this).val() );
});