const utils = {
  getRomanNumber(num) {
    const map = {
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let romanNumber = "";
    for (let key in map) {
      const repeatCounter = Math.floor(num / map[key]);
      if (repeatCounter !== 0) {
        romanNumber += key.repeat(repeatCounter);
      }

      num %= map[key];

      if (num === 0) {
        break;
      }
    }
    return romanNumber;
  },
};

export default utils;
