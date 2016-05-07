'use strict';

const binToDecimal = require('../src/index.js');
const test =  require('tape');

test('number', t => {
  t.plan(9);
  t.equal(binToDecimal(1), 1);
  t.equal(binToDecimal(11), 3);
  t.equal(binToDecimal(10000), 16);
  t.equal(binToDecimal(11111111), 255);
  t.equal(binToDecimal(10101010110), parseInt((10101010110).toString(), 2));
  t.equal(binToDecimal(111000011), parseInt((111000011).toString(), 2));
  t.equal(binToDecimal(11010110), parseInt((11010110).toString(), 2));
  t.equal(binToDecimal(11101), parseInt((11101).toString(), 2));
  t.equal(binToDecimal(1111111000001111), parseInt((1111111000001111).toString(), 2));
});

test('string', t => {
  t.plan(10);
  t.equal(binToDecimal('1'), 1);
  t.equal(binToDecimal('11'), 3);
  t.equal(binToDecimal('10000'), 16);
  t.equal(binToDecimal('11111111'), 255);
  t.equal(binToDecimal('10101010110'), parseInt((10101010110).toString(), 2));
  t.equal(binToDecimal('111000011'), parseInt((111000011).toString(), 2));
  t.equal(binToDecimal('11010110'), parseInt((11010110).toString(), 2));
  t.equal(binToDecimal('11101'), parseInt((11101).toString(), 2));
  t.equal(binToDecimal('1111111000001111'), parseInt((1111111000001111).toString(), 2));
  t.equal(binToDecimal('1000101010111000111'), 284103);
});

test('invalid', t => {
  t.plan(9);
  t.throws(binToDecimal.bind(null, '2'));
  t.throws(binToDecimal.bind(null, 123));
  t.throws(binToDecimal.bind(null, 'banana'));
  t.throws(binToDecimal.bind(null, null));
  t.throws(binToDecimal.bind(null, undefined));
  t.throws(binToDecimal.bind(null, 2));
  t.throws(binToDecimal.bind(null, 100000002));
  t.throws(binToDecimal.bind(null, 10000003));
  t.throws(binToDecimal.bind(null, {}));
});
