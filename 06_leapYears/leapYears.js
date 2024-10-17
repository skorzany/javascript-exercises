const leapYears = function(year) {
    if (year%4) return false;
    if (year%100) return true;
    return year%400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
