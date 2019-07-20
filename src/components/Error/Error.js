import React from 'react';
import './Error.css';

const Error = ({ error }) => (
  <>
    {error && <div className="error">{error}</div>}
  </>
)

export default Error;
