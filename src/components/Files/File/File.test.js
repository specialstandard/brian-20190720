import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import File from './File';

const mockFile = {
  name: 'file1.png',
  size: 1000,
}
const expectedFile = {
  name: 'file1',
  size: 1,
};

test('renders a file, fileName without extension, size in kb, and delete button', () => {
  const {getByTestId} = render(<File file={mockFile} deleteHandler={jest.fn(() => null)}/>);
  const file = getByTestId('fileName');
  const deleteButton = getByTestId('deleteButton');

  expect(file).toHaveTextContent(expectedFile.name);
  expect(file).toHaveTextContent(expectedFile.size);
  expect(deleteButton).not.toBeNull();
})
