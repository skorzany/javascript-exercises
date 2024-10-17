const palindromes = function (txt) {
    txt = txt.toLowerCase().replace(/\W/g, "");
    return txt === [...txt].reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
