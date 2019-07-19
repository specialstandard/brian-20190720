import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loaded, setLoaded] = useState(0)

  const onChangeHandler = (event) => {
    const files = event.target.files
  }
  return (
    <div className="App">
      <input type="text" placeholder="Search documents..."/>
      <label className="uploadButton">UPLOAD
        <input type="file" hidden class="form-control" multiple onChange={onChangeHandler} />
      </label>
    </div>
  );
}

export default App;
