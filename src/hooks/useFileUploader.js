import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

export default function useFileUploader() {
  const ALLOWED_TYPES = ['image/png', 'image/jpeg'];
  const MAX_SIZE = 10000000;

  const [error, setError] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFilteredFiles(allFiles.filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase())));
    setError(null);
  }, [allFiles, searchQuery])

  const fileChangeHandler = useCallback((event) => {
    const file = event.target.files[0];
    event.target.value = null;

    if(allFiles.some((existingFile) => existingFile.name === file.name)) {
      setError('File has already been uploaded');
      return;
    }
    if(file.size > MAX_SIZE) {
      setError('File must be less than 10MB');
      return;
    }
    if(!ALLOWED_TYPES.includes(file.type)) {
      setError('File must be PNG or JPEG format');
      return;
    }
    const data = new FormData();
    data.append('file', file);

    setIsLoading(true);
    axios.post(process.env.REACT_APP_API_URL, data)
      .then(() => {
        setAllFiles([...allFiles, file]);
      })
      .catch(error => {
        setError('Sorry, there was an error uploading. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [ALLOWED_TYPES, allFiles])

  const deleteHandler = useCallback((fileName) => {
    setAllFiles(allFiles.filter((file) => file.name !== fileName));
  }, [allFiles])

  const searchChangeHandler = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, [])

  return {error, isLoading, searchQuery, filteredFiles, fileChangeHandler, deleteHandler, searchChangeHandler};
}
