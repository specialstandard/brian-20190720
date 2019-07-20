import React from 'react';
import './Files.css';
import File from './File/File';

const Files = ({ filteredFiles, deleteHandler }) => (
  <div className="files">
    {filteredFiles.map((file) => (
      <File file={file} deleteHandler={deleteHandler} key={file.name}/>
    ))}
  </div>
)

export default Files;
