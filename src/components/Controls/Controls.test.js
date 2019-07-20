import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls';

let mockSearchQuery = ''

test('renders search input and upload button', () => {
  const {getByTestId} = render(
    <Controls
      searchQuery={mockSearchQuery}
      searchChangeHandler={jest.fn(() => null)}
      fileChangeHandler={jest.fn(() => null)}
    />
  )
  const searchBox = getByTestId('searchBox');
  const uploadButton = getByTestId('uploadButton');

  expect(searchBox).toBeDefined();
  expect(uploadButton.innerHTML).toContain('UPLOAD');
})
