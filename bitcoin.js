function get_value(){
    $.ajax({
        url: 'https://blockchain.info/pt/ticker',
        type: 'get',
        dataType: 'json',
    }).done(function(data){
        $('.bitcoin #a').text("R$"+data['BRL']['last'])
        $('.bitcoin #b').text("R$"+data['BRL']['buy'])
        $('.bitcoin #c').text("R$"+data['BRL']['sell'])
    });
}
get_value();