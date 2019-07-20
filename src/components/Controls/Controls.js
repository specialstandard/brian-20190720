import React from 'react';
import './Controls.css';

const Controls = ({ fileInput, searchQuery, searchChangeHandler, fileChangeHandler }) => (
  <div className="controls">
    <input className="searchBox" type="text" value={searchQuery} onChange={searchChangeHandler} placeholder="Search documents..."/>
    <label className="uploadButton">UPLOAD
      <input type="file" hidden onChange={fileChangeHandler} />
    </label>
  </div>
)

export default Controls;
