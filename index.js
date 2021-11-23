const returnFirstTwoDrivers = function (arr) {
    return [arr[0], arr[1]];
};

const returnLastTwoDrivers = function (arr) {
    return [arr[arr.length-2], arr[arr.length-1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
    return function (fare) {return fare*int};
};

const fareDoubler = fare => {
    let doubler = createFareMultiplier(2);
    return doubler(fare);
};

const fareTripler = fare => {
    let tripler = createFareMultiplier(3);
    return tripler(fare);
};

const selectDifferentDrivers = (arr, func) => {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr);
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arr);
    }
};