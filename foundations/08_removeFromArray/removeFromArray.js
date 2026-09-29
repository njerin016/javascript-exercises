const removeFromArray = function(arr, ...toBeRemoved) {

    let result = [];

    for (const item of arr) {
        if (toBeRemoved.includes(item)) {
            continue;
        }
        else {
            result.push(item)
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
