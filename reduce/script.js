function extractValue(array, key) {
    let newArray = [];
    array.reduce(function(accumulator, nextValue) {
        newArray.push(nextValue[key]);
    }, array[0][key])
    return newArray;
}

function vowelCount(string) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(acc, next) {
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCase) !== -1) {
            if(acc[lowerCased]) {
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
    }, {})
}

function addKeyAndValue(array, key, value) {
    return array.reduce(function(accumulator, next, idx) {
        array[idx][key] = value
        return accumulator;
    }, array)
}

function partition(array, callback) {
    return array.reduce(function(accumulator, next) {
        if (callback(next)) {
            accumulator[0].push(next);
        } else {
            accumulator[1].push(next);
        }
        return accumulator;
    }, [[],[]])
}