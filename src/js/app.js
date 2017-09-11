$('.order__customers-form_labels').on('click',function () {
    $(this).find('input').each(function () {
        if($(this).prop("checked")){
           if($(this).attr('id')=='order-new-customer'){
               $('.order__customers-form_new').removeClass('non-shown').addClass('shown');
               $('.order__customers-form_registered').removeClass('shown').addClass('non-shown');
           }else if($(this).attr('id')=='order-registered-customer'){
               $('.order__customers-form_new').removeClass('shown').addClass('non-shown');
               $('.order__customers-form_registered').removeClass('non-shown').addClass('shown');
           }
        }
    })
});
$('#order-input-holder span').on('click',function () {
    $('#order-input-holder span').each(function () {
        $(this).removeClass('non-shown').addClass('shown')
    });
    $(this).removeClass('shown').addClass('non-shown');
    if($('#order-add-coment').hasClass('non-shown')){
        $('#order-input-holder').addClass('textarea-shown');
    }else{
        $('#order-input-holder').removeClass('textarea-shown');
    }
});