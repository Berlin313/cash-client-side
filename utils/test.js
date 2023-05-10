



b = () => {
    i = "XXXX-XXXXXX-XXXX/80/AAAA-SSSSSS-AAAA/72.60/VVVV-SASACZZ-AAADA/32.1"
    codearr = []
    prices = []

    arr = i.split("/")
    for (let i = 0; i < arr.length; i++) {
        if (i%2==0){
            codearr.push(arr[i])
            }
            else {
            prices.push(parseFloat(arr[i]));
            }
    }
    codearr = codearr.filter((str) => str != '');
    pricessum = prices.reduce(function(a, b){
        return a+b;
    });
    return [codearr, prices, pricessum];
}



console.log(b());