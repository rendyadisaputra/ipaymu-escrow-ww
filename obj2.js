$(document).ready(function () {
    //alert("ini out.source.js lo");
    /*$('body #payment-options').append('' +
    '<div class="container">' +
        '<div class="eight columns">' +
            '<div style="margin-bottom:5px;" class="payment-option">'+
                 '<h3 class="form-title"><strong>Pilih optional pembayaran</strong></h3>' +
                    '<div class="payment-form">' +
                    '<div class="t_"><input type="radio" name="optional_pembayaran" id="member_"/> <label for="member_">iPaymu</label> </div>' +
                    '<div class="t_"><input type="radio" name="optional_pembayaran" id="atm_"/> <label for="atm_">Bank Transfer</label></div>' +
                    '</div>' +
            '</div>' +
        '</div>' +
    '</div>');*/
    $('meta[name=viewport]').attr("content","width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no");
    if($("#non-member #nameac").val()=="") $("#non-member #emailaccount").val($("#q_").attr("email"));
    if($("#non-member #nameac").val()=="") $("#non-member #nameac").val($("#q_").attr("name"));
    if($("#non-member #phone").val()=="") $("#non-member #phone").val($("#q_").attr("phone"));
    $('#non-member>p:first-child').html("Silahkan isi data Bank berikut: ");
    $('body').prepend('<link rel="stylesheet" type="text/css" href="https://rawgit.com/rendyadisaputra/testagain/master/stylenew.css">');
    $('body').prepend('<style type="text/css">.transaction thead,.transaction tbody{display:none}#transaction-detail> strong{display:none}#member-form{display:none}#nonmember-form{}#non-member fieldset > p.field:nth-child(1),#non-member fieldset > p.field:nth-child(2),#non-member fieldset > p.field:nth-child(3){display:none}.logo img{height:45px}</style>');
    $("#header .container").prepend("<div class='smart_header'><div class='img'><img src='https://s5.postimg.org/6cdjwwt4n/Motor_city_Logo.jpg'/></div></div>")
    $('h3.form-title').click();

})
