const getTheTitles = function(arr) {
    let titles = [];
    for (obj of arr) titles.push(obj["title"]);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
