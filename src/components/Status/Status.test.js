import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Status from './Status';

const mockfilteredFiles = [
  {
    name: 'file1.png',
    size: 1000,
  },
  {
    name: 'file2.png',
    size: 2000,
  },
];

test('renders status, number of files, and total file size in kb', () => {
  const {getByTestId} = render(<Status filteredFiles={mockfilteredFiles} deleteHandler={jest.fn(() => null)}/>);
  const count = getByTestId('count');
  const totalSize = getByTestId('totalSize');

  expect(count.innerHTML).toBe(`${mockfilteredFiles.length} documents`);
  expect(totalSize.innerHTML).toBe('Total size: 3kb');
})
