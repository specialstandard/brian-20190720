import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';

test('renders an error when error', async() => {
  const error = 'File must be less than 10MB';
  const {container} = render(<Error error={error} />);
  expect(container).toHaveTextContent(error)/
})

test('does not render an error when no error', async() => {
  const error = 'File must be less than 10MB';
  const {container} = render(<Error error={null} />);
  expect(container).not.toHaveTextContent(error);
})
