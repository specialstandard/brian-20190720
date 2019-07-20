import React from 'react';
import './Controls.css';

const Controls = ({ searchQuery, searchChangeHandler, fileChangeHandler }) => (
  <div className="controls">
    <input className="searchBox" type="text" value={searchQuery} onChange={searchChangeHandler} placeholder="Search documents..." data-testid="searchBox" />
    <label className="uploadButton" data-testid="uploadButton">UPLOAD
      <input type="file" hidden onChange={fileChangeHandler} />
    </label>
  </div>
)

export default Controls;
