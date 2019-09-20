function get_coin(coin, symbol){
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+coin.toUpperCase()+'&tsym='+symbol,
        type: 'get',
        dataType: 'json',
    }).done(function(data){
        $('.coin.'+coin+' #master').text("R$"+data['Data']['AggregatedData']['PRICE'].toString().replace('.', ','))
        $('.coin.'+coin+' #a').text("R$"+data['Data']['AggregatedData']['HIGHDAY'].toString().replace('.', ','))
        $('.coin.'+coin+' #b').text("R$"+data['Data']['AggregatedData']['LOWDAY'].toString().replace('.', ','))
    });
}
get_coin('btc', 'BRL');
get_coin('eth', 'BRL');