import React from 'react';
import './Loader.css';
import spinner from './spinner.gif';

const Loader = ({ isLoading }) => (
  <>
    {isLoading && <div className="loader"><img alt="Loading" src={spinner} /></div>}
  </>
)

export default Loader;
