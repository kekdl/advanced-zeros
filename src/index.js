module.exports = function getZerosCount(number, base) {
    // your implementation

    function simple(num) {
        var x = num;
        var sqrt = Math.sqrt(x);
        var currentValue = x;
        var multiplier = 2;
        var result = [];
        while (currentValue > 1 && multiplier <= sqrt) {
            if (currentValue % multiplier == 0) {
                result.push(multiplier);
                currentValue /= multiplier;
            } else if (multiplier == 2) {
                multiplier++;
            } else {
                multiplier += 2;
            }
        }
        if (currentValue != 1) {
            result.push(currentValue);
        }
        return result;

    }

    // base = 72;
    var result = simple(base);
    //  number = 1000;
    console.log(result);
    var a = [];
    var resultlength = result.length;

    var p = new Set();
    for (var i = 0; i < resultlength; i++) {
        p.add(result[i])
    }
    console.log(p);

    var power = 0;
    var temp = result[0];

    for (var value of p.values()) {
        for (var i = 0; i < resultlength; i++) {
            if (value == result[i]) power++;
        }
        a.push(power);
        power = 0;
    }


    console.log(a, p);
    var sa = [];
    var pp = [];
    var i = 0;
    for (var value of p.values()) {
        sa[i] = 0;
        pp[i] = value;
        i++;

    }
    console.log(sa, pp);

    for (var i = 2; i <= number; i++) {
        tmp = i;
        var j = 0;
        for (var value of p.values()) { //цикл по всем простым числам, составляющим основание, в примере L должно быть равно 2
            while (!(tmp % value)) {
                tmp = tmp / value;
                sa[j]++;
            } //считаем кол-во степеней
            j++;
        }
    }
    console.log(sa);

    tmp = Math.floor(sa[0] / a[0]);
    console.log(tmp);

    for (var i = 0; i < pp.length; i++) {
        if (tmp < Math.floor(sa[i] / pp[i]))
            tmp = Math.floor(sa[i] / pp[i]);
        console.log(i, sa[i], pp[i], tmp);

    }
    console.log(tmp);
    return tmp;

}
