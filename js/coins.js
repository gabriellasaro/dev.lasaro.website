function get_coin(coin, symbol){
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+coin.toUpperCase()+'&tsym='+symbol,
        type: 'get',
        dataType: 'json',
    }).done(function(data){
        var percent = ((data['Data']['AggregatedData']['PRICE']*100)/data['Data']['AggregatedData']['OPEN24HOUR']-100).toFixed(2).toString();
        if (percent>=0){
            $('.coin.'+coin+' #master').text("⬆️ R$"+data['Data']['AggregatedData']['PRICE'].toString())
            $('.coin.'+coin+' #a').text("+"+percent+"%")
        }else{
            $('.coin.'+coin+' #master').text("⬇️ R$"+data['Data']['AggregatedData']['PRICE'].toString())
            $('.coin.'+coin+' #a').text(percent+"%")

        }
    });
}
get_coin('btc', 'BRL');
get_coin('eth', 'BRL');