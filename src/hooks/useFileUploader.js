import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

export default function useFileUploader() {
  const TYPES = ['image/png', 'image/jpeg'];
  const MAX_SIZE = 10000000;

  const [error, setError] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFilteredFiles(allFiles.filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase())));
    setError(null);
  }, [allFiles, searchQuery])

  const fileChangeHandler = useCallback((event) => {
    console.log('event.target.files: ', event.target.files);
    const file = event.target.files[0]
    event.target.value = null;

    if(allFiles.some((existingFile) => existingFile.name === file.name)) {
      console.log('File has already been uploaded');
      setError('File has already been uploaded');
      return;
    }
    if(file.size > MAX_SIZE) {
      console.log('File must be less than 10MB');
      setError('File must be less than 10MB');
      return;
    }
    if(!TYPES.includes(file.type)) {
      console.log('File must be PNG or JPEG format');
      setError('File must be PNG or JPEG format');
      return;
    }
    const data = new FormData();
    data.append('file', file);

    console.log('process.env: ', process.env);
    setIsLoading(true)
    axios.post(process.env.REACT_APP_API_URL, data)
      .then(() => {
        console.log('success uploading');
        setAllFiles([...allFiles, file]);
      })
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [TYPES, allFiles])

  const deleteHandler = useCallback((fileName) => {
    setAllFiles(allFiles.filter((file) => file.name !== fileName));
  }, [allFiles])

  const searchChangeHandler = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, [])

  return [error, isLoading, searchQuery, filteredFiles, fileChangeHandler, deleteHandler, searchChangeHandler];
}
