import bytesToKilobytes from '../bytesToKilobytes';

test('should convert 1000 bytes to 1 Kilobyte', () => {
  expect(bytesToKilobytes(1000)).toEqual(1);
})

test('should convert 1000000 bytes to 1000 Kilobytes', () => {
  expect(bytesToKilobytes(1000000)).toEqual(1000);
})
