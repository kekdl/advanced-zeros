module.exports = function getZerosCount(number, base) {
    // your implementation
    var x = base;
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
    var a = [];
    var resultlength = result.length;

    var p = new Set();
    for (var i = 0; i < resultlength; i++) {
        p.add(result[i])
    }
    var power = 0;
    var temp = result[0];

    for (var value of p.values()) {
        for (var i = 0; i < resultlength; i++) {
            if (value == result[i]) power++;
        }
        a.push(power);
        power = 0;
    }
    var sa = [];
    var pp = [];
    var i = 0;
    for (var value of p.values()) {
        sa[i] = 0;
        pp[i] = value;
        i++;

    }
    var pplenght = pp.length;
    for (var i = 2; i <= number; i++) {
        tmp = i;
        for (j = 0; j < pplenght; j++) {
            while (!(tmp % pp[j])) {
                tmp = tmp / pp[j];
                sa[j]++;
            } //считаем кол-во степеней
        }
    }
    tmp = Math.floor(sa[0] / a[0]);
    for (var i = 0; i < pplenght; i++) {
        if (tmp > Math.floor(sa[i] / a[i]))
            tmp = Math.floor(sa[i] / a[i]);
    }
    return tmp;
}
