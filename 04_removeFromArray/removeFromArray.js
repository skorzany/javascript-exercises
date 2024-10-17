const removeFromArray = function(...params) {
    const arr = params[0];
    const unwanted = params.slice(1);
    let answer = [];
    for (element of arr) {
        if (!unwanted.includes(element)) answer.push(element);
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
