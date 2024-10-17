const sumAll = function(start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (start%1 !== 0 || end%1 !== 0) return "ERROR";
    if (typeof start !== "number" || typeof end !== "number") return "ERROR";

    let total = 0;
    if (end < start) [start, end] = [end, start];
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
