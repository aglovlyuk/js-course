const isValidDateFormat = function (str) {
    const regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
    return regexp.test(str);
};

export default isValidDateFormat;
