import React from 'react';
import {render} from '@testing-library/react';
import useFileUploader from './useFileUploader';

test('exposes the error, isLoading, searchQuery, filteredFiles, and fileChangeHandler, deleteHandler, searchChangeHandler functions', () => {
  const result = {};
  const TestComponent = () => {
    result.current = useFileUploader();
    return null;
  }
  render(<TestComponent />);
  expect(result.current.error).toBe(null);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.searchQuery).toBe('');
  expect(result.current.fileChangeHandler).toBeDefined();
  expect(result.current.deleteHandler).toBeDefined();
  expect(result.current.searchChangeHandler).toBeDefined();
  expect(result.current.filteredFiles).toEqual([]);
})
