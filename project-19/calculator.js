const createCalculator = function () {
    let result = 0;

    return {
        set: (num) => (result = num),
        add: (num) => (result += num),
        mult: (num) => (result *= num),
        sub: (num) => (result -= num),
        div: (num) => (result /= num),
    };
};

export const calculator = createCalculator();
