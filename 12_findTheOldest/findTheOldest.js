function getAge(obj) {
    const dod = ('yearOfDeath' in obj) ? obj.yearOfDeath : (new Date()).getFullYear();
    return dod - obj.yearOfBirth;
}

const findTheOldest = function(arr) {
    return arr.reduce((accumulator, current) => {
        return (getAge(accumulator) < getAge(current)) ? current : accumulator;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
