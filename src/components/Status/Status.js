import React from 'react';
import './Status.css';
import bytesToKilobytes from '../../utils/bytesToKilobytes';

const Status = ({ filteredFiles }) => (
  <div className="status">
    <div className="count">{filteredFiles.length} document{filteredFiles.length === 1 ? '' : 's'}</div>
    <div className="totalSize">Total size: {bytesToKilobytes(filteredFiles.reduce((acc, item) => acc + item.size, 0))}kb</div>
  </div>
)

export default Status;
