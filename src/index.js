// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const exchange = {};
    const error = {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (currency === 0 || currency < 0) {
        return exchange;
    }

    else if (currency >= 10000){
      return error;
    }

    else {
        exchange.H = Math.floor(currency / 50);
        currency = currency - exchange.H * 50;
        exchange.Q = Math.floor(currency / 25);
        currency = currency - exchange.Q * 25;
        exchange.D = Math.floor(currency / 10);
        currency = currency - exchange.D * 10;
        exchange.N = Math.floor(currency / 5);
        currency = currency - exchange.N * 5;
        exchange.P = currency;

        for (let key in exchange) {
            if (exchange[key] === 0) {
                delete exchange[key];
            }
        }
        return exchange;
        }   
         
    } 

