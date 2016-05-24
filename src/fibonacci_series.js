function fibonacci_series(n) {

    var newArray = [0, 1];

    for (var i = 2; i <= n; i++) {

        var temporary = newArray[i - 2] + newArray[i - 1];
        newArray.push(temporary);
    }

    return newArray;
}

module.exports = fibonacci_series;
