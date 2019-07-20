import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Files from './Files';
import ReactDOM from 'react-dom';

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

test('renders multiple files', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Files filteredFiles={mockfilteredFiles} deleteHandler={jest.fn(() => null)}/>, div);
  expect(div.querySelectorAll('.file').length).toBe(2);
})
