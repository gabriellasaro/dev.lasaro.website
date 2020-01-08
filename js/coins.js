function get_coin(coin, symbol){
    fetch('https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+coin.toUpperCase()+'&tsym='+symbol).then(function(response) {
        return response.json();
    }).then(function(data) {
        let percent = ((data['Data']['AggregatedData']['PRICE']*100)/data['Data']['AggregatedData']['OPEN24HOUR']-100).toFixed(2);

        let root = document.querySelector('.coin.'+coin+' .price');
        let ele_price = document.createElement('span');
        let ele_percent = document.createElement('span');
        ele_percent.classList.add('txt');

        if (percent>=0){
            ele_price.textContent = '⬆️ R$'+data['Data']['AggregatedData']['PRICE'].toString().replace('.', ',');
            ele_percent.style.color = '#3689e6';
            ele_percent.textContent = ' +'+percent.toString().replace('.', ',')+'%';
        }else{
            ele_price.textContent = '⬇️ R$'+data['Data']['AggregatedData']['PRICE'].toString().replace('.', ',');
            ele_percent.style.color = '#ed5353';
            ele_percent.textContent = ' '+percent.toString().replace('.', ',')+'%';
        }
        root.textContent = '';
        root.appendChild(ele_price);
        root.appendChild(ele_percent);
    }).catch(function() {
        console.log("Error!");
    });
}

get_coin('btc', 'BRL');
get_coin('eth', 'BRL');