var calculManager = {
    additionner: function (n) {
        var s = 0;
        for (var i = 0; i <= n; i++) {
            s += i;
            return s;
        }
    },
    multiplier: function (n) {
        var s = 1;
        for (var i = 1; i <= n; i++) {
            s *= i;
            return s;
        }
    }
};

module.exports("calculManager");