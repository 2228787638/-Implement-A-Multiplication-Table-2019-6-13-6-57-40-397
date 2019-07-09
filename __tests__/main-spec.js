const {isStartNumberSmallerAndEqualEndNumber} = require('../main');
const {isInRangeof1To1000} = require('../main');
const {generateMultiplicationTable} = require('../main');
const {createMultiplicationTable} = require('../main');

//isStartNumberSmallerAndEqualEndNumber
it ('should is the startNmuber smaller than endNumber', () => {
    expect(isStartNumberSmallerAndEqualEndNumber(2, 3)).toBe(true);
});
it ('should is the startNmuber smaller than endNumber', () => {
    expect(isStartNumberSmallerAndEqualEndNumber(3, 2)).toBe(false);
});
//isInRangeOfOneToThousand
it ('should is the startNmuber and endNumber are in range of 1 to 1000', () => {
    expect(isInRangeof1To1000(1, 500)).toBe(true);
});
it ('should is the startNmuber is not in range of 1 to 1000 and endNumber is in range of 1 to 1000', () => {
    expect(isInRangeof1To1000(0, 500)).toBe(false);
});
it ('should is the startNmuber is in range of 1 to 1000 and endNumber is not in range of 1 to 1000', () => {
    expect(isInRangeof1To1000(1, 0)).toBe(false);
});
it ('should is the startNmuber and endNumber are not in range of 1 to 1000', () => {
    expect(isInRangeof1To1000(0, 0)).toBe(false);
});
//generateMultiplicationTable
it ('should is generate multiplication table between startNmuber and endNumber', () => {
    expect(generateMultiplicationTable(2, 4)).toBe("2*2=4 2*3=6 3*3=9 2*4=8 3*4=12 4*4=16 ");
});

//createMultiplicationTable
it ('should is create multiplication table between startNmuber and endNumber', () => {
    expect(createMultiplicationTable(2, 4)).toBe("2*2=4 2*3=6 3*3=9 2*4=8 3*4=12 4*4=16 ");
});
it ('should is create multiplication table between startNmuber and endNumber', () => {
    expect(createMultiplicationTable(2, 1)).toBe(null);
});