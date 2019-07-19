import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const TYPES = ['image/png', 'image/jpeg'];
  const MAX_SIZE = 10000000;
  // const MAX_SIZE = 10000;

  const [error, setError] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect((event) => {
    setFilteredFiles(allFiles.filter(({ name }) => name.includes(searchQuery)))
  }, [allFiles, searchQuery])

  const fileChangeHandler = (event) => {
    console.log('event.target.files: ', event.target.files);
    const file = event.target.files[0]

    if(file.size > MAX_SIZE) {
      console.log('too big');
      return;
    }
    if(!TYPES.includes(file.type)) {
      console.log('must be png or jpeg');
      return;
    }
    const data = new FormData()
    data.append('file', file)

    console.log('process.env: ', process.env);
    axios.post(process.env.REACT_APP_API_URL, data)
      .then(() => {
        console.log('success uploading')
        setAllFiles([...allFiles, file])
      })
      .catch(error => {
        console.log('error: ', error);
      })
  }

  const searchChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">

        <div className="controls">
          <input className="searchBox" type="text" value={searchQuery} onChange={searchChangeHandler} placeholder="Search documents..."/>
          <label className="uploadButton">UPLOAD
            <input type="file" hidden class="form-control" onChange={fileChangeHandler} />
          </label>
        </div>

        <div className="files">
          {filteredFiles.map((file) => (
            <div className="file">{file.name}</div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
