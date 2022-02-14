// set endpoint and your access key
endpoint = 'convert';
access_key = 'API_KEY_CONVERT';

// define from currency, to currency, and amount
from = 'EUR';
to = 'GBP';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
                
    }
});