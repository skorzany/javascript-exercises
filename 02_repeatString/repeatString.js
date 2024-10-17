const repeatString = function(txt, num) {
    if (num < 0) return "ERROR";
    
    let answer = [];
    for (let i = 0; i < num; i++) {
        answer.push(txt);
    }
    return answer.join('');
};

// Do not edit below this line
module.exports = repeatString;
