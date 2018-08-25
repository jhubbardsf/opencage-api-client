import * as opencage from '../src';

describe('Module', () => {
  test('Library exists', () => {
    expect(opencage).toBeTruthy();
    expect(typeof opencage).toBe('object');
  });
});
