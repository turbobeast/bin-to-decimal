const binToDecimal = bin => {
  const l = bin.length;
  let dec = 0;
  for(let i = l-1; i >= 0; --i) {
    let one_zer = parseInt(bin[i], 2);
    dec += one_zer * Math.pow(2, l-i-1);
  }
  return dec;
};

module.exports = binToDecimal;
