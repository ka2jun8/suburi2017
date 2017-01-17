/* @flow */
import tester from '../src/tester';
import test from 'ava';

test(t => {
  t.is(tester(), 1);
});

