const findTheOldest = function(arr) {
    let oldestPerson = {};
    let oldestAge = -1;

    for (obj of arr) {
        const age = (obj["yearOfDeath"] || new Date().getFullYear()) - obj["yearOfBirth"]
        if (oldestAge < age) {
            oldestAge = age;
            oldestPerson = obj;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
