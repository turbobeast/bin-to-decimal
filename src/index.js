const binToDecimal = bin => {
  'use strict';
  if (typeof bin !== 'string') {
    bin = String(bin);
  }
  const l = bin.length;
  let dec = 0;
  for(let i = l-1; i >= 0; --i) {
    if(bin[i] !== '1' && bin[i] !== '0') {
      throw new Error(`binToDecimal can only convert binary numbers. ${bin} is not valid`);
    }
    const one_zer = parseInt(bin[i], 2);
    dec += one_zer * Math.pow(2, l-i-1);
  }
  return dec;
};

module.exports = binToDecimal;
