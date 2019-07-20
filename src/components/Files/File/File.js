import React from 'react';
import './File.css';
import bytesToKilobytes from '../../../utils/bytesToKilobytes';

const File = ({ file, deleteHandler }) => (
  <div className="file" key={file.name}>
    <div className="fileInfo">
      <div className="fileName" data-testid="fileName">{file.name.split('.').slice(0, -1).join('.')}</div>
      <div className="fileSize">{bytesToKilobytes(file.size)}kb</div>
    </div>
    <div className="deleteButton">
      <button onClick={() => deleteHandler(file.name)} data-testid="deleteButton">delete</button>
    </div>
  </div>
)

export default File;
